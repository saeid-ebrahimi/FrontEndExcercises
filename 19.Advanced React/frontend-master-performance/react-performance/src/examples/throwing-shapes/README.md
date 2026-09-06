# Throwing Shapes

A React application demonstrating performance optimization with `useDeferredValue` when rendering large numbers of visual elements controlled by a slider. This is intentionally slow to showcase the problem and solution.

## The Problem

Try dragging the slider quickly. Notice how it feels sluggish and unresponsive? That's because every tiny movement of the slider triggers:

1. A state update for the slider value
2. Regeneration of thousands of shape objects
3. Re-rendering of thousands of DOM elements

All of these happen synchronously, blocking the main thread and making the UI feel janky.

## Optimizing with React's useDeferredValue Hook

This guide demonstrates how to use React 18's `useDeferredValue` hook to keep the slider responsive while expensive rendering operations happen in the background.

### Understanding the Problem

The current implementation has a performance bottleneck:

```tsx
function Application() {
  const [shapeCount, setShapeCount] = useState(1000);

  // This expensive computation runs on EVERY slider change
  const shapes = useMemo(() => generateShapes(shapeCount), [shapeCount]);

  return (
    <Range
      value={shapeCount}
      onChange={setShapeCount} // Directly updates state
    />
  );
}
```

**Why this causes UI jank:**

1. **Synchronous updates**: Every pixel the slider moves triggers an immediate state update
2. **Expensive computation**: `generateShapes()` creates thousands of objects with random properties
3. **Heavy rendering**: React must render thousands of positioned `<div>` elements
4. **Coupled operations**: The slider movement and expensive rendering are locked together

When you drag the slider quickly, these operations pile up, making the slider feel stuck or laggy.

### What is useDeferredValue?

`useDeferredValue` is a React 18 hook that creates a "deferred" copy of a value that can lag behind the original. This allows React to:

- Prioritize urgent updates (like slider movement) over less urgent ones (like rendering shapes)
- Keep the UI responsive by allowing low-priority work to be interrupted
- Update the deferred value "when it has time" rather than immediately

**Key concept**: The slider updates instantly using the current value, while the expensive shape rendering uses the deferred value that lags slightly behind.

### Step-by-Step Implementation

#### Step 1: Import useDeferredValue

Add `useDeferredValue` to your React imports:

```tsx
import { useState, useMemo, useDeferredValue } from 'react';
```

#### Step 2: Create a deferred version of your state

Instead of using `shapeCount` directly for the expensive computation, create a deferred copy:

```tsx
function Application() {
  const [shapeCount, setShapeCount] = useState(1000);

  // Create a deferred version that can lag behind
  const deferredShapeCount = useDeferredValue(shapeCount);

  // Use the deferred value for expensive operations
  const shapes = useMemo(() => generateShapes(deferredShapeCount), [deferredShapeCount]);

  // Use the immediate value for the slider
  return <Range value={shapeCount} onChange={setShapeCount} />;
}
```

That's it! This simple change makes a huge difference:

- The slider uses `shapeCount` (immediate, always responsive)
- The shapes use `deferredShapeCount` (can lag behind for performance)

#### Step 3: Add visual feedback (Optional)

You can show users when the rendering is catching up:

```tsx
function Application() {
  const [shapeCount, setShapeCount] = useState(1000);
  const deferredShapeCount = useDeferredValue(shapeCount);

  // Check if the deferred value is behind the current value
  const isUpdating = shapeCount !== deferredShapeCount;

  const shapes = useMemo(() => generateShapes(deferredShapeCount), [deferredShapeCount]);

  return (
    <Container className="my-8 space-y-8">
      <Range
        label={`Number of shapes: ${shapeCount.toLocaleString()}`}
        value={shapeCount}
        onChange={setShapeCount}
      />

      {isUpdating && (
        <p className="text-sm text-slate-500">
          Updating to {shapeCount.toLocaleString()} shapes...
        </p>
      )}

      <ShapesGrid shapes={shapes} />
    </Container>
  );
}
```

#### Step 4: Optional - Add opacity during updates

You can visually indicate that the rendering is in progress:

```tsx
<div className={`transition-opacity ${isUpdating ? 'opacity-50' : 'opacity-100'}`}>
  <ShapesGrid shapes={shapes} />
</div>
```

### Complete Before and After Comparison

**Before (Synchronous):**

```tsx
function Application() {
  const [shapeCount, setShapeCount] = useState(1000);

  // Expensive computation runs immediately on every slider change
  const shapes = useMemo(() => generateShapes(shapeCount), [shapeCount]);

  return (
    <Container className="my-8 space-y-8">
      <Range
        label={`Number of shapes: ${shapeCount.toLocaleString()}`}
        min={1000}
        max={20000}
        step={1000}
        value={shapeCount}
        onChange={setShapeCount}
      />
      <ShapesGrid shapes={shapes} />
    </Container>
  );
}
```

