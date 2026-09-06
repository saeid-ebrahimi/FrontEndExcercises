# Deep Thoughts

A React application for capturing, editing, and managing your deep thoughts. This example demonstrates multiple performance optimization techniques for a list-based application with complex interactions.

## The Problem

Try adding, editing, or deleting thoughts, especially when you have many of them. Notice how the entire list feels sluggish? That's because:

1. **Every thought re-renders when ANY thought changes** - Adding a new thought causes all existing thoughts to re-render
2. **New callback functions on every render** - Event handlers are recreated unnecessarily, breaking memoization
3. **Expensive inline calculations** - Word/character counts recalculate on every keystroke
4. **No component memoization** - Every render cascades through the entire component tree
5. **Array operations create new references** - State updates with `map()` and `filter()` create new arrays

With 5 thoughts this is barely noticeable. With 50 thoughts, it becomes sluggish. With 500 thoughts, it's nearly unusable.

## Current Implementation (Unoptimized)

```tsx
function Application() {
  const [thoughts, setThoughts] = useState<DeepThought[]>(initialThoughts);

  // ❌ New function created on every render
  function addThought(content: string) {
    const newThought = createThought(content);
    setThoughts([...thoughts, newThought]); // Creates new array
  }

  // ❌ New function created on every render
  function updateThought(id: string, changes: ThoughtChanges) {
    const thought = thoughts.find((t) => t.id === id);
    if (!thought) return;
    const updatedThought = { ...thought, ...changes };
    setThoughts(thoughts.map((t) => (t.id === id ? updatedThought : t))); // Creates new array
  }

  // ❌ New function created on every render
  function deleteThought(id: string) {
    setThoughts(thoughts.filter((t) => t.id !== id)); // Creates new array
  }

  return (
    <Container>
      <CaptureThought onSubmit={addThought} />
      {/* ❌ All thoughts re-render on every state change */}
      <Thoughts
        thoughts={thoughts}
        addThought={addThought}
        updateThought={updateThought}
        deleteThought={deleteThought}
      />
    </Container>
  );
}

// ❌ Not memoized - re-renders even when props don't change
export const Thought = ({ id, content, addThought, deleteThought }: ThoughtProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(content);

  return (
    <div>
      <p>{content}</p>
      {/* ❌ Inline function creates new reference on every render */}
      <Button onClick={() => addThought(content)}>Duplicate</Button>
      <Button onClick={() => deleteThought(id)}>Forget</Button>

      {isEditing && (
        <form>
          <Input value={draft} onChange={(e) => setDraft(e.target.value)} />
          {/* ❌ Expensive calculation on every render */}
          <div>{draft.trim().split(/\s+/).length} words</div>
        </form>
      )}
    </div>
  );
};
```

## Performance Issues Breakdown

### Unnecessary Re-renders

When you add a thought:

- `Application` component re-renders (expected)
- ALL `Thought` components re-render (unnecessary!)
- Even thoughts that haven't changed get new props and re-render

### New Function References

Every render creates new function objects:

```tsx
function addThought(content: string) { ... }  // New function every render
function updateThought(id: string) { ... }    // New function every render
function deleteThought(id: string) { ... }    // New function every render
```

These new references break `React.memo` and cause child components to re-render.

### Expensive Calculations

The word count in the edit form:

```tsx
{
  draft.trim().split(/\s+/).length;
}
words;
```

This calculation happens on **every keystroke** and **every re-render**, even when the draft hasn't changed.

### Inline Functions in Callbacks

```tsx
<Button onClick={() => addThought(content)}>Duplicate</Button>
```

Creates a new function every time the component renders.

## Optimization Solutions

<details>
<summary>Click to see Solution 1: useCallback for Functions</summary>

### Step 1: Wrap callbacks in useCallback

```tsx
import { useState, useCallback } from 'react';

function Application() {
  const [thoughts, setThoughts] = useState<DeepThought[]>(initialThoughts);

  // ✅ Memoized with useCallback
  const addThought = useCallback((content: string) => {
    const newThought = createThought(content);
    setThoughts((prev) => [...prev, newThought]);
  }, []);

  // ✅ Memoized with useCallback
  const updateThought = useCallback((id: string, changes: ThoughtChanges) => {
    setThoughts((prev) => prev.map((t) => (t.id === id ? { ...t, ...changes } : t)));
  }, []);

  // ✅ Memoized with useCallback
  const deleteThought = useCallback((id: string) => {
    setThoughts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // ✅ Memoized with useCallback
  const clearAll = useCallback(() => {
    setThoughts([]);
  }, []);

  return (
    <Container>
      <CaptureThought onSubmit={addThought} />
      <Thoughts
        thoughts={thoughts}
        addThought={addThought}
        updateThought={updateThought}
        deleteThought={deleteThought}
      />
      <Button onClick={clearAll}>Clear All</Button>
    </Container>
  );
}
```

**Key Changes:**

- Used `useCallback` to memoize all callback functions
- Used functional state updates (`prev => ...`) to avoid dependencies
- Empty dependency arrays mean functions never change

**Impact:** Prevents unnecessary re-renders caused by changing function references.

</details>

<details>
<summary>Click to see Solution 2: Memoize Components</summary>

### Step 2: Add React.memo to prevent unnecessary re-renders

```tsx
import { memo, useState, useCallback, useMemo } from 'react';

// ✅ Memoized - only re-renders if props change
export const Thought = memo(
  ({ id, content, createdAt, updateThought, deleteThought, addThought }: ThoughtProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(content);

    // ✅ Memoize callback to avoid re-creating on every render
    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();
        updateThought(id, { content: draft });
        setIsEditing(false);
      },
      [id, draft, updateThought],
    );

    // ✅ Memoize callback
    const handleDuplicate = useCallback(() => {
      addThought(content);
    }, [content, addThought]);

    // ✅ Memoize callback
    const handleDelete = useCallback(() => {
      deleteThought(id);
    }, [id, deleteThought]);

    // ✅ Memoize callback
    const toggleEdit = useCallback(() => {
      setIsEditing((prev) => !prev);
    }, []);

    // ✅ Memoize callback
    const resetDraft = useCallback(() => {
      setDraft(content);
    }, [content]);

    // ✅ Memoize expensive calculation
    const wordCount = useMemo(() => {
      const trimmed = draft.trim();
      return trimmed.length ? trimmed.split(/\s+/).length : 0;
    }, [draft]);

    const date = useMemo(() => {
      return new Date(createdAt).toLocaleString();
    }, [createdAt]);

    return (
      <div className="group flex flex-col gap-4 bg-slate-50 p-4 shadow-sm dark:bg-slate-800">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p>{content}</p>
            <time className="text-sm text-slate-500">{date}</time>
          </div>

          <div className="invisible flex gap-1 group-hover:visible">
            <Button size="small" variant="secondary" onClick={handleDuplicate}>
              Duplicate
            </Button>
            <Button size="small" variant="danger" onClick={handleDelete}>
              Forget
            </Button>
          </div>

          <Toggle checked={isEditing} label="Edit" onClick={toggleEdit}>
            Edit
          </Toggle>
        </div>

        {isEditing && (
          <form onSubmit={handleSubmit}>
            <Input
              label="Update Thought"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <div className="text-xs text-slate-500">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
              {' • '}
              {draft.length} {draft.length === 1 ? 'character' : 'characters'}
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" type="button" onClick={resetDraft}>
                Reset
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        )}
      </div>
    );
  },
);

Thought.displayName = 'Thought';

// ✅ Memoize the list component too
export const Thoughts = memo(({ thoughts, ...actions }: ThoughtsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {thoughts.map((thought) => (
        <Thought key={thought.id} {...thought} {...actions} />
      ))}
    </div>
  );
});

Thoughts.displayName = 'Thoughts';
```

**Key Changes:**

- Wrapped `Thought` and `Thoughts` with `React.memo`
- Memoized all callbacks within components using `useCallback`
- Memoized expensive calculations with `useMemo`
- No more inline arrow functions in JSX

**Impact:**

- Thoughts only re-render when their own data changes
- Adding a thought doesn't re-render existing thoughts
- Editing one thought doesn't affect others

</details>

<details>
<summary>Click to see Solution 3: useReducer for Complex State</summary>

### Step 3: Use useReducer for better state management

