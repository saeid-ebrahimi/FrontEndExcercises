# Prime Time

A React application that finds all prime numbers up to a given limit. This lab is unique because you can solve it with **either** `useDeferredValue` **or** `useTransition` - try both and see which you prefer!

## The Problem

Try typing in the number input quickly, especially with larger numbers like 50000. Notice how the input field feels sluggish and your typing lags? That's because every keystroke triggers:

1. Expensive prime number calculation using the Sieve of Eratosthenes algorithm
2. Re-rendering of hundreds or thousands of Badge components
3. DOM updates for the stats cards

All of these happen synchronously, blocking the main thread and making typing feel unresponsive.

## Lab Exercise

Your task is to optimize this application. You can choose **either** approach:

### Approach A: useDeferredValue

Create a deferred version of the limit that lags behind user input.

### Approach B: useTransition

Separate the input display value from the calculation value using transitions.

## Current Implementation (Slow)

```tsx
function Application() {
  const [limit, setLimit] = useState(10000);

  // This expensive computation runs on EVERY keystroke
  const primes = useMemo(() => calculatePrimes(limit), [limit]);

  return (
    <Input
      type="number"
      value={limit}
      onChange={(e) => setLimit(Number(e.target.value))}
    />
  );
}
```

## Solution A: Using useDeferredValue

<details>
<summary>Click to see useDeferredValue solution</summary>

```tsx
import { useState, useMemo, useDeferredValue } from 'react';

function Application() {
  const [limit, setLimit] = useState(10000);

  // Defer the expensive computation
  const deferredLimit = useDeferredValue(limit);
  const isCalculating = limit !== deferredLimit;

  const primes = useMemo(() => calculatePrimes(deferredLimit), [deferredLimit]);
  const largestPrime = primes.length > 0 ? primes[primes.length - 1] : 0;

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Prime Time</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Enter a number to find all prime numbers up to that limit.
        </p>
      </section>

      <section className="space-y-4">
        <Input
          type="number"
          label="Find primes up to:"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          min={2}
          max={100000}
        />
        {isCalculating && (
          <p className="text-sm text-slate-500">
            Calculating primes up to {limit.toLocaleString()}...
          </p>
        )}
      </section>

      <section>
        <Stats count={primes.length} largestPrime={largestPrime} limit={deferredLimit} />
      </section>

      <section>
        <div className={`transition-opacity ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
          <h2 className="mb-4 text-xl font-semibold">Prime Numbers Found</h2>
          <PrimeGrid primes={primes} />
        </div>
      </section>
    </Container>
  );
}
```

**Pros:**
- ✅ Simpler - just one line to add `useDeferredValue`
- ✅ Automatic - React handles the deferral
- ✅ Less state to manage

**Cons:**
- ❌ No explicit control over when deferral happens
- ❌ Have to compare values to know if updating

</details>

## Solution B: Using useTransition

<details>
<summary>Click to see useTransition solution</summary>

```tsx
import { useState, useMemo, useTransition } from 'react';

function Application() {
  // Separate input value from calculation value
  const [inputValue, setInputValue] = useState(10000);
  const [calculationLimit, setCalculationLimit] = useState(10000);
  const [isPending, startTransition] = useTransition();

  const primes = useMemo(() => calculatePrimes(calculationLimit), [calculationLimit]);
  const largestPrime = primes.length > 0 ? primes[primes.length - 1] : 0;

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);

    // Update input immediately
    setInputValue(newValue);

    // Defer the expensive calculation
    startTransition(() => {
      setCalculationLimit(newValue);
    });
  };

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Prime Time</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Enter a number to find all prime numbers up to that limit.
        </p>
      </section>

      <section className="space-y-4">
        <Input
          type="number"
          label="Find primes up to:"
          value={inputValue}
          onChange={handleLimitChange}
          min={2}
          max={100000}
        />
        {isPending && (
          <p className="text-sm text-slate-500">
            Calculating primes up to {inputValue.toLocaleString()}...
          </p>
        )}
      </section>

      <section>
        <Stats count={primes.length} largestPrime={largestPrime} limit={calculationLimit} />
      </section>

      <section>
        <div className={`transition-opacity ${isPending ? 'opacity-50' : 'opacity-100'}`}>
          <h2 className="mb-4 text-xl font-semibold">Prime Numbers Found</h2>
          <PrimeGrid primes={primes} />
        </div>
      </section>
    </Container>
  );
}
```

**Pros:**
- ✅ Explicit `isPending` state (no value comparison needed)
- ✅ More control over what gets deferred
- ✅ Clearer intent in the code

**Cons:**
- ❌ Requires managing two pieces of state
- ❌ More boilerplate code
- ❌ Need to wrap state update in `startTransition`

</details>

## Your Task

1. **Try BOTH approaches** - Implement each one and see how they feel
2. **Compare the differences** - Which one feels better? Which is easier to understand?
3. **Add loading indicators** - Show when calculations are in progress
4. **Add visual feedback** - Dim the prime grid during calculations
5. **Test with different numbers** - Try 1000, 10000, 50000, 100000

### Success Criteria

After optimization:
- ✅ Typing in the input should be smooth and responsive
- ✅ Prime calculation should not block user input
- ✅ Loading indicators should appear during calculations
- ✅ The input value should update immediately
- ✅ The prime grid should update shortly after

## Bonus: Side-by-Side Comparison

<details>
<summary>Click to see a version with BOTH approaches using Tabs</summary>

```tsx
import { useState, useMemo, useDeferredValue, useTransition } from 'react';
import { Container } from '$components/container';
import { Input } from '$components/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '$components/tabs';
import { PrimeGrid } from './components/prime-grid';
import { Stats } from './components/stats';
import { calculatePrimes } from './utilities/calculate-primes';

