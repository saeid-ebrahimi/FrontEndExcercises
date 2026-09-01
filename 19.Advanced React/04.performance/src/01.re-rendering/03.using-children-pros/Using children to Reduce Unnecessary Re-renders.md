# Using `children` to Reduce Unnecessary Re-renders

One useful React composition technique for reducing unnecessary rendering is to pass components through the `children` prop.

The key idea is:

> **If a component has frequently changing local state, putting expensive content outside that component and passing it as `children` can prevent that content from being re-rendered as a result of the state update.**

## The Problem

Consider this component:

```tsx
function Wrapper() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() =>
          setCount((count) => count + 1)
        }>
        Count: {count}
      </button>

      <HeavyComponent />
    </div>
  );
}
```

Whenever `count` changes:

```text
count changes
     ↓
Wrapper re-renders
     ↓
HeavyComponent is encountered again
```

If `HeavyComponent` is expensive, this may result in unnecessary rendering work.

---

## Using `children`

We can change the component so that the heavy content is passed through `children`:

```tsx
function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() =>
          setCount((count) => count + 1)
        }>
        Count: {count}
      </button>

      {children}
    </div>
  );
}
```

Then use it like this:

```tsx
function Page() {
  return (
    <Wrapper>
      <HeavyComponent />
    </Wrapper>
  );
}
```

Now the structure is conceptually:

```text
Page
 └── Wrapper
      └── children → HeavyComponent
```

When `Wrapper`'s `count` changes:

```text
count changes
     ↓
Wrapper re-renders
     ↓
Wrapper renders {children}
     ↓
The existing children element can be reused
```

This can allow `HeavyComponent` to **bail out of rendering** even though its parent wrapper re-renders.

---

## Why Does `children` Help?

The important detail is that JSX creates React elements.

Consider:

```tsx
function Page() {
  return (
    <Wrapper>
      <HeavyComponent />
    </Wrapper>
  );
}
```

The `<HeavyComponent />` element is created when `Page` renders.

When `Wrapper` updates its own state, `Page` does **not** automatically re-render.

Therefore, `Wrapper` receives the same `children` React element.

Conceptually:

```text
Page renders
     ↓
creates <HeavyComponent />
     ↓
passes it as children
     ↓
Wrapper stores/receives that element

Later:

Wrapper state changes
     ↓
Wrapper re-renders
     ↓
children reference is still the same
     ↓
React can reuse the child
```

This is one reason the `children` pattern can be useful for performance.

---

## Example: Heavy Component

Imagine a page with an expensive chart:

```tsx
function HeavyChart() {
  console.log("HeavyChart rendered");

  return <div>Expensive chart...</div>;
}
```

### Without `children`

```tsx
function Panel() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        Toggle
      </button>

      <HeavyChart />
    </div>
  );
}
```

The `Panel` component owns the state and directly creates the `HeavyChart` element during its render.

### With `children`

```tsx
function Panel({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        Toggle
      </button>

      {children}
    </div>
  );
}
```

Usage:

```tsx
function Page() {
  return (
    <Panel>
      <HeavyChart />
    </Panel>
  );
}
```

Now the state belongs to `Panel`, while the heavy content is owned by `Page`.

This separates the two responsibilities:

```text
Panel
 └── owns frequently changing state

Page
 └── owns HeavyChart
```

---

## A Real-World Example

Consider a modal-like component:

```tsx
function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>

      <VeryExpensiveComponent />
    </div>
  );
}
```

If the expensive component doesn't need `isOpen`, there is no reason for it to be conceptually owned by the stateful component.

Instead:

```tsx
function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>

      {children}
    </div>
  );
}
```

Usage:

```tsx
function App() {
  return (
    <Layout>
      <VeryExpensiveComponent />
    </Layout>
  );
}
```

The frequently changing state is now isolated inside `Layout`.

---

## This Is a Form of Composition

This technique is closely related to the **composition pattern** in React.

Instead of making a component responsible for creating all of its content:

```tsx
function Wrapper() {
  return (
    <>
      <Header />
      <HeavyComponent />
      <Footer />
    </>
  );
}
```

you can make the wrapper responsible only for its behavior and layout:

```tsx
function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
```

Then:

```tsx
<Wrapper>
  <HeavyComponent />
</Wrapper>
```

This provides both **better composition** and, in some cases, **better rendering isolation**.

---

## `children` vs `React.memo`

Another common technique is:

```tsx
const HeavyComponent = React.memo(
  function HeavyComponent() {
    return <div>...</div>;
  },
);
```

`React.memo` can prevent a child from rendering when its props haven't changed.

However, the `children` technique approaches the problem differently.

### `React.memo`

```text
Parent re-renders
      ↓
Child is evaluated
      ↓
React.memo checks props
      ↓
Same props?
      ↓
Skip child render
```

### `children` composition

```text
Page creates children
      ↓
Wrapper receives children
      ↓
Wrapper state changes
      ↓
Wrapper re-renders
      ↓
Existing children element can be reused
```

Both can be useful, but they solve the problem at different levels.

---

## Important: `children` Is Not a Magic "No Re-render" Prop

It is important not to misunderstand this pattern.

Using `children` does **not** guarantee that a component will never re-render.

For example, if the component providing the children also re-renders:

```tsx
function Page() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <HeavyComponent count={count} />
    </Wrapper>
  );
}
```

then changing `count` causes `Page` to re-render, which creates new children.

Therefore, the benefit depends on **where the state lives and which component creates the children**.

---

## The Main Principle

The important idea is not simply:

> "Use `children` to prevent re-renders."

A better principle is:

> **Use composition to keep frequently changing state separate from expensive content that doesn't depend on that state. Passing that content as `children` can help React preserve the child element when the wrapper's state changes.**

Think of it as **state isolation through composition**:

```text
                 ┌──────────────────┐
                 │     Page         │
                 │                  │
                 │ creates children │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │     Wrapper      │
                 │                  │
                 │ owns local state │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │  HeavyComponent  │
                 │                  │
                 │ expensive render │
                 └──────────────────┘
```

When the wrapper's local state changes:

```text
Wrapper state changes
        ↓
Wrapper re-renders
        ↓
children element is unchanged
        ↓
HeavyComponent can be skipped
```

## Rule of Thumb

When you have a component that:

- owns frequently changing local state, and
- contains expensive content that does not depend on that state,

consider using **composition and `children`** to separate them.

Instead of:

```tsx
<StatefulWrapper>
  {/* expensive content created inside */}
</StatefulWrapper>
```

consider:

```tsx
<StatefulWrapper>
  {expensiveContent}
</StatefulWrapper>
```

where the expensive content is created by a component **outside the stateful wrapper**.

### The Bigger Lesson

The goal is not to eliminate re-renders.

The goal is to **design the component tree so that state updates affect the smallest possible part of the tree**.

Useful techniques include:

- **State colocation**
- **Component composition**
- **`children`**
- **`React.memo` when appropriate**
- **`useMemo` / `useCallback` when they solve a measured problem**

Among these, **good component structure and state colocation should generally come before memoization.**
