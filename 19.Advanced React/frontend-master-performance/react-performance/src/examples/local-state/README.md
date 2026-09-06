# Local State

A React application demonstrating the principle of **state colocation**—keeping state as close as possible to where it's used. This lab shows why lifting state unnecessarily hurts performance and maintainability.

## The Problem

Open your browser console and interact with any widget (increment the counter, type text, or change the color). Notice how **ALL three widgets re-render** even though they're completely independent?

The issue—as it stands right now:

1. **All widget state is stored in the parent component**
2. **When _any_ state changes, the parent re-renders**
3. **When the parent re-renders, ALL children re-render**
4. **None of these widgets actually need to share state!**

This is a common anti-pattern: lifting state "just in case" or because it feels organized. But it creates unnecessary coupling and performance problems.

## The Performance Impact

Without state colocation:

- Type in text widget → **All 3 widgets re-render**
- Increment counter → **All 3 widgets re-render**
- Change color → **All 3 widgets re-render**

With proper state colocation:

- Type in text widget → **Only text widget re-renders**
- Increment counter → **Only counter widget re-renders**
- Change color → **Only color widget re-renders**

## Current Implementation (Anti-Pattern)

In `application.tsx`:

```tsx
function Application() {
  // ❌ ANTI-PATTERN: All widget state lifted to parent
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [color, setColor] = useState('#3b82f6');

  // Each widget needs its own handlers
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <Container>
      <CounterWidget
        count={count}
        onIncrement={incrementCount}
        onDecrement={decrementCount}
        onReset={resetCount}
      />
      <TextWidget text={text} onTextChange={setText} />
      <ColorWidget color={color} onColorChange={setColor} />
    </Container>
  );
}
```

Why this is so very, very bad:

- **Tight coupling**: Parent knows about ALL widget internals.
- **Unnecessary re-renders**: Changing one widget re-renders all of them.
- **Props drilling**: Each widget receives state + multiple handlers.
- **Hard to maintain**: Adding a widget means modifying the parent.
- **Can't reuse widgets**: They're all dependent on parent structure.

Absolutely, terrible, right?

## Solution: Colocate State

<details>
<summary>Click to see the solution</summary>

### Step 1: Move State into Each Widget

The key principle: **If state is only used by one component, it should live in that component.**

### Step 2: Create Self-Contained Widgets

In `components/counter-widget.tsx`:

```tsx
import { useState } from 'react';
import { Card } from '$components/card';
import { Button } from '$components/button';

export function CounterWidget() {
  // ✅ State lives where it's used
  const [count, setCount] = useState(0);

  console.log('CounterWidget rendered');

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Counter Widget
      </h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        A simple counter. Notice this only re-renders when you interact with it.
      </p>

      <div className="flex items-center justify-center space-x-4">
        <Button onClick={() => setCount(count - 1)} variant="secondary">
          −
        </Button>
        <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">{count}</span>
        <Button onClick={() => setCount(count + 1)} variant="secondary">
          +
        </Button>
      </div>

      <div className="mt-4 flex justify-center">
        <Button onClick={() => setCount(0)} variant="secondary" size="small">
          Reset
        </Button>
      </div>
    </Card>
  );
}
```

In `components/text-widget.tsx`:

```tsx
import { useState } from 'react';
import { Card } from '$components/card';
import { Textarea } from '$components/textarea';
import { Button } from '$components/button';

export function TextWidget() {
  // ✅ State lives where it's used
  const [text, setText] = useState('');

  console.log('TextWidget rendered');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Text Widget</h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        Type something. Notice this only re-renders when you interact with IT.
      </p>

      <Textarea
        label="Enter some text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Start typing..."
      />

      <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-400">
        <span>
          {wordCount} {wordCount === 1 ? 'word' : 'words'}
        </span>
        <span>
          {charCount} {charCount === 1 ? 'character' : 'characters'}
        </span>
      </div>

      <div className="mt-4">
        <Button onClick={() => setText('')} variant="secondary" size="small">
          Clear
        </Button>
      </div>
    </Card>
  );
}
```

In `components/color-widget.tsx`:

```tsx
import { useState } from 'react';
import { Card } from '$components/card';
import { Input } from '$components/input';
import { Button } from '$components/button';

export function ColorWidget() {
  // ✅ State lives where it's used
  const [color, setColor] = useState('#3b82f6');

  console.log('ColorWidget rendered');

  const presetColors = [
    '#ef4444', // red
    '#f59e0b', // amber
    '#10b981', // emerald
    '#3b82f6', // blue
    '#8b5cf6', // violet
    '#ec4899', // pink
  ];

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Color Widget
      </h3>

      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        Pick a color. Notice this only re-renders when you interact with IT.
      </p>

      <div className="space-y-4">
        <div
          className="h-24 rounded-lg border-2 border-slate-200 dark:border-slate-700"
          style={{ backgroundColor: color }}
        />

        <Input
          type="color"
          label="Choose color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <div>
          <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Preset colors:
          </p>
          <div className="flex gap-2">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                className="h-8 w-8 rounded border-2 border-slate-200 transition-transform hover:scale-110 dark:border-slate-700"
                style={{ backgroundColor: presetColor }}
                onClick={() => setColor(presetColor)}
                aria-label={`Select ${presetColor}`}
              />
            ))}
          </div>
        </div>

        <Button onClick={() => setColor('#3b82f6')} variant="secondary" size="small">
          Reset to Blue
        </Button>
      </div>
    </Card>
  );
}
```