function DeferredVersion() {
  const [limit, setLimit] = useState(10000);
  const deferredLimit = useDeferredValue(limit);
  const isCalculating = limit !== deferredLimit;

  const primes = useMemo(() => calculatePrimes(deferredLimit), [deferredLimit]);
  const largestPrime = primes.length > 0 ? primes[primes.length - 1] : 0;

  return (
    <div className="space-y-6">
      <Input
        type="number"
        label="Find primes up to:"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        min={2}
        max={100000}
      />
      {isCalculating && <p className="text-sm text-slate-500">Calculating...</p>}
      <Stats count={primes.length} largestPrime={largestPrime} limit={deferredLimit} />
      <div className={`transition-opacity ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
        <PrimeGrid primes={primes} />
      </div>
    </div>
  );
}

function TransitionVersion() {
  const [inputValue, setInputValue] = useState(10000);
  const [calculationLimit, setCalculationLimit] = useState(10000);
  const [isPending, startTransition] = useTransition();

  const primes = useMemo(() => calculatePrimes(calculationLimit), [calculationLimit]);
  const largestPrime = primes.length > 0 ? primes[primes.length - 1] : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInputValue(newValue);
    startTransition(() => setCalculationLimit(newValue));
  };

  return (
    <div className="space-y-6">
      <Input
        type="number"
        label="Find primes up to:"
        value={inputValue}
        onChange={handleChange}
        min={2}
        max={100000}
      />
      {isPending && <p className="text-sm text-slate-500">Calculating...</p>}
      <Stats count={primes.length} largestPrime={largestPrime} limit={calculationLimit} />
      <div className={`transition-opacity ${isPending ? 'opacity-50' : 'opacity-100'}`}>
        <PrimeGrid primes={primes} />
      </div>
    </div>
  );
}

function Application() {
  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold">Prime Time - Comparison</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Compare both optimization approaches side by side!
        </p>
      </section>

      <Tabs defaultValue="deferred">
        <TabsList>
          <TabsTrigger value="deferred">useDeferredValue</TabsTrigger>
          <TabsTrigger value="transition">useTransition</TabsTrigger>
        </TabsList>

        <TabsContent value="deferred">
          <DeferredVersion />
        </TabsContent>

        <TabsContent value="transition">
          <TransitionVersion />
        </TabsContent>
      </Tabs>
    </Container>
  );
}

export default Application;
```

</details>

## Key Differences

| Aspect | useDeferredValue | useTransition |
|--------|------------------|---------------|
| **What you defer** | A value | A state update |
| **State management** | Single piece of state | Two pieces of state |
| **Pending indicator** | Compare values | Built-in `isPending` |
| **Use case** | Best for derived/computed values | Best for your own state |
| **Code simplicity** | Simpler | More explicit |

## When to Use Each

### Use useDeferredValue when:
- ✅ You have a value that triggers expensive renders
- ✅ You want the simplest solution
- ✅ You're working with props or context (values you don't control)
- ✅ You're okay comparing values to detect updates

### Use useTransition when:
- ✅ You need explicit control over what's deferred
- ✅ You want a built-in `isPending` state
- ✅ You're updating your own state
- ✅ You need to defer multiple related updates together

## Learning Resources

- [React docs: useDeferredValue](https://react.dev/reference/react/useDeferredValue)
- [React docs: useTransition](https://react.dev/reference/react/useTransition)
- See `../throwing-shapes` for another `useDeferredValue` example
