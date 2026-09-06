# Color Guesser

A React application demonstrating critical performance anti-patterns and optimization techniques. This lab shows how to properly handle derived state, avoid setting state during render, and use memoization effectively.

## The Problem

Open your browser console and play the game—guess a color, click "New Color", or "Try Again". Notice how the expensive component re-renders every single time? Even worse, you might see React warnings about setting state during render!

The issues:

1. **Setting state during render** - The most critical anti-pattern! This causes infinite loops and warnings
2. **Unnecessary state** - Storing values that can be calculated from existing state
3. **No memoization** - ExpensiveComponent re-renders on every state change
4. **Inline functions** - New function references break React.memo
5. **Expensive re-renders** - Every state change triggers all components

## The Performance Impact

Without optimization:

- Every keystroke → **All components re-render**
- Every guess → **All components re-render + expensive work**
- Click "New Color" → **All components re-render + expensive work**
- React warning in console → **Critical bugs possible**

With proper optimization:

- Every keystroke → **Only GameInput re-renders**
- Every guess → **Only GameStatusDisplay re-renders**
- Click "New Color" → **Only necessary components re-render**
- No warnings → **Stable, predictable behavior**

## Current Implementation (Broken)

In `application.tsx`:

```tsx
function Application() {
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [colorGuess, setColorGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  // ❌ CRITICAL: Setting state during render!
  // This violates React's rules and causes warnings/bugs
  if (hasGuessed && correctAnswer === colorGuess) {
    setIsWinner(true);
  }

  // ❌ Calculating on every render (not memoized)
  const gameStatus: GameStatus = hasGuessed
    ? isWinner
      ? 'correct'
      : 'incorrect'
    : 'waiting';

  // ❌ New functions on every render
  function handleGuess() {
    setHasGuessed(true);
  }

  return (
    <>
      <GameInput onChange={handleInputChange} onSubmit={handleGuess} />
      <ExpensiveComponent /> {/* Re-renders unnecessarily! */}
    </>
  );
}
```

Why this is bad:

- **Setting state during render** violates React's rules
- **Unnecessary state**: `isWinner` can be derived from `correctAnswer === colorGuess`
- **No memoization**: All components re-render on every state change
- **Unstable functions**: Break React.memo optimization

## Lab Exercise

Your task is to fix these issues using proper React patterns:

1. **Remove setState during render** - Calculate derived values instead
2. **Eliminate unnecessary state** - Derive values from existing state
3. **Add useMemo** - Memoize expensive calculations
4. **Add React.memo** - Prevent unnecessary component re-renders
5. **Add useCallback** - Stabilize function references

## Solution 1: Fix setState During Render

<details>
<summary>Click to see solution for the critical anti-pattern</summary>

### Step 1: Understand the Problem

This code is **fundamentally broken**:

```tsx
// ❌ NEVER DO THIS!
if (hasGuessed && correctAnswer === colorGuess) {
  setIsWinner(true); // Setting state during render!
}
```

**Why it's wrong:**

- React's render phase must be **pure** (no side effects)
- `setState` is a side effect and should only happen in:
  - Event handlers
  - useEffect
  - useCallback/useMemo functions
- This causes:
  - React warnings
  - Potential infinite loops
  - Unpredictable behavior

### Step 2: Eliminate Unnecessary State

`isWinner` is **derived state**—it can be calculated from other state:

```tsx
const isWinner = hasGuessed && correctAnswer === colorGuess;
```

Modify `application.tsx`:

```tsx
function Application() {
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [colorGuess, setColorGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);

  // ✅ Derived state - calculated, not stored!
  const isWinner = hasGuessed && correctAnswer === colorGuess;

  // Now gameStatus works correctly
  const gameStatus: GameStatus = hasGuessed ? (isWinner ? 'correct' : 'incorrect') : 'waiting';

  function handleGuess() {
    setHasGuessed(true);
  }

  function handleReset() {
    setCorrectAnswer(generateRandomColor());
    setHasGuessed(false);
    setColorGuess('');
    // No need to reset isWinner - it's derived!
  }

  return (
    <Container className="my-8 space-y-8">
      {/* ... rest of component */}
    </Container>
  );
}
```

### What Changed?

**Before**:

```tsx
const [isWinner, setIsWinner] = useState(false);

if (hasGuessed && correctAnswer === colorGuess) {
  setIsWinner(true); // ❌ setState during render
}
```

**After**:

```tsx
const isWinner = hasGuessed && correctAnswer === colorGuess; // ✅ Derived value
```

### Benefits

- ✅ No React warnings
- ✅ Predictable, pure renders
- ✅ Less state to manage
- ✅ Can't get out of sync
- ✅ Easier to understand

### The Rule: Prefer Derived State

If a value can be calculated from existing state, **don't store it in state**:

```tsx
// ❌ Unnecessary state
const [total, setTotal] = useState(0);
const [items, setItems] = useState([]);
// Need to update total whenever items change!

// ✅ Derived value
const [items, setItems] = useState([]);
const total = items.reduce((sum, item) => sum + item.price, 0);
```

</details>

## Solution 2: Memoize Calculations

<details>
<summary>Click to see useMemo solution</summary>

### Step 1: Identify Expensive Calculations

The `gameStatus` calculation runs on **every render**, even when `hasGuessed` and `isWinner` haven't changed.

For a simple ternary, this isn't expensive. But let's demonstrate the pattern for more complex scenarios:

```tsx
// Example of expensive derived state
const complexCalculation = expensiveOperation(data); // Runs every render!
```

### Step 2: Add useMemo

Modify `application.tsx`:

```tsx
import { useState, useMemo } from 'react';

function Application() {
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [colorGuess, setColorGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);

  const isWinner = hasGuessed && correctAnswer === colorGuess;

  // ✅ Memoized - only recalculates when dependencies change
  const gameStatus: GameStatus = useMemo(() => {
    console.log('Calculating game status...');
    return hasGuessed ? (isWinner ? 'correct' : 'incorrect') : 'waiting';
  }, [hasGuessed, isWinner]);

  // ... rest of component
}
```

### When to Use useMemo

**✅ Use useMemo when:**

- Calculation is expensive (array operations, filtering, sorting)
- Creating objects/arrays used as dependencies in other hooks
- Deriving complex values from state/props

**❌ Don't use useMemo when:**

- Calculation is trivial (simple math, ternaries)
- The overhead of memoization costs more than the calculation
- Premature optimization

### Improvement

With useMemo, the calculation only runs when `hasGuessed` or `isWinner` changes, not on every render.

</details>

## Solution 3: Memoize Components

<details>
<summary>Click to see React.memo solution</summary>

### Step 1: Understand the Problem

The `ExpensiveComponent` re-renders on **every state change** in the parent, even though it doesn't use any props!

```tsx
// ExpensiveComponent doesn't care about game state,
// but it re-renders whenever parent re-renders
<ExpensiveComponent />
```

### Step 2: Wrap Components with React.memo

Modify `components/expensive-component.tsx`:

```tsx
import { memo } from 'react';
import { block } from '$common/gremlins/be-busy';

// ✅ Wrapped with memo - only re-renders when props change
export const ExpensiveComponent = memo(() => {
  block(100);

  console.log('💰 ExpensiveComponent rendered - this is EXPENSIVE!');

  return (
    <div className="animate-pulse rounded-lg border-2 border-orange-500 bg-orange-50 p-4 text-center dark:bg-orange-900/20">
      <p className="font-bold text-orange-700 dark:text-orange-300">
        💰 I'm an expensive component! 💰
      </p>
      <p className="text-sm text-orange-600 dark:text-orange-400">
        (Check the console - I should only render when necessary)
      </p>
    </div>
  );
});

ExpensiveComponent.displayName = 'ExpensiveComponent';
```

Similarly for other components:

```tsx
import { memo } from 'react';

export const ColorSwatch = memo(({ color }: ColorSwatchProps) => {
  console.log('ColorSwatch rendered');

  return (
    <div
      className="h-96 w-full rounded-lg border-4 border-slate-300 shadow-lg"
      style={{ backgroundColor: '#' + color }}
    />
  );
});

ColorSwatch.displayName = 'ColorSwatch';
```