```tsx
import { useReducer, useCallback, memo } from 'react';

type ThoughtAction =
  | { type: 'ADD_THOUGHT'; content: string }
  | { type: 'UPDATE_THOUGHT'; id: string; changes: ThoughtChanges }
  | { type: 'DELETE_THOUGHT'; id: string }
  | { type: 'CLEAR_ALL' };

function thoughtsReducer(state: DeepThought[], action: ThoughtAction): DeepThought[] {
  switch (action.type) {
    case 'ADD_THOUGHT': {
      const newThought = createThought(action.content);
      return [...state, newThought];
    }
    case 'UPDATE_THOUGHT': {
      return state.map((t) => (t.id === action.id ? { ...t, ...action.changes } : t));
    }
    case 'DELETE_THOUGHT': {
      return state.filter((t) => t.id !== action.id);
    }
    case 'CLEAR_ALL': {
      return [];
    }
    default:
      return state;
  }
}

function Application() {
  const [thoughts, dispatch] = useReducer(thoughtsReducer, initialThoughts);

  // ✅ These callbacks never change because dispatch is stable
  const addThought = useCallback((content: string) => {
    dispatch({ type: 'ADD_THOUGHT', content });
  }, []);

  const updateThought = useCallback((id: string, changes: ThoughtChanges) => {
    dispatch({ type: 'UPDATE_THOUGHT', id, changes });
  }, []);

  const deleteThought = useCallback((id: string) => {
    dispatch({ type: 'DELETE_THOUGHT', id });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  return (
    <Container>
      <CaptureThought onSubmit={addThought} />
      <Thoughts
        thoughts={thoughts}
        addThought={addThought}
        updateThought={updateThought}
        deleteThought={deleteThought}
      />
      <Button onClick={clearAll}>Clear All</Button>
    </Container>
  );
}
```

**Benefits of useReducer:**

- More predictable state updates
- All logic centralized in one place
- `dispatch` is stable, so callbacks never change
- Better for complex state with multiple update types
- Easier to test reducers in isolation

</details>

<details>
<summary>Click to see Solution 4: Context + Memoization (Advanced)</summary>

### Step 4: Use Context to avoid prop drilling

When you have deeply nested components, passing callbacks through props can be tedious and hurt performance. Context provides a solution.

```tsx
import { createContext, useContext, useReducer, useCallback, memo } from 'react';

// Create contexts
const ThoughtsContext = createContext<DeepThought[]>([]);
const ThoughtActionsContext = createContext<ThoughtActions | null>(null);

// Custom hooks for easy access
export function useThoughts() {
  return useContext(ThoughtsContext);
}

export function useThoughtActions() {
  const context = useContext(ThoughtActionsContext);
  if (!context) throw new Error('useThoughtActions must be used within ThoughtsProvider');
  return context;
}

// Provider component
export function ThoughtsProvider({ children }: { children: React.ReactNode }) {
  const [thoughts, dispatch] = useReducer(thoughtsReducer, initialThoughts);

  // ✅ Memoize actions object so it doesn't change
  const actions = useMemo(
    () => ({
      addThought: (content: string) => dispatch({ type: 'ADD_THOUGHT', content }),
      updateThought: (id: string, changes: ThoughtChanges) =>
        dispatch({ type: 'UPDATE_THOUGHT', id, changes }),
      deleteThought: (id: string) => dispatch({ type: 'DELETE_THOUGHT', id }),
      clearAll: () => dispatch({ type: 'CLEAR_ALL' }),
    }),
    [],
  );

  return (
    <ThoughtsContext.Provider value={thoughts}>
      <ThoughtActionsContext.Provider value={actions}>{children}</ThoughtActionsContext.Provider>
    </ThoughtsContext.Provider>
  );
}

// Usage in components
function Application() {
  return (
    <ThoughtsProvider>
      <Container>
        <CaptureThought />
        <ThoughtsList />
        <ClearAllButton />
      </Container>
    </ThoughtsProvider>
  );
}

const CaptureThought = () => {
  const { addThought } = useThoughtActions();
  // ... rest of component
};

const Thought = memo(({ id, content, createdAt }: DeepThought) => {
  const { updateThought, deleteThought, addThought } = useThoughtActions();
  // ... rest of component
});
```

**Benefits:**

- No prop drilling
- Actions available anywhere in the tree
- Still performant with proper memoization
- Cleaner component APIs

**Trade-offs:**

- More complex setup
- Context updates can cause re-renders if not careful
- Need to split state and actions into separate contexts

</details>

## Performance Comparison

### Before Optimization

| Action                       | Components Re-rendered | Time  |
| ---------------------------- | ---------------------- | ----- |
| Add thought (5 thoughts)     | 7 components           | ~5ms  |
| Add thought (50 thoughts)    | 52 components          | ~50ms |
| Edit thought (50 thoughts)   | 52 components          | ~50ms |
| Delete thought (50 thoughts) | 51 components          | ~45ms |

### After Optimization (with React.memo + useCallback)

| Action                       | Components Re-rendered | Time |
| ---------------------------- | ---------------------- | ---- |
| Add thought (5 thoughts)     | 2 components           | ~2ms |
| Add thought (50 thoughts)    | 2 components           | ~2ms |
| Edit thought (50 thoughts)   | 2 components           | ~2ms |
| Delete thought (50 thoughts) | 2 components           | ~2ms |