**After (With useDeferredValue):**

```tsx
function Application() {
  const [shapeCount, setShapeCount] = useState(1000);

  // Defer the expensive computation
  const deferredShapeCount = useDeferredValue(shapeCount);
  const isUpdating = shapeCount !== deferredShapeCount;

  const shapes = useMemo(() => generateShapes(deferredShapeCount), [deferredShapeCount]);

  return (
    <Container className="my-8 space-y-8">
      <Range
        label={`Number of shapes: ${shapeCount.toLocaleString()}`}
        min={1000}
        max={20000}
        step={1000}
        value={shapeCount}
        onChange={setShapeCount}
      />

      {isUpdating && (
        <p className="text-sm text-slate-500">
          Updating to {shapeCount.toLocaleString()} shapes...
        </p>
      )}

      <div className={`transition-opacity ${isUpdating ? 'opacity-50' : 'opacity-100'}`}>
        <ShapesGrid shapes={shapes} />
      </div>
    </Container>
  );
}
```

### When to Use useDeferredValue vs useTransition

Both hooks enable concurrent rendering, but they have different use cases:

**useDeferredValue**: Use when you have:

- A single value that triggers expensive updates
- UI that can safely show "stale" data while computing new data
- External state you don't control (e.g., props, context)

```tsx
// Good for: Sliders, color pickers, number inputs
const deferredValue = useDeferredValue(value);
```

**useTransition**: Use when you have:

- A state update you can wrap
- Need to know when the transition is pending (for loading indicators)
- Want explicit control over which updates are transitions

```tsx
// Good for: Search inputs, filters, form submissions
startTransition(() => {
  setSearchQuery(newValue);
});
```

### Alternative Optimizations

While `useDeferredValue` is perfect for this use case, here are other techniques you might combine:

#### Throttling the state updates

```tsx
import { useCallback } from 'react';
import { throttle } from 'lodash-es'; // or implement your own

function Application() {
  const [shapeCount, setShapeCount] = useState(1000);
  const deferredShapeCount = useDeferredValue(shapeCount);

  // Throttle state updates to at most once per 100ms
  const handleChange = useCallback(
    throttle((value: number) => {
      setShapeCount(value);
    }, 100),
    [],
  );

  // ...
}
```

#### Debouncing instead of deferring

```tsx
function Application() {
  const [displayValue, setDisplayValue] = useState(1000);
  const [shapeCount, setShapeCount] = useState(1000);

  // Debounce the expensive state update
  const debounceRef = useRef<NodeJS.Timeout>();

  const handleChange = (value: number) => {
    setDisplayValue(value); // Update display immediately

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Wait until user stops dragging
    debounceRef.current = setTimeout(() => {
      setShapeCount(value);
    }, 300);
  };

  const shapes = useMemo(() => generateShapes(shapeCount), [shapeCount]);

  return (
    <Range
      label={`Number of shapes: ${displayValue.toLocaleString()}`}
      value={displayValue}
      onChange={handleChange}
    />
  );
}
```

**Comparison:**

- **useDeferredValue**: Shapes continuously update, but lag slightly behind (smooth but delayed)
- **Debouncing**: Shapes only update after user stops dragging (no update until pause)
- **Throttling**: Shapes update at fixed intervals (choppy but predictable)

For sliders, `useDeferredValue` usually provides the best user experience because it provides continuous feedback.

### Testing the Improvement

To verify the optimization works:

**Without useDeferredValue**

- Drag the slider quickly back and forth
- Notice how it feels stuck, jumpy, or unresponsive
- The slider doesn't follow your mouse/finger smoothly

**With useDeferredValue**

- Drag the slider quickly back and forth
- The slider moves smoothly and responsively
- The shapes update a moment later, but the slider is never blocked
- You can see the old shape count while the new one is rendering

**React DevTools Profiler**

- Record a slider interaction before and after
- Compare the time spent in rendering
- Notice how urgent updates (slider) are prioritized

### Key Takeaways

1. **useDeferredValue is perfect for derived expensive state**: When one value controls an expensive computation or rendering
2. **Simpler than useTransition**: No need to split state into urgent/non-urgent pieces
3. **The deferred value lags behind**: This is intentional and allows React to prioritize urgent updates
4. **Check if lagging**: Use `value !== deferredValue` to show loading indicators
5. **Combine techniques**: useDeferredValue + throttling/debouncing can be even better for some cases

### Common Patterns

This pattern works for any UI where a user control drives expensive rendering:

- **Sliders**: Number of items, chart resolution, animation speed
- **Color pickers**: Live preview of styled components
- **Number inputs**: Complex calculations, chart data, filtered lists
- **Canvas/SVG rendering**: Particle systems, data visualizations, games

The key is: user input is urgent (must be instant), but expensive rendering can afford to lag slightly.