### How React.memo Works

`React.memo` performs a **shallow comparison** of props:

- If props are the same → Skip re-render
- If props changed → Re-render normally

```tsx
// Without memo: Re-renders every time parent re-renders
export const Component = ({ value }) => <div>{value}</div>;

// With memo: Only re-renders when value changes
export const Component = memo(({ value }) => <div>{value}</div>);
```

### Improvement So Far

Now `ExpensiveComponent` won't re-render when you type or guess (since it has no props). However, `ColorSwatch` still re-renders unnecessarily because...

</details>

## Solution 4: Stabilize Function References

<details>
<summary>Click to see useCallback solution</summary>

### Step 1: The Problem with React.memo

Even with `React.memo`, components still re-render because their **function props** change:

```tsx
// ❌ New function created on every render
function handleGuess() {
  setHasGuessed(true);
}

// React.memo sees a NEW function reference → re-renders anyway!
<GameInput onSubmit={handleGuess} />
```

JavaScript compares functions by reference:

```tsx
const func1 = () => console.log('hello');
const func2 = () => console.log('hello');
func1 === func2; // false - different objects!
```

### Step 2: Use useCallback

Modify `application.tsx`:

```tsx
import { useState, useMemo, useCallback } from 'react';

function Application() {
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [colorGuess, setColorGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);

  const isWinner = hasGuessed && correctAnswer === colorGuess;

  const gameStatus: GameStatus = useMemo(() => {
    return hasGuessed ? (isWinner ? 'correct' : 'incorrect') : 'waiting';
  }, [hasGuessed, isWinner]);

  // ✅ Stable function references with useCallback
  const handleGuess = useCallback(() => {
    setHasGuessed(true);
  }, []);

  const handleReset = useCallback(() => {
    setCorrectAnswer(generateRandomColor());
    setHasGuessed(false);
    setColorGuess('');
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColorGuess(e.target.value.toUpperCase());
  }, []);

  const handleTryAgain = useCallback(() => {
    setHasGuessed(false);
  }, []);

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Color Guesser
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Look at the color above and try to guess its hex code! Now with proper optimization.
        </p>
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            ✅ Optimized with derived state, useMemo, React.memo, and useCallback
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-md space-y-6">
        <ColorSwatch color={correctAnswer} />

        <GameInput
          value={colorGuess}
          onChange={handleInputChange}
          onSubmit={handleGuess}
          disabled={hasGuessed}
        />

        <GameStatusDisplay status={gameStatus} />

        <div className="flex gap-2">
          <Button onClick={handleReset} className="flex-1">
            New Color
          </Button>
          {hasGuessed && !isWinner && (
            <Button onClick={handleTryAgain} variant="secondary" className="flex-1">
              Try Again
            </Button>
          )}
        </div>

        <ExpensiveComponent />
      </section>
    </Container>
  );
}

export default Application;
```

### What Changed?

**Before**:

```tsx
function handleGuess() {
  setHasGuessed(true);
}
```

New function created every render.

**After**:

```tsx
const handleGuess = useCallback(() => {
  setHasGuessed(true);
}, []);
```

Same function reference preserved. Empty dependency array `[]` means it never changes.

### Final Result

Now:

- ✅ No setState during render
- ✅ No unnecessary state
- ✅ Components only re-render when their props actually change
- ✅ Function references are stable
- ✅ ExpensiveComponent barely re-renders

Check the console: You'll see far fewer render logs!

</details>

## Complete Optimized Code

<details>
<summary>Click to see the fully optimized application</summary>

