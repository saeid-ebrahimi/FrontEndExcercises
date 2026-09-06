# Memo Mania

A React application demonstrating the power of memoization through `useMemo`, `React.memo`, and `useCallback`. This lab shows how memoization can dramatically reduce unnecessary calculations and re-renders.

## The Problem

Try changing a number in any calculation card and watch the console. Notice how **ALL** cards recalculate their results, even though only one input changed? That's because:

1. **Every state update causes all components to re-render**
2. **Every re-render runs all expensive calculations again**
3. **All function references are recreated on every render**
4. **Child components re-render even when their props haven't changed**

Open your browser console and change a single number. You'll see every calculation runs again, even the ones you didn't touch. This gets exponentially worse as you add more calculations.

## The Performance Impact

Without memoization:

- Changing 1 calculation → **All N calculations run**
- Adding a new calculation → **All N+1 calculations run**
- Deleting a calculation → **All remaining calculations run**
- 5 Fibonacci cards → **~500ms per state change** (on a fast machine!)

With proper memoization:

- Changing 1 calculation → **Only 1 calculation runs**
- Adding a calculation → **Only 1 new calculation runs**
- Deleting a calculation → **0 calculations run**
- 5 Fibonacci cards → **~2ms per state change** (250x faster!)

## Lab Exercise

Your task is to optimize this application using three memoization techniques in order:

1. **useMemo** - Cache expensive calculation results
2. **React.memo** - Prevent re-renders of unchanged components
3. **useCallback** - Stabilize function references

## Current Implementation (Slow)

In `components/calculation-card.tsx`:

```tsx
export function CalculationCard({ calculation, onUpdate, onDelete }: CalculationCardProps) {
  // This runs on EVERY render of EVERY card!
  const result = calculate(calculation.type, calculation.input);

  return (
    <Card>
      <Input
        value={calculation.input}
        onChange={(e) => onUpdate(calculation.id, Number(e.target.value))}
      />
      <div>Result: {result}</div>
    </Card>
  );
}
```

When ANY calculation changes, ALL CalculationCards re-render, and ALL calculations run again.

## Solution 1: useMemo

<details>
<summary>Click to see useMemo solution</summary>

### Step 1: Understand the Problem

The `calculate()` function runs expensive operations (Fibonacci, factorial, etc.). Right now, it runs on every render of every card, even if that card's props haven't changed.

### Step 2: Add useMemo to Cache Results

Modify `components/calculation-card.tsx`:

```tsx
import { useMemo } from 'react';

export function CalculationCard({ calculation, onUpdate, onDelete }: CalculationCardProps) {
  // Only recalculate when calculation.type or calculation.input changes
  const result = useMemo(
    () => calculate(calculation.type, calculation.input),
    [calculation.type, calculation.input],
  );

  const label = getCalculationLabel(calculation.type);
  const description = getCalculationDescription(calculation.type);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{label}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
          <Button size="small" variant="danger" onClick={() => onDelete(calculation.id)}>
            Delete
          </Button>
        </div>

        <div className="space-y-2">
          <Input
            type="number"
            label="Input number"
            value={calculation.input}
            onChange={(e) => onUpdate(calculation.id, Number(e.target.value))}
            min={1}
            max={calculation.type === 'fibonacci' ? 40 : 1000}
          />

          <div className="rounded-md bg-slate-100 p-4 dark:bg-slate-800">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Result:</div>
            <div className="mt-1 font-mono text-lg font-bold text-slate-900 dark:text-slate-100">
              {result}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
```

### What Changed?

**Before**:

```tsx
const result = calculate(calculation.type, calculation.input);
```

Runs every render, regardless of whether inputs changed.

**After**:

```tsx
const result = useMemo(
  () => calculate(calculation.type, calculation.input),
  [calculation.type, calculation.input],
);
```

Only runs when `calculation.type` or `calculation.input` changes.

### Improvement So Far

With `useMemo`:

- **Better**: Calculations only run when their inputs change
- **Still wasteful**: All cards still re-render even when unchanged
- **Why?** Parent state changes cause all children to re-render by default