### Step 3: Simplify Parent Component

In `application.tsx`:

```tsx
import { Container } from '$components/container';
import { CounterWidget } from './components/counter-widget';
import { TextWidget } from './components/text-widget';
import { ColorWidget } from './components/color-widget';

function Application() {
  // ✅ Parent doesn't need to know about widget internals
  // No state, no handlers, just composition!

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Local State Demo
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Open your browser console and interact with any widget. Now only the widget you interact
          with re-renders. The other widgets are completely unaffected!
        </p>
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            ✅ Best practice: Each widget manages its own state
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CounterWidget />
        <TextWidget />
        <ColorWidget />
      </section>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Benefits
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>✅ Each widget is self-contained and independent</li>
          <li>✅ Only the widget being interacted with re-renders</li>
          <li>✅ Widgets can be easily moved, copied, or reused</li>
          <li>✅ Parent component is clean and simple</li>
          <li>✅ Easy to add/remove widgets without touching parent</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
```

### What Changed?

**Before (Anti-Pattern)**:

- 9 state variables and functions in parent
- Props drilling through every widget
- Parent couples to all widget implementations
- Every state change re-renders everything

**After (Colocated)**:

- 0 state in parent
- No props drilling
- Parent just composes widgets
- Only changed widget re-renders

</details>

## When to Lift State vs When to Colocate

### ✅ Colocate State When:

State is only used by **one component**:

```tsx
// ✅ Good - state lives in the component that uses it
function SearchBox() {
  const [query, setQuery] = useState('');
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

Components are **independent**:

```tsx
// ✅ Good - each widget is independent
function Dashboard() {
  return (
    <>
      <WeatherWidget /> {/* Has its own state */}
      <StockWidget /> {/* Has its own state */}
      <NewsWidget /> {/* Has its own state */}
    </>
  );
}
```

State doesn't need to **persist** when component unmounts:

```tsx
// ✅ Good - form state resets when modal closes
function Modal({ isOpen }) {
  const [formData, setFormData] = useState({});
  // Form state is tied to modal lifecycle
}
```

### ❌ Lift State When:

Multiple components need to **share** the same state:

```tsx
// ✅ Good - shared state lifted to parent
function ShoppingCart() {
  const [items, setItems] = useState([]);
  return (
    <>
      <CartList items={items} />
      <CartTotal items={items} />
      <CheckoutButton items={items} />
    </>
  );
}
```

State needs to be **synchronized** across components:

```tsx
// ✅ Good - filter state affects both components
function ProductPage() {
  const [filter, setFilter] = useState('all');
  return (
    <>
      <FilterControls filter={filter} onFilterChange={setFilter} />
      <ProductList filter={filter} />
    </>
  );
}
```

State needs to **persist** across component unmounts:

```tsx
// ✅ Good - form data persists in parent during tab switches
function TabbedForm() {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
      {activeTab === 'personal' && <PersonalInfo data={formData} onChange={setFormData} />}
      {activeTab === 'address' && <AddressInfo data={formData} onChange={setFormData} />}
    </>
  );
}
```

## Common Patterns

### Pattern 1: Independent Widgets

```tsx
// ✅ Good - each widget is self-contained
function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Widget1 /> {/* Manages its own state */}
      <Widget2 /> {/* Manages its own state */}
      <Widget3 /> {/* Manages its own state */}
    </div>
  );
}
```

### Pattern 2: Compound Components (Lift for Coordination)

```tsx
// ✅ Good - tabs need coordination, so state is lifted
function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <>
      <TabList activeTab={activeTab} onTabChange={setActiveTab} />
      <TabPanels activeTab={activeTab} />
    </>
  );
}
```

### Pattern 3: Form Sections (Colocate Until Needed)

```tsx
// ✅ Good - each section manages its own validation state
function RegistrationForm() {
  return (
    <form>
      <PersonalInfoSection /> {/* Manages its own validation */}
      <AddressSection /> {/* Manages its own validation */}
      <PreferencesSection /> {/* Manages its own validation */}
    </form>
  );
}
```

### Pattern 4: Accordion Items (Independent)

```tsx
// ✅ Good - each accordion item manages its own open/close state
function FAQ() {
  return (
    <div>
      <AccordionItem title="Question 1">Answer 1</AccordionItem>
      <AccordionItem title="Question 2">Answer 2</AccordionItem>
      <AccordionItem title="Question 3">Answer 3</AccordionItem>
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  // Each item controls its own open/close state
}
```

## Testing the Difference

### Before Colocation (Anti-Pattern)

1. Open browser console
2. Type in the text widget
3. See console logs: **All 3 widgets re-render**
4. Increment the counter
5. See console logs: **All 3 widgets re-render**
6. Change the color
7. See console logs: **All 3 widgets re-render**

### After Colocation (Best Practice)

1. Open browser console
2. Type in the text widget
3. See console log: **Only TextWidget re-renders**
4. Increment the counter
5. See console log: **Only CounterWidget re-renders**
6. Change the color
7. See console log: **Only ColorWidget re-renders**

### React DevTools Profiler

1. Open React DevTools → Profiler tab
2. Start recording
3. Interact with one widget
4. Stop recording

**Before**: Parent + all 3 widgets highlighted (4 components re-rendered)
**After**: Only the widget you interacted with (1 component re-rendered)

## Key Principles

### Start Local, Lift When Needed

```tsx
// ✅ Start here
function Component() {
  const [state, setState] = useState();
  // Use state locally
}

// Only lift if you discover multiple components need it
```

**Don't prematurely lift state "just in case."** It's easier to lift state later when you discover it's needed than to push it back down.

### Colocation Improves Performance

Fewer components re-render when state changes:

```tsx
// ❌ 1 state change → N components re-render
function Parent() {
  const [state1, setState1] = useState();
  const [state2, setState2] = useState();
  return (
    <>
      <Child1 state={state1} />
      <Child2 state={state2} />
    </>
  );
}

// ✅ 1 state change → 1 component re-renders
function Parent() {
  return (
    <>
      <Child1 /> {/* Has its own state */}
      <Child2 /> {/* Has its own state */}
    </>
  );
}
```

### Colocation Improves Maintainability

Code is easier to understand and modify:

```tsx
// ❌ Parent knows about all child internals
function Parent() {
  const [childState1, setChildState1] = useState();
  const [childState2, setChildState2] = useState();
  const handleChild1Change = () => {
    /* ... */
  };
  const handleChild2Change = () => {
    /* ... */
  };
  // 50 lines of child logic...
}

// ✅ Parent just composes children
function Parent() {
  return (
    <>
      <Child1 />
      <Child2 />
    </>
  );
}
```

### Colocation Enables Reusability

Components become portable:

```tsx
// ❌ Can't reuse - depends on parent structure
<CounterWidget
  count={count}
  onIncrement={handleIncrement}
  onDecrement={handleDecrement}
/>

// ✅ Can reuse anywhere - self-contained
<CounterWidget />
```

## Common Pitfalls

### Pitfall 1: Lifting "Just in Case"

```tsx
// ❌ Don't lift state before you need it
function Parent() {
  const [widgetState, setWidgetState] = useState();
  // "Maybe I'll need this in parent someday..."
}

// ✅ Keep it local until you actually need to share it
function Widget() {
  const [widgetState, setWidgetState] = useState();
  // If you need it in parent later, you can lift it then
}
```

### Pitfall 2: Confusing "Organization" with "Lifting"

```tsx
// ❌ Lifting state doesn't make code more organized
function Parent() {
  // 100 lines of state and handlers for all children
}

// ✅ Colocating state makes code MORE organized
function Parent() {
  return <Child1 /> <Child2 /> <Child3 />; // Clean and simple
}
```

### Pitfall 3: Over-sharing State

```tsx
// ❌ Widget A and B don't actually need to share state
function Parent() {
  const [sharedState, setSharedState] = useState();
  return (
    <>
      <WidgetA state={sharedState} onChange={setSharedState} />
      <WidgetB state={sharedState} onChange={setSharedState} />
    </>
  );
}

// ✅ If they're independent, keep state separate
function Parent() {
  return (
    <>
      <WidgetA /> {/* Has its own state */}
      <WidgetB /> {/* Has its own state */}
    </>
  );
}
```

## Decision Tree

Ask yourself:

1. **Do multiple components need this state?**
   - No → Keep it local (colocate)
   - Yes → Continue to question 2

2. **Do the components need to synchronize?**
   - No → Keep it local in each (duplicate state is OK!)
   - Yes → Continue to question 3

3. **What's the nearest common ancestor?**
   - Lift state to that component only
   - Don't lift higher than necessary

## Performance Comparison

| Scenario                     | Lifted State                      | Colocated State          |
| ---------------------------- | --------------------------------- | ------------------------ |
| **State update in Widget A** | Parent + all widgets re-render    | Only Widget A re-renders |
| **Add new widget**           | Modify parent + all existing code | Just add `<NewWidget />` |
| **Remove widget**            | Clean up parent state + handlers  | Just remove `<Widget />` |
| **Reuse widget**             | Must recreate state logic         | Copy-paste component     |
| **Test widget**              | Must mock parent context          | Test widget in isolation |

## Learning Resources

- [Kent C. Dodds: State Colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)
- [React docs: Lifting State Up](https://react.dev/learn/sharing-state-between-components)
- [React docs: Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [Colocation Principle](https://kentcdodds.com/blog/colocation)