```tsx
import { useState, useMemo, useCallback } from 'react';
import { Container } from '$components/container';
import { Button } from '$components/button';
import { ColorSwatch } from './components/color-swatch';
import { GameInput } from './components/game-input';
import { GameStatusDisplay } from './components/game-status';
import { ExpensiveComponent } from './components/expensive-component';
import { generateRandomColor } from './utilities/generate-random-color';
import type { GameStatus } from './types';

function Application() {
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [colorGuess, setColorGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);

  console.log('Application rendered');

  // ✅ Derived state - no separate isWinner state needed
  const isWinner = hasGuessed && correctAnswer === colorGuess;

  // ✅ Memoized calculation
  const gameStatus: GameStatus = useMemo(() => {
    return hasGuessed ? (isWinner ? 'correct' : 'incorrect') : 'waiting';
  }, [hasGuessed, isWinner]);

  // ✅ Stable function references
  const handleGuess = useCallback(() => {
    setHasGuessed(true);
  }, []);

  const handleReset = useCallback(() => {
    setCorrectAnswer(generateRandomColor());
    setHasGuessed(false);
    setColorGuess('');
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColorGuess(e.target.value.toUpperCase());
  }, []);

  const handleTryAgain = useCallback(() => {
    setHasGuessed(false);
  }, []);

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Color Guesser
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Look at the color above and try to guess its hex code! Open the browser console to see
          optimized rendering.
        </p>
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            ✅ Fully optimized with proper React patterns
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-md space-y-6">
        <ColorSwatch color={correctAnswer} />

        <GameInput
          value={colorGuess}
          onChange={handleInputChange}
          onSubmit={handleGuess}
          disabled={hasGuessed}
        />

        <GameStatusDisplay status={gameStatus} />

        <div className="flex gap-2">
          <Button onClick={handleReset} className="flex-1">
            New Color
          </Button>
          {hasGuessed && !isWinner && (
            <Button onClick={handleTryAgain} variant="secondary" className="flex-1">
              Try Again
            </Button>
          )}
        </div>

        <ExpensiveComponent />
      </section>
    </Container>
  );
}

export default Application;
```

</details>

## Performance Comparison

### Before Optimization

| Action           | Components Re-rendered | Console Warnings |
| ---------------- | ---------------------- | ---------------- |
| Type in input    | 6 components           | ⚠️ setState warning |
| Click Guess      | 6 components           | ⚠️ setState warning |
| Click New Color  | 6 components           | ⚠️ setState warning |
| Click Try Again  | 6 components           | ⚠️ setState warning |

### After Optimization

| Action          | Components Re-rendered | Console Warnings |
| --------------- | ---------------------- | ---------------- |
| Type in input   | 2 components           | None             |
| Click Guess     | 3 components           | None             |
| Click New Color | 2 components           | None             |
| Click Try Again | 2 components           | None             |

**Result:** ~60% fewer re-renders and zero warnings!

## Key Principles

### Never Set State During Render

```tsx
// ❌ NEVER DO THIS
if (condition) {
  setState(value); // Anti-pattern!
}

// ✅ DO THIS INSTEAD
const derivedValue = condition ? value : otherValue;
```

### Prefer Derived State

```tsx
// ❌ Storing derived state
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState(''); // Unnecessary!

// ✅ Calculating derived state
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const fullName = `${firstName} ${lastName}`;
```

### Use useMemo for Expensive Calculations

```tsx
// ❌ Expensive calculation every render
const sorted = items.sort((a, b) => a.value - b.value);

// ✅ Memoized calculation
const sorted = useMemo(() => items.sort((a, b) => a.value - b.value), [items]);
```

### Use React.memo for Expensive Components

```tsx
// ❌ Re-renders whenever parent re-renders
export const ExpensiveComponent = () => {
  /* ... */
};

// ✅ Only re-renders when props change
export const ExpensiveComponent = memo(() => {
  /* ... */
});
```

### Use useCallback for Function Props

```tsx
// ❌ New function every render
const handleClick = () => doSomething();

// ✅ Same function reference
const handleClick = useCallback(() => doSomething(), []);
```

## Common Pitfalls

### Pitfall 1: Setting State During Render

```tsx
// ❌ This will cause warnings and bugs
if (props.value > 10) {
  setState(true);
}

// ✅ Use derived state or useEffect
const isLarge = props.value > 10;

// OR if you need side effects
useEffect(() => {
  if (props.value > 10) {
    setState(true);
  }
}, [props.value]);
```