Test it: Change a number. In the console, you'll see calculations still run for cards you didn't change. That's because those cards are re-rendering and rebuilding their memoized values.

</details>

## Solution 2: React.memo

<details>
<summary>Click to see React.memo solution</summary>

### Step 1: Understand the Problem

Even with `useMemo`, all CalculationCard components re-render when the parent updates. React re-renders all children by default when a parent's state changes, even if the child's props are identical.

### Step 2: Wrap Component with React.memo

Modify `components/calculation-card.tsx`:

```tsx
import { useMemo, memo } from 'react';
import { Button } from '$components/button';
import { Input } from '$components/input';
import { Card } from '$components/card';
import type { Calculation } from '../types';
import {
  calculate,
  getCalculationLabel,
  getCalculationDescription,
} from '../utilities/expensive-calculations';

interface CalculationCardProps {
  calculation: Calculation;
  onUpdate: (id: string, input: number) => void;
  onDelete: (id: string) => void;
}

// Wrap the component with memo
export const CalculationCard = memo(function CalculationCard({
  calculation,
  onUpdate,
  onDelete,
}: CalculationCardProps) {
  const result = useMemo(
    () => calculate(calculation.type, calculation.input),
    [calculation.type, calculation.input],
  );

  const label = getCalculationLabel(calculation.type);
  const description = getCalculationDescription(calculation.type);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{label}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
          <Button size="small" variant="danger" onClick={() => onDelete(calculation.id)}>
            Delete
          </Button>
        </div>

        <div className="space-y-2">
          <Input
            type="number"
            label="Input number"
            value={calculation.input}
            onChange={(e) => onUpdate(calculation.id, Number(e.target.value))}
            min={1}
            max={calculation.type === 'fibonacci' ? 40 : 1000}
          />

          <div className="rounded-md bg-slate-100 p-4 dark:bg-slate-800">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Result:</div>
            <div className="mt-1 font-mono text-lg font-bold text-slate-900 dark:text-slate-100">
              {result}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
});
```

### What Changed?

**Before**:

```tsx
export function CalculationCard({ calculation, onUpdate, onDelete }) {
  // Component body
}
```

**After**:

```tsx
export const CalculationCard = memo(function CalculationCard({ calculation, onUpdate, onDelete }) {
  // Component body
});
```

### How React.memo Works

`React.memo` performs a **shallow comparison** of props:

- If props haven't changed → **Skip re-render** (huge win!)
- If props changed → Re-render normally

For our `CalculationCard`:

- `calculation` object - compared by reference
- `onUpdate` function - compared by reference
- `onDelete` function - compared by reference

### Improvement So Far

**Still a problem**: Function props (`onUpdate`, `onDelete`) are recreated on every parent render, causing `React.memo` to think props changed!

```tsx
// In Application component - these are NEW functions every render!
function updateCalculation(id: string, input: number) {
  setCalculations(calculations.map((calc) => (calc.id === id ? { ...calc, input } : calc)));
}

function deleteCalculation(id: string) {
  setCalculations(calculations.filter((calc) => calc.id !== id));
}
```

Test it: You'll see it's better, but still not perfect. The functions changing on every render break memoization.

</details>

## Solution 3: useCallback

<details>
<summary>Click to see useCallback solution</summary>

### Step 1: Understand the Problem

In JavaScript, functions are compared by reference:

```tsx
const func1 = () => console.log('hello');
const func2 = () => console.log('hello');

func1 === func2; // false! Different references
```

Every time `Application` re-renders, `updateCalculation` and `deleteCalculation` are **recreated as new functions**. Even though they do the same thing, they're different references, so `React.memo` sees them as "changed props."

### Step 2: Stabilize Functions with useCallback

Modify `application.tsx`:

```tsx
import { useState, useCallback } from 'react';
import { Container } from '$components/container';
import { Button } from '$components/button';
import { CalculationList } from './components/calculation-list';
import type { Calculation, CalculationType } from './types';

const CALCULATION_TYPES: CalculationType[] = [
  'fibonacci',
  'factorial',
  'primeFactors',
  'sumOfDivisors',
];

function Application() {
  const [calculations, setCalculations] = useState<Calculation[]>([
    { id: '1', type: 'fibonacci', input: 30 },
    { id: '2', type: 'factorial', input: 15 },
  ]);

  const addCalculation = useCallback(() => {
    const randomType = CALCULATION_TYPES[Math.floor(Math.random() * CALCULATION_TYPES.length)];
    const defaultInput = randomType === 'fibonacci' ? 25 : 10;

    const newCalculation: Calculation = {
      id: Date.now().toString(),
      type: randomType,
      input: defaultInput,
    };

    setCalculations((prev) => [...prev, newCalculation]);
  }, []); // No dependencies - function never changes

  const updateCalculation = useCallback((id: string, input: number) => {
    setCalculations((prev) => prev.map((calc) => (calc.id === id ? { ...calc, input } : calc)));
  }, []); // No dependencies - uses functional update

  const deleteCalculation = useCallback((id: string) => {
    setCalculations((prev) => prev.filter((calc) => calc.id !== id));
  }, []); // No dependencies - uses functional update

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Memo Mania</h1>
        <p className="text-slate-600 dark:text-slate-400">
          All optimizations applied! Change a number and check the console - only the changed
          calculation runs. Try adding/deleting cards too.
        </p>
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            ✅ Using useMemo, React.memo, and useCallback for maximum performance
          </p>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {calculations.length} {calculations.length === 1 ? 'calculation' : 'calculations'}
          </p>
        </div>
        <Button onClick={addCalculation}>Add Random Calculation</Button>
      </section>

      <section>
        <CalculationList
          calculations={calculations}
          onUpdate={updateCalculation}
          onDelete={deleteCalculation}
        />
      </section>
    </Container>
  );
}

export default Application;
```

### What Changed?

**Before**:

```tsx
function updateCalculation(id: string, input: number) {
  setCalculations(calculations.map((calc) => (calc.id === id ? { ...calc, input } : calc)));
}
```

New function created every render. Depends on `calculations`.

**After**:

```tsx
const updateCalculation = useCallback((id: string, input: number) => {
  setCalculations((prev) => prev.map((calc) => (calc.id === id ? { ...calc, input } : calc)));
}, []);
```

Same function reference preserved. No dependencies needed thanks to functional update pattern.

### Key Pattern: Functional Updates

Instead of:

```tsx
setCalculations(calculations.map(...)) // Depends on calculations variable
```

Use:

```tsx
setCalculations((prev) => prev.map(...)) // No external dependencies!
```

This allows empty dependency array `[]`, ensuring the function **never changes**.

### Final Performance

Now when you change a calculation:

- ✅ Only that calculation re-renders
- ✅ Only that calculation runs expensive computation
- ✅ All other cards are completely skipped
- ✅ **~250x faster** than the unoptimized version

Check the console - you'll only see one calculation log instead of all of them!

</details>

## Complete Optimized Code

<details>
<summary>Click to see all optimized files</summary>

In `components/calculation-card.tsx`:

```tsx
import { useMemo, memo } from 'react';
import { Button } from '$components/button';
import { Input } from '$components/input';
import { Card } from '$components/card';
import type { Calculation } from '../types';
import {
  calculate,
  getCalculationLabel,
  getCalculationDescription,
} from '../utilities/expensive-calculations';

interface CalculationCardProps {
  calculation: Calculation;
  onUpdate: (id: string, input: number) => void;
  onDelete: (id: string) => void;
}

export const CalculationCard = memo(function CalculationCard({
  calculation,
  onUpdate,
  onDelete,
}: CalculationCardProps) {
  const result = useMemo(
    () => calculate(calculation.type, calculation.input),
    [calculation.type, calculation.input],
  );

  const label = getCalculationLabel(calculation.type);
  const description = getCalculationDescription(calculation.type);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{label}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
          <Button size="small" variant="danger" onClick={() => onDelete(calculation.id)}>
            Delete
          </Button>
        </div>

        <div className="space-y-2">
          <Input
            type="number"
            label="Input number"
            value={calculation.input}
            onChange={(e) => onUpdate(calculation.id, Number(e.target.value))}
            min={1}
            max={calculation.type === 'fibonacci' ? 40 : 1000}
          />

          <div className="rounded-md bg-slate-100 p-4 dark:bg-slate-800">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Result:</div>
            <div className="mt-1 font-mono text-lg font-bold text-slate-900 dark:text-slate-100">
              {result}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
});
```