**Result:** ~25x fewer re-renders and much faster interactions!

## Key Optimization Principles

### Memoize Callbacks with useCallback

```tsx
// ❌ New function every render
const handleClick = () => doSomething();

// ✅ Same function reference
const handleClick = useCallback(() => doSomething(), []);
```

### Memoize Components with React.memo

```tsx
// ❌ Re-renders even if props haven't changed
export const Thought = (props) => { ... };

// ✅ Only re-renders when props change
export const Thought = memo((props) => { ... });
```

### Memoize Expensive Calculations with useMemo

```tsx
// ❌ Recalculates every render
const wordCount = draft.trim().split(/\s+/).length;

// ✅ Only recalculates when draft changes
const wordCount = useMemo(() => draft.trim().split(/\s+/).length, [draft]);
```

### Use Functional State Updates

```tsx
// ❌ Depends on current state (needs dependency)
const add = useCallback(() => {
  setThoughts([...thoughts, newThought]);
}, [thoughts]); // Changes every time thoughts change!

// ✅ No dependencies needed
const add = useCallback(() => {
  setThoughts((prev) => [...prev, newThought]);
}, []); // Never changes!
```

### Avoid Inline Functions in JSX

```tsx
// ❌ New function every render
<Button onClick={() => deleteThought(id)}>Delete</Button>;

// ✅ Stable function reference
const handleDelete = useCallback(() => deleteThought(id), [id, deleteThought]);
<Button onClick={handleDelete}>Delete</Button>;
```

## When to Use Each Technique

### Use `useCallback` when:

- ✅ Passing callbacks to memoized child components
- ✅ Callbacks are dependencies of other hooks
- ✅ Callbacks are passed to many components
- ❌ Don't overuse - has overhead for simple components

### Use `React.memo` when:

- ✅ Component re-renders often with same props
- ✅ Component has expensive rendering logic
- ✅ Component is used in lists
- ❌ Don't use for every component - compare props has overhead

### Use `useMemo` when:

- ✅ Expensive calculations (arrays, objects, complex math)
- ✅ Creating stable object/array references for dependencies
- ✅ Calculations that happen frequently
- ❌ Don't use for simple calculations - overhead not worth it

### Use `useReducer` when:

- ✅ Complex state with multiple update patterns
- ✅ Next state depends on previous state
- ✅ Multiple related state updates
- ✅ Want to centralize state logic

## Testing Performance

### React DevTools Profiler

1. Open React DevTools
2. Go to Profiler tab
3. Click record
4. Interact with the app (add/edit/delete thoughts)
5. Stop recording
6. Analyze which components re-rendered and why

### Before optimization:

- Many unnecessary re-renders
- Each action causes cascade of updates

### After optimization:

- Only affected components re-render
- Minimal wasted renders

## Common Pitfalls

### Forgetting Dependencies

```tsx
// ❌ Missing dependency
const handleClick = useCallback(() => {
  doSomething(value); // value not in deps!
}, []);

// ✅ Include all dependencies
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);
```

### Comparing Objects/Arrays in memo

```tsx
// ❌ Shallow comparison fails for objects
export const Thought = memo((props) => { ... });

// ✅ Custom comparison for objects
export const Thought = memo((props) => { ... }, (prev, next) => {
  return prev.id === next.id && prev.content === next.content;
});
```

### Over-optimization

```tsx
// ❌ Unnecessary memoization
const simpleValue = useMemo(() => 2 + 2, []);

// ✅ Just use it directly
const simpleValue = 4;
```

## Learning Resources

- [React docs: useCallback](https://react.dev/reference/react/useCallback)
- [React docs: useMemo](https://react.dev/reference/react/useMemo)
- [React docs: memo](https://react.dev/reference/react/memo)
- [React docs: useReducer](https://react.dev/reference/react/useReducer)
- [React DevTools Profiler](https://react.dev/learn/react-developer-tools)
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)

## Summary

Deep Thoughts demonstrates that **preventing unnecessary re-renders** is often the biggest performance win in React applications. By using:

1. **`useCallback`** - Stable function references
2. **`React.memo`** - Component memoization
3. **`useMemo`** - Expensive calculation caching
4. **`useReducer`** - Complex state management

You can transform a sluggish app into a smooth, responsive experience - even with hundreds of items!

The key is understanding **when components re-render** and **why**, then using the right tools to prevent unnecessary work.