### Pitfall 2: Too Much State

```tsx
// ❌ Storing values that can be calculated
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);
const [isEmpty, setIsEmpty] = useState(true);

// ✅ Derive values from minimal state
const [items, setItems] = useState([]);
const count = items.length;
const isEmpty = items.length === 0;
```

### Pitfall 3: Forgetting Dependencies

```tsx
// ❌ Missing dependency
const handleSubmit = useCallback(() => {
  doSomething(value); // value not in deps!
}, []);

// ✅ Include all dependencies
const handleSubmit = useCallback(() => {
  doSomething(value);
}, [value]);
```

### Pitfall 4: Over-memoizing

```tsx
// ❌ Unnecessary memoization
const sum = useMemo(() => 2 + 2, []); // Too simple!

// ✅ Only memoize expensive operations
const sum = 2 + 2;
```

## Testing the Optimization

### Before Optimization

1. Open browser console
2. Type in the input field
3. See console: All 6 components render + React warning
4. Click any button
5. See console: All 6 components render + React warning

### After Optimization

1. Open browser console
2. Type in the input field
3. See console: Only GameInput renders
4. Click "Guess"
5. See console: Only GameStatusDisplay renders
6. Click "New Color"
7. See console: Only ColorSwatch renders
8. No warnings!

### React DevTools Profiler

1. Open React DevTools → Profiler tab
2. Start recording
3. Type a letter
4. Stop recording

**Before**: 6 components highlighted (all re-rendered)
**After**: 1-2 components highlighted (only what changed)

## When to Use Each Technique

### Derived State

**✅ Use when:**

- Value can be calculated from existing state/props
- Value always stays in sync with dependencies
- No async operations needed

**❌ Don't use when:**

- Value requires async operations
- Value needs to persist across unmounts
- Value has its own lifecycle

### useMemo

**✅ Use when:**

- Expensive calculations (array operations, heavy math)
- Creating stable references for dependencies
- Deriving complex data structures

**❌ Don't use when:**

- Calculation is trivial
- Premature optimization
- Memoization overhead exceeds calculation cost

### React.memo

**✅ Use when:**

- Component re-renders often with same props
- Component has expensive rendering
- Component is in a list

**❌ Don't use when:**

- Props change frequently
- Component is cheap to render
- Root-level components

### useCallback

**✅ Use when:**

- Passing callbacks to memoized components
- Functions are dependencies of other hooks
- Callbacks passed to many children

**❌ Don't use when:**

- Simple event handlers
- Function needs fresh closure every time
- Premature optimization

## Decision Tree

When you have a value that depends on state:

1. **Can it be calculated from existing state?**
   - Yes → Use derived state (no useState)
   - No → Continue

2. **Is the calculation expensive?**
   - Yes → Use useMemo
   - No → Just calculate it

3. **Does a component re-render unnecessarily?**
   - Yes → Add React.memo
   - No → Done

4. **Does React.memo not work (props still changing)?**
   - Yes → Add useCallback to function props
   - No → Done

## Learning Resources

- [React docs: Avoiding setState during render](https://react.dev/learn/you-might-not-need-an-effect)
- [React docs: useMemo](https://react.dev/reference/react/useMemo)
- [React docs: memo](https://react.dev/reference/react/memo)
- [React docs: useCallback](https://react.dev/reference/react/useCallback)
- [Derived State Anti-pattern](https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)
- [React DevTools Profiler](https://react.dev/learn/react-developer-tools)

## Summary

The Color Guesser demonstrates that many performance issues stem from **fundamental React anti-patterns**:

1. **Never set state during render** - Use derived state or useEffect
2. **Minimize state** - Calculate values when possible
3. **Memoize components** - Prevent unnecessary re-renders with React.memo
4. **Stabilize functions** - Use useCallback for callbacks to memoized components
5. **Profile first** - Use React DevTools to identify real bottlenecks

By following these principles, you transform an app with critical bugs and performance issues into a smooth, stable experience!