In `application.tsx`:

```tsx
import { useState, useCallback } from 'react';
import { Container } from '$components/container';
import { Button } from '$components/button';
import { CalculationList } from './components/calculation-list';
import type { Calculation, CalculationType } from './types';

const CALCULATION_TYPES: CalculationType[] = [
  'fibonacci',
  'factorial',
  'primeFactors',
  'sumOfDivisors',
];

function Application() {
  const [calculations, setCalculations] = useState<Calculation[]>([
    { id: '1', type: 'fibonacci', input: 30 },
    { id: '2', type: 'factorial', input: 15 },
  ]);

  const addCalculation = useCallback(() => {
    const randomType = CALCULATION_TYPES[Math.floor(Math.random() * CALCULATION_TYPES.length)];
    const defaultInput = randomType === 'fibonacci' ? 25 : 10;

    const newCalculation: Calculation = {
      id: Date.now().toString(),
      type: randomType,
      input: defaultInput,
    };

    setCalculations((prev) => [...prev, newCalculation]);
  }, []);

  const updateCalculation = useCallback((id: string, input: number) => {
    setCalculations((prev) => prev.map((calc) => (calc.id === id ? { ...calc, input } : calc)));
  }, []);

  const deleteCalculation = useCallback((id: string) => {
    setCalculations((prev) => prev.filter((calc) => calc.id !== id));
  }, []);

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Memo Mania</h1>
        <p className="text-slate-600 dark:text-slate-400">
          All optimizations applied! Change a number and check the console - only the changed
          calculation runs.
        </p>
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            ✅ Using useMemo, React.memo, and useCallback for maximum performance
          </p>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {calculations.length} {calculations.length === 1 ? 'calculation' : 'calculations'}
          </p>
        </div>
        <Button onClick={addCalculation}>Add Random Calculation</Button>
      </section>

      <section>
        <CalculationList
          calculations={calculations}
          onUpdate={updateCalculation}
          onDelete={deleteCalculation}
        />
      </section>
    </Container>
  );
}

export default Application;
```

</details>

## Testing the Optimization

### Before Optimization

1. Open browser console
2. Change any number
3. See **all calculations** run (multiple console logs)
4. Notice UI lag with 3+ Fibonacci cards

### After Optimization

1. Open browser console
2. Change any number
3. See **only 1 calculation** run (one console log)
4. Notice instant UI updates even with many cards

### React DevTools Profiler

1. Open React DevTools → Profiler tab
2. Start recording
3. Change a number
4. Stop recording

**Without optimization**: 10+ components re-rendered
**With optimization**: 2-3 components re-rendered (only the changed card + parent)

## The Three Pillars of Memoization

| Technique       | What it does                                     | When to use                                        |
| --------------- | ------------------------------------------------ | -------------------------------------------------- |
| **useMemo**     | Caches expensive calculation results             | When computing derived values from props/state     |
| **React.memo**  | Prevents component re-renders if props unchanged | For expensive components that receive stable props |
| **useCallback** | Stabilizes function references across renders    | When passing callbacks to memoized components      |

## Key Principles

### useMemo - Memoize Values

```tsx
// Without useMemo - calculates every render
const result = expensiveCalculation(input);

// With useMemo - only when input changes
const result = useMemo(() => expensiveCalculation(input), [input]);
```

**When to use**:

- Expensive calculations (array sorting, filtering, mathematical operations)
- Derived state from props or state
- Creating objects/arrays that are used as dependencies

**When NOT to use**:

- Simple calculations (addition, string concatenation, etc.)
- Values that change every render anyway
- When the memoization overhead costs more than the calculation

### React.memo - Memoize Components

