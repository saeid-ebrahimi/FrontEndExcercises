# Custom Hooks with Internal State and Re-renders

Custom hooks are a great way to reuse logic in React. However, when a custom hook contains **internal state**, that state belongs to the component that calls the hook.

When the hook's state changes, the component using the hook re-renders.

Therefore:

> **Use stateful custom hooks in the nearest appropriate component, especially when the component is lightweight. Avoid putting them directly inside heavy components unless the heavy component actually needs the state.**

## Example

Consider a custom hook that manages a timer:

```tsx
function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return seconds;
}
```

Now suppose we use it inside a large component:

```tsx
function HeavyComponent() {
  const seconds = useTimer();

  return (
    <>
      <Timer seconds={seconds} />
      <ExpensiveTable />
      <ExpensiveChart />
      <ExpensiveMap />
    </>
  );
}
```

Every time the timer updates:

```text
useTimer state changes
        ↓
HeavyComponent re-renders
        ↓
Timer
ExpensiveTable
ExpensiveChart
ExpensiveMap
participate in the render
```

The problem is not that the custom hook itself is inherently expensive.

The important point is:

> **The state inside `useTimer` causes the component that calls `useTimer` to re-render.**

---

## Move the Stateful Hook Closer to Where It Is Needed

If only the timer needs the state, move the hook into a smaller component:

```tsx
function HeavyComponent() {
  return (
    <>
      <Timer />
      <ExpensiveTable />
      <ExpensiveChart />
      <ExpensiveMap />
    </>
  );
}

function Timer() {
  const seconds = useTimer();

  return <div>{seconds}</div>;
}
```

Now the rendering flow becomes:

```text
useTimer state changes
        ↓
Timer re-renders
```

The parent does not need to re-render because of the timer state.

This isolates the frequently changing state from the heavy parts of the component tree.

---

## A More Realistic Example

Imagine a page containing a search form and an expensive product list:

```text
ProductPage
├── SearchForm
├── ProductList
├── ProductTable
└── ProductMap
```

Suppose `useSearchInput` contains internal state:

```tsx
function useSearchInput() {
  const [value, setValue] = useState("");

  return {
    value,
    setValue,
  };
}
```

### Less Ideal

```tsx
function ProductPage() {
  const search = useSearchInput();

  return (
    <>
      <SearchForm
        value={search.value}
        onChange={search.setValue}
      />

      <ProductList />
      <ProductTable />
      <ProductMap />
    </>
  );
}
```

Every time the user types:

```text
search.value changes
        ↓
ProductPage re-renders
        ↓
SearchForm
ProductList
ProductTable
ProductMap
```

If `ProductPage` contains expensive rendering logic, this can become unnecessary work.

---

## Better: Colocate the Hook

Instead, move the hook into the component that actually owns the search input:

```tsx
function ProductPage() {
  return (
    <>
      <SearchForm />
      <ProductList />
      <ProductTable />
      <ProductMap />
    </>
  );
}

function SearchForm() {
  const search = useSearchInput();

  return (
    <input
      value={search.value}
      onChange={(event) =>
        search.setValue(event.target.value)
      }
    />
  );
}
```

Now:

```text
User types
   ↓
useSearchInput state changes
   ↓
SearchForm re-renders
```

The heavy components don't need to re-render because of the input's local state.

---

## Stateful vs. Stateless Custom Hooks

Not every custom hook creates this concern.

### Stateful hook

A hook that uses `useState`, `useReducer`, or another stateful mechanism:

```tsx
function useCounter() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}
```

The component calling it re-renders when that state changes.

### Stateless hook

A hook that only calculates or organizes values without owning React state:

```tsx
function useFormattedPrice(price: number) {
  return `$${price.toFixed(2)}`;
}
```

Calling this hook doesn't introduce an independent state update.

---

## Important: Custom Hooks Do Not Have Their Own Component Lifecycle

It is useful to remember that a custom hook is **not a separate component**.

For example:

```tsx
function useCounter() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}

function Counter() {
  const { count, setCount } = useCounter();

  // ...
}
```

Conceptually, the state belongs to `Counter`:

```text
Counter
 └── useCounter()
      └── count state
```

So when `count` changes:

```text
count changes
    ↓
Counter re-renders
```

The custom hook doesn't re-render independently from `Counter`.

---

## The Principle

A useful rule is:

> **Colocate stateful custom hooks with the smallest component that actually needs their state.**

Prefer:

```text
Page
├── SmallComponent
│    └── useSomeState()
│
├── HeavyComponent
├── HeavyComponent
└── HeavyComponent
```

over:

```text
Page
└── useSomeState()
     ├── SmallComponent
     ├── HeavyComponent
     ├── HeavyComponent
     └── HeavyComponent
```

when the state is only required by `SmallComponent`.

## However, Don't Over-Optimize

This does **not** mean:

> "Never use a custom hook in a large component."

If the large component genuinely needs the state, the hook should be used there.

For example:

```tsx
function CheckoutPage() {
  const checkout = useCheckout();

  // CheckoutPage genuinely needs checkout state.
}
```

Moving the hook elsewhere just to avoid a re-render could make the architecture more complicated without providing a meaningful benefit.

The goal is **not to prevent every re-render**.

The goal is to **keep frequently changing state close to where it is used and prevent unnecessary work in unrelated parts of the component tree.**

## Rule of Thumb

**Stateful custom hook → closest component that needs the state.**

**Shared state → lift it to the nearest common ancestor.**

**Expensive component + unrelated frequently changing state → consider isolating the state in a smaller child component.**
