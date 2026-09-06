# Pokemoka

A React application demonstrating fuzzy search across a large dataset of Pokemon. It's slow so that we can make it fast.

## Optimizing with React's useTransition Hook

This guide demonstrates how to optimize the Pokemon search application using React 18's `useTransition` hook for better performance and user experience.

### Understanding the Problem

The current Pokemon application implementation has a performance bottleneck:

```tsx
const Application = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  return <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />;
};
```

So, what's the problem?

1. **Synchronous filtering**: Every keystroke triggers immediate filtering of the entire Pokedex dataset
2. **Blocking main thread**: The `filterPokemon` function searches through hundreds of Pokemon, checking multiple string fields (name in 4 languages, description, species, types, abilities)
3. **Coupled updates**: The input value update and the expensive filtering happen together, making the input feel sluggish
4. **Re-render cascade**: After filtering, React must re-render potentially hundreds of Pokemon cards

When a user types quickly, these expensive operations queue up, making the UI feel unresponsive.

### What is useTransition?

`useTransition` is a React 18 hook that enables **concurrent rendering** by marking state updates as **non-urgent transitions**. This allows React to:

- Keep high-priority updates (like typing) responsive
- Interrupt low-priority work (like filtering) if new input arrives
- Batch and optimize expensive rendering operations
- Provide loading states for pending transitions

**Key concept**: Not all state updates are equally urgent. User input should be instantaneous, while search results can afford a slight delay.

### Step-by-Step Implementation

#### Step 1: Import useTransition

First, import `useTransition` alongside your other React hooks:

```tsx
import { useState, useMemo, useTransition } from 'react';
```

#### Step 2: Add useTransition to your component

Initialize the hook in your component. It returns an array with two values:

```tsx
const Application = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  // ... rest of component
};
```

- `isPending`: Boolean indicating if a transition is in progress
- `startTransition`: Function to wrap non-urgent state updates

#### Step 3: Separate urgent from non-urgent state

The key insight is that we need **two** pieces of state:

1. The **input value** (urgent - must be instant)
2. The **filter query** (non-urgent - can be deferred)

```tsx
const Application = () => {
  // Urgent: Controls the input field directly
  const [inputValue, setInputValue] = useState('');

  // Non-urgent: Controls the filtering operation
  const [searchQuery, setSearchQuery] = useState('');

  const [isPending, startTransition] = useTransition();

  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  // ... rest of component
};
```

#### Step 4: Wrap the non-urgent update in startTransition

Update your input handler to immediately update the input value, but defer the search query update:

```tsx
const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  // Urgent: Update input immediately for instant feedback
  setInputValue(value);

  // Non-urgent: Defer the expensive filtering operation
  startTransition(() => {
    setSearchQuery(value);
  });
};
```

#### Step 5: Update your Input component

Make sure the Input uses the `inputValue` state, not the `searchQuery`:

```tsx
return (
  <Container className="space-y-8">
    <section id="filters">
      <Input
        label="Search Pokemon"
        placeholder="Search by name, type, ability, species, or description..."
        value={inputValue} // Use inputValue, not searchQuery
        onChange={handleSearchChange}
      />
    </section>
    {/* ... rest of component */}
  </Container>
);
```

#### Step 6: Add loading indicators

Use the `isPending` state to show users when filtering is happening:

```tsx
return (
  <Container className="space-y-8">
    <section id="filters">
      <Input
        label="Search Pokemon"
        placeholder="Search by name, type, ability, species, or description..."
        value={inputValue}
        onChange={handleSearchChange}
      />
      {isPending && <div className="text-sm text-slate-500">Searching…</div>}
    </section>
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredPokemon.map((pokemon) => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ))}
    </section>
  </Container>
);
```

#### Step 7: Optional - Add visual feedback to results

You can also dim or add opacity to the results during transitions:

```tsx
<section
  className={`grid grid-cols-1 gap-8 transition-opacity md:grid-cols-2 lg:grid-cols-3 ${
    isPending ? 'opacity-50' : 'opacity-100'
  }`}
>
  {filteredPokemon.map((pokemon) => (
    <Pokemon key={pokemon.id} {...pokemon} />
  ))}
</section>
```

### Complete Before and After Comparison

**Before (Synchronous):**

```tsx
const Application = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  return (
    <Container className="space-y-8">
      <section id="filters">
        <Input
          label="Search Pokemon"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPokemon.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </Container>
  );
};
```

**After (With useTransition):**

```tsx
const Application = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    startTransition(() => {
      setSearchQuery(value);
    });
  };

  return (
    <Container className="space-y-8">
      <section id="filters">
        <Input label="Search Pokemon" value={inputValue} onChange={handleSearchChange} />
        {isPending && <div className="mt-2 text-sm text-slate-500">Searching...</div>}
      </section>
      <section
        className={`grid grid-cols-1 gap-8 transition-opacity md:grid-cols-2 lg:grid-cols-3 ${
          isPending ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {filteredPokemon.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </Container>
  );
};
```

### Alternative: Using useDeferredValue

React 18 also provides `useDeferredValue` as a simpler alternative when you don't need explicit control over the transition:

```tsx
import { useState, useMemo, useDeferredValue } from 'react';

const Application = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Defer the search query - React will prioritize input updates
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const filteredPokemon = useMemo(() => filterPokemon(deferredSearchQuery), [deferredSearchQuery]);

  return (
    <Container className="space-y-8">
      <section id="filters">
        <Input
          label="Search Pokemon"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPokemon.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </Container>
  );
};
```

**When to use which:**

- **useTransition**: When you need `isPending` state for loading indicators, or want explicit control over transitions
- **useDeferredValue**: Simpler API, good for "fire and forget" deferral without loading states

### Advanced: Combining with Debouncing

For even better performance, you can combine `useTransition` with debouncing:

```tsx
import { useState, useMemo, useTransition, useCallback } from 'react';

const Application = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  // Debounce helper
  const debounceRef = useRef<NodeJS.Timeout>();

  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Instant input update
    setInputValue(value);

    // Clear previous timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Debounce the expensive filtering
    debounceRef.current = setTimeout(() => {
      startTransition(() => {
        setSearchQuery(value);
      });
    }, 300); // Wait 300ms after user stops typing
  }, []);

  // ... rest of component
};
```

This approach:

1. Updates input instantly (no delay in typing)
2. Waits 300ms after the user stops typing
3. Then triggers the expensive filter as a transition

### Testing the Improvement

To verify your optimization works:

**React DevTools Profiler**

- Open React DevTools
- Go to the Profiler tab
- Record a typing session
- Compare render times before/after

**User Experience**

- Type rapidly in the search box
- The input should feel instant and responsive
- Results may lag slightly behind, but typing never stutters
- Loading indicators appear during filtering

**Performance Metrics**

- Before: Input feels sluggish, especially when typing fast
- After: Input is always responsive, filtering happens in the background

### Key Takeaways

1. **Separate urgent from non-urgent updates**: User input is urgent, filtering is not
2. **useTransition enables concurrent rendering**: React can interrupt low-priority work
3. **Always provide feedback**: Use `isPending` to show loading states
4. **Consider useDeferredValue**: Simpler alternative for basic cases
5. **Combine techniques**: Debouncing + transitions = optimal performance

This pattern applies to any expensive operation triggered by user input: searching, filtering, sorting, complex calculations, or heavy rendering.

## Credits

The [Pokémon data](https://github.com/Purukitto/pokemon-data.json) from this application was compiled by [Pulkit Sambhavi Singh](https://buymeacoffee.com/purukitto).