```tsx
// Without memo - re-renders when parent re-renders
export function Component(props) {
  return <div>{props.value}</div>;
}

// With memo - only re-renders when props change
export const Component = memo(function Component(props) {
  return <div>{props.value}</div>;
});
```

**When to use**:

- Expensive components (large lists, complex UIs, heavy calculations)
- Components that receive stable props
- Leaf components in a large component tree

**When NOT to use**:

- Cheap components (simple divs, text, etc.)
- Components that change frequently anyway
- Root level components

### useCallback - Memoize Functions

```tsx
// Without useCallback - new function every render
function handleClick() {
  doSomething();
}

// With useCallback - same function reference
const handleClick = useCallback(() => {
  doSomething();
}, [dependencies]);
```

**When to use**:

- Passing callbacks to memoized child components
- Functions used as dependencies in other hooks
- Event handlers passed to many children

**When NOT to use**:

- Functions only used in JSX event handlers
- When the function needs to change every render
- Premature optimization

## Common Patterns

### Pattern 1: Functional Updates for Stable Callbacks

```tsx
// ❌ Bad - function depends on state
const addItem = useCallback(() => {
  setItems([...items, newItem]);
}, [items]); // Changes every time items changes!

// ✅ Good - use functional update
const addItem = useCallback(() => {
  setItems((prev) => [...prev, newItem]);
}, []); // Never changes!
```

### Pattern 2: Combining All Three

```tsx
export const ListItem = memo(function ListItem({ item, onUpdate }) {
  // useMemo for expensive derived value
  const formattedValue = useMemo(() => expensiveFormat(item.value), [item.value]);

  // useCallback for stable event handler
  const handleChange = useCallback(() => {
    onUpdate(item.id, newValue);
  }, [item.id, onUpdate]);

  return <div onClick={handleChange}>{formattedValue}</div>;
});
```

### Pattern 3: Custom Comparison for React.memo

```tsx
// Custom comparison function for complex props
export const Component = memo(
  function Component({ data, config }) {
    // Component body
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return (
      prevProps.data.id === nextProps.data.id && prevProps.config.mode === nextProps.config.mode
    );
  },
);
```

## Common Pitfalls

### Pitfall 1: Forgetting useCallback with React.memo

```tsx
// ❌ This breaks memoization!
export const List = memo(function List({ onUpdate }) {
  /* ... */
});

function Parent() {
  const handleUpdate = () => {
    /* ... */
  }; // New function every render!
  return <List onUpdate={handleUpdate} />;
}

// ✅ Fix with useCallback
function Parent() {
  const handleUpdate = useCallback(() => {
    /* ... */
  }, []);
  return <List onUpdate={handleUpdate} />;
}
```

### Pitfall 2: Memoizing with Unstable Dependencies

```tsx
// ❌ Object literal recreated every render
const result = useMemo(
  () => calculate(data),
  [{ foo: 'bar' }], // New object every time!
);

// ✅ Use stable dependencies
const config = useMemo(() => ({ foo: 'bar' }), []);
const result = useMemo(() => calculate(data), [config]);
```

### Pitfall 3: Over-memoizing

```tsx
// ❌ Unnecessary - this is cheap
const sum = useMemo(() => a + b, [a, b]);

// ✅ Just calculate it
const sum = a + b;
```

Memoization has a cost! Only use it when the benefit outweighs the overhead.

## Performance Checklist

Before optimizing:

- ✅ Profile with React DevTools to identify actual bottlenecks
- ✅ Measure the performance impact (is it actually slow?)
- ✅ Consider if the problem is elsewhere (network, data structure, algorithm)

When optimizing:

- ✅ Start with useMemo for expensive calculations
- ✅ Add React.memo to components that are re-rendering unnecessarily
- ✅ Use useCallback for callbacks passed to memoized components
- ✅ Verify improvement with profiler

## Learning Resources

- [React docs: useMemo](https://react.dev/reference/react/useMemo)
- [React docs: memo](https://react.dev/reference/react/memo)
- [React docs: useCallback](https://react.dev/reference/react/useCallback)
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- [React DevTools Profiler](https://react.dev/learn/react-developer-tools#profiler)
