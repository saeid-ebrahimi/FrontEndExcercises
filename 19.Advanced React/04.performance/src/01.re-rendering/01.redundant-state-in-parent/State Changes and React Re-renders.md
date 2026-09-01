# State Changes and React Re-renders

When the **state of a React component changes**, React re-renders that component.

By default, React also re-renders its **child components** because the parent component renders its children again.

For example:

```tsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <ExpensiveChild />
    </>
  );
}
```

Every time `count` changes:

1. `Parent` re-renders.
2. `ExpensiveChild` is rendered again as part of the parent's render.
3. If `ExpensiveChild` is expensive to render, this can cause unnecessary work.

## Keep State as Close as Possible to Where It Is Used

A useful React optimization principle is:

> **Keep state as close as possible to the components that actually need it.**

Instead of putting state in a high-level parent, consider moving it into the child component that uses it.

### Before

```tsx
function Parent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>

      <ExpensiveChild />
    </>
  );
}
```

Here, changing `isOpen` causes `Parent` to re-render, which means its children participate in the new render as well.

### After

Move the state into the component that needs it:

```tsx
function Parent() {
  return (
    <>
      <Toggle />
      <ExpensiveChild />
    </>
  );
}

function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      Toggle
    </button>
  );
}
```

Now, when `isOpen` changes:

1. `Toggle` re-renders.
2. `Parent` does not need to re-render.
3. `ExpensiveChild` does not need to participate in a new render caused by `isOpen`.

## Why Does This Matter?

Imagine a component tree like this:

```text
App
 └── Page
      ├── SearchForm
      ├── ExpensiveList
      ├── Map
      └── Footer
```

If `SearchForm` has some local state:

```tsx
const [query, setQuery] = useState("");
```

and that state is placed in `Page` instead:

```tsx
function Page() {
  const [query, setQuery] = useState("");

  return (
    <>
      <SearchForm />
      <ExpensiveList />
      <Map />
      <Footer />
    </>
  );
}
```

Every update to `query` causes `Page` to re-render.

That means the entire subtree under `Page` gets rendered again.

If the state is only needed by `SearchForm`, it is usually better to keep it there:

```tsx
function Page() {
  return (
    <>
      <SearchForm />
      <ExpensiveList />
      <Map />
      <Footer />
    </>
  );
}

function SearchForm() {
  const [query, setQuery] = useState("");

  // ...
}
```

Now the state update is isolated to `SearchForm`.

## Important: This Does Not Mean "Children Always Re-render"

It is important to understand the distinction between:

- **the parent component re-rendering**
- **the child component actually doing expensive rendering work**

React's rendering behavior is more nuanced than simply saying:

> "When state changes, every child re-renders."

A parent state update causes the parent to render again, and React evaluates its child elements as part of that render. However, React can **bail out** of rendering certain child components, for example when using `React.memo` and the child's props have not changed.

Therefore, moving state down is not the only optimization technique.

Other techniques include:

```tsx
React.memo
useMemo
useCallback
```

But these should generally be used when there is a real performance reason, rather than automatically everywhere.

## The Main Principle

The most important idea is:

> **Keep state as close as possible to the component that owns and uses that state.**

This is sometimes called **state colocation**.

Instead of:

```text
App
 └── Page
      └── state
           ├── Component A
           ├── Component B
           ├── Component C
           └── Component D
```

when only `Component A` needs the state, prefer:

```text
App
 └── Page
      ├── Component A
      │    └── state
      ├── Component B
      ├── Component C
      └── Component D
```

This keeps state updates more localized and can reduce unnecessary rendering work.

### Rule of Thumb

**Don't lift state up unless you need to.**

Lift state when multiple components need to share it. Otherwise, keep it local to the smallest component that needs it.

This gives you a good balance between:

- **maintainability**
- **component isolation**
- **performance**
- **simpler state management**