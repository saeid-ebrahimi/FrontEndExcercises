# Lazy Loading

A React application demonstrating code splitting and lazy loading with `React.lazy()` and `Suspense`. This lab shows how to reduce initial bundle size by loading components on demand.

## The Problem

Open the Network tab in your browser DevTools and refresh the page. Notice how the JavaScript bundle includes code for **ALL** tabs, even though you're only viewing the Welcome tab?

The issue:

1. **All components are imported eagerly** (regular imports)
2. **All JavaScript is downloaded immediately**, even for tabs you might never visit
3. **Initial bundle is unnecessarily large**, slowing down page load
4. **Users pay the cost for code they don't use**

This is especially problematic for:

- Heavy components with large dependencies (charting libraries, rich text editors, etc.)
- Features most users never access
- Mobile users on slow connections
- Apps with many routes or sections

## The Performance Impact

Without lazy loading:

- Initial bundle: **~150 KB** (includes all tabs)
- Time to Interactive: **2.5s** on slow 3G
- Users download code for charts even if they never open that tab

With lazy loading:

- Initial bundle: **~50 KB** (only Welcome tab + framework)
- Time to Interactive: **0.8s** on slow 3G
- Chart tab code only downloads if/when user clicks that tab

## Current Implementation (Eager Loading)

In `application.tsx`:

```tsx
// ❌ EAGER LOADING: All imports happen upfront
import { WelcomeTab } from './components/welcome-tab';
import { DataTableTab } from './components/data-table-tab';
import { ChartTab } from './components/chart-tab';

function Application() {
  const [activeTab, setActiveTab] = useState('welcome');

  return (
    <>
      {activeTab === 'welcome' && <WelcomeTab />}
      {activeTab === 'data' && <DataTableTab />}
      {activeTab === 'chart' && <ChartTab />}
    </>
  );
}
```

Even though only one tab is visible at a time, the JavaScript for all three tabs is downloaded immediately.

## Solution: Lazy Loading with React.lazy()

<details>
<summary>Click to see the solution</summary>

### Step 1: Convert Imports to React.lazy()

Replace regular imports with `lazy()` dynamic imports:

In `application.tsx`:

```tsx
import { lazy, Suspense, useState } from 'react';
import { Container } from '$components/container';
import type { TabId } from './types';

// ✅ Keep lightweight components eager
import { WelcomeTab } from './components/welcome-tab';
import { LoadingFallback } from './components/loading-fallback';

// ✅ Lazy load heavy components
const DataTableTab = lazy(() =>
  import('./components/data-table-tab').then((m) => ({ default: m.DataTableTab })),
);

const ChartTab = lazy(() =>
  import('./components/chart-tab').then((m) => ({ default: m.ChartTab })),
);

const tabs = [
  { id: 'welcome' as TabId, label: 'Welcome', description: 'Lightweight intro' },
  { id: 'data' as TabId, label: 'Data Table', description: '100 rows of data' },
  { id: 'chart' as TabId, label: 'Charts', description: 'Visual analytics' },
];

function Application() {
  const [activeTab, setActiveTab] = useState<TabId>('welcome');

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Lazy Loading Demo
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Now tabs are lazy loaded! Open the Network tab and switch tabs - you&apos;ll see separate
          chunks being downloaded only when you click each tab.
        </p>
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            ✅ Components lazy loaded: smaller initial bundle, faster page load
          </p>
        </div>
      </section>

      <section>
        <div className="border-b border-slate-200 dark:border-slate-700">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 pb-4 pt-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                <div className="flex flex-col items-start">
                  <span>{tab.label}</span>
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-500">
                    {tab.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6">
          {activeTab === 'welcome' && <WelcomeTab />}
          {activeTab === 'data' && (
            <Suspense fallback={<LoadingFallback />}>
              <DataTableTab />
            </Suspense>
          )}
          {activeTab === 'chart' && (
            <Suspense fallback={<LoadingFallback />}>
              <ChartTab />
            </Suspense>
          )}
        </div>
      </section>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Benefits
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>✅ Only Welcome tab code is in the initial bundle</li>
          <li>✅ Data Table and Charts download only when needed</li>
          <li>✅ Faster initial page load</li>
          <li>✅ Loading fallbacks provide visual feedback</li>
          <li>✅ Code automatically split by bundler</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
```

### Step 2: Add Suspense Boundaries

Wrap each lazy component in a `<Suspense>` boundary with a fallback:

```tsx
{
  activeTab === 'data' && (
    <Suspense fallback={<LoadingFallback />}>
      <DataTableTab />
    </Suspense>
  );
}
```

### Step 3: Create a Loading Fallback

In `components/loading-fallback.tsx`:

```tsx
import { Spinner } from '$components/spinner';

export function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <Spinner size="large" />
      <p className="text-sm text-slate-600 dark:text-slate-400">Loading component...</p>
    </div>
  );
}
```

### What Changed?

**Before (Eager)**:

```tsx
import { DataTableTab } from './components/data-table-tab';

// Component code immediately in main bundle
{
  activeTab === 'data' && <DataTableTab />;
}
```

**After (Lazy)**:

```tsx
const DataTableTab = lazy(() => import('./components/data-table-tab'));

// Component code in separate chunk, loaded on demand
{
  activeTab === 'data' && (
    <Suspense fallback={<LoadingFallback />}>
      <DataTableTab />
    </Suspense>
  );
}
```

</details>

## Understanding React.lazy()

### How It Works

```tsx
// Regular import - synchronous, immediate
import { Component } from './component';

// Dynamic import - asynchronous, returns a Promise
const Component = lazy(() => import('./component'));
```

`React.lazy()` takes a function that returns a dynamic `import()`. When the component is first rendered, React:

1. Calls the import function
2. Downloads the separate chunk containing that component
3. Shows the Suspense fallback while downloading
4. Renders the component once loaded

### Named Exports

If your component uses named exports, you need to wrap it:

```tsx
// ✅ Default export (works directly)
const Component = lazy(() => import('./component'));

// ✅ Named export (needs wrapping)
const Component = lazy(() =>
  import('./component').then((module) => ({ default: module.ComponentName })),
);
```

### Multiple Components in One Chunk

You can group related components together:

```tsx
// Both components in the same chunk
const TabA = lazy(() => import('./tabs').then((m) => ({ default: m.TabA })));
const TabB = lazy(() => import('./tabs').then((m) => ({ default: m.TabB })));
```

## When to Lazy Load

### ✅ Good Candidates for Lazy Loading

**Large, infrequently-used features**:

```tsx
// Admin panel that most users never see
const AdminPanel = lazy(() => import('./AdminPanel'));
```

**Heavy third-party libraries**:

```tsx
// PDF viewer with large dependency (react-pdf, pdf.js)
const PDFViewer = lazy(() => import('./PDFViewer'));

// Rich text editor (Draft.js, Slate, TipTap)
const TextEditor = lazy(() => import('./TextEditor'));

// Charts (Chart.js, Recharts, Victory)
const ChartDashboard = lazy(() => import('./ChartDashboard'));
```

**Modal dialogs and overlays**:

```tsx
// Modal not needed until user clicks a button
const SettingsModal = lazy(() => import('./SettingsModal'));
```

**Tabs and accordions**:

```tsx
// User might never open some tabs
const TabContent = lazy(() => import('./TabContent'));
```

**Routes in React Router**:

```tsx
// Each route in its own chunk
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
```

### ❌ Don't Lazy Load

**Small components** (overhead costs more):

```tsx
// ❌ Bad - Button is tiny, overhead not worth it
const Button = lazy(() => import('./Button'));

// ✅ Good - just import it
import { Button } from './Button';
```

**Components used immediately** (adds unnecessary delay):

```tsx
// ❌ Bad - Header shows on every page
const Header = lazy(() => import('./Header'));

// ✅ Good - needed immediately, don't lazy load
import { Header } from './Header';
```

**Components above the fold**:

```tsx
// ❌ Bad - Hero shows immediately on homepage
const Hero = lazy(() => import('./Hero'));

// ✅ Good - user sees this first, don't lazy load
import { Hero } from './Hero';
```

## Testing the Improvement

### Before Lazy Loading

1. Open DevTools → Network tab
2. Filter by JS
3. Refresh page
4. See: **One large bundle** (~150 KB)
5. Switch tabs
6. See: **No new network requests** (everything already downloaded)

### After Lazy Loading

1. Open DevTools → Network tab
2. Filter by JS
3. Refresh page
4. See: **Small initial bundle** (~50 KB)
5. Switch to Data Table tab
6. See: **New chunk downloaded** (~30 KB) with data-table-tab code
7. Switch to Charts tab
8. See: **Another chunk downloaded** (~70 KB) with chart code

### Lighthouse Performance Audit

**Before**:

- First Contentful Paint: 2.1s
- Time to Interactive: 2.5s
- Total Bundle Size: 150 KB

**After**:

- First Contentful Paint: 0.7s ⚡
- Time to Interactive: 0.8s ⚡
- Initial Bundle Size: 50 KB ⚡

## Advanced Patterns

### Pattern 1: Preloading on Hover

Load a component before the user clicks:

```tsx
const DataTableTab = lazy(() => import('./components/data-table-tab'));

// Preload on hover
const preloadDataTable = () => {
  import('./components/data-table-tab');
};

<button onClick={() => setActiveTab('data')} onMouseEnter={preloadDataTable}>
  Data Table
</button>;
```

### Pattern 2: Multiple Suspense Boundaries

Fine-grained loading states:

```tsx
function Dashboard() {
  return (
    <div>
      <Header /> {/* Always loaded */}
      <Suspense fallback={<Skeleton />}>
        <UserProfile /> {/* Lazy loaded */}
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <ActivityFeed /> {/* Lazy loaded independently */}
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <RecommendedItems /> {/* Lazy loaded independently */}
      </Suspense>
    </div>
  );
}
```

Each section loads independently instead of waiting for all to be ready.

### Pattern 3: Retry on Error

Handle loading failures gracefully:

```tsx
const LazyComponent = lazy(() =>
  import('./Component').catch(() => {
    // Log error, show notification, etc.
    console.error('Failed to load component');
    // Return a fallback component
    return { default: () => <div>Failed to load</div> };
  }),
);
```

### Pattern 4: Route-Based Code Splitting

With React Router:

```tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

Each route is its own chunk, loaded only when the user navigates to it.

### Pattern 5: Component + Data Loading

Combine with data fetching:

```tsx
const ProfilePage = lazy(() =>
  Promise.all([import('./ProfilePage'), fetch('/api/user').then((r) => r.json())]).then(
    ([module, data]) => ({
      default: () => <module.ProfilePage data={data} />,
    }),
  ),
);
```

## Common Pitfalls

### Pitfall 1: Forgetting Suspense

```tsx
// ❌ Error: Suspense boundary required!
const LazyComponent = lazy(() => import('./Component'));

function App() {
  return <LazyComponent />; // Will crash!
}

// ✅ Correct
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Pitfall 2: Default Export Confusion

```tsx
// component.tsx - uses named export
export function MyComponent() {
  /* ... */
}

// ❌ Won't work
const MyComponent = lazy(() => import('./component'));

// ✅ Correct
const MyComponent = lazy(() => import('./component').then((m) => ({ default: m.MyComponent })));

// Or better: change component to use default export
export default function MyComponent() {
  /* ... */
}
```

### Pitfall 3: Lazy Loading Too Much

```tsx
// ❌ Bad - Button used everywhere
const Button = lazy(() => import('./Button'));

// ❌ Bad - Used in initial render
const Header = lazy(() => import('./Header'));

// Remember: Lazy loading has overhead
// Only use it for truly expensive/infrequent components
```

### Pitfall 4: No Loading Fallback

```tsx
// ❌ Bad - blank screen while loading
<Suspense fallback={null}>
  <HeavyComponent />
</Suspense>

// ✅ Good - user sees loading indicator
<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```

## Bundle Analysis

To see what's actually in your bundles:

```bash
# Vite bundle analyzer
npm install -D rollup-plugin-visualizer
```

Add to `vite.config.ts`:

```ts
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [
    visualizer({
      open: true,
      filename: 'dist/stats.html',
    }),
  ],
};
```

This shows you:

- Size of each chunk
- What code is in each chunk
- Which dependencies are largest
- Opportunities for code splitting

## Performance Checklist

Before lazy loading:

- ✅ Measure your current bundle size
- ✅ Identify largest dependencies (charts, editors, etc.)
- ✅ Find components used infrequently
- ✅ Check components below the fold or in hidden tabs

When implementing:

- ✅ Start with routes (biggest wins)
- ✅ Then large features (modals, admin panels)
- ✅ Then heavy third-party dependencies
- ✅ Always wrap with Suspense
- ✅ Provide meaningful loading fallbacks

After implementing:

- ✅ Verify chunks are created (check Network tab)
- ✅ Test on slow connection (DevTools throttling)
- ✅ Measure improvement with Lighthouse
- ✅ Check bundle sizes with visualizer

## Key Takeaways

1. **Lazy loading reduces initial bundle size** by splitting code into chunks loaded on demand

2. **Use React.lazy() for dynamic imports**:

   ```tsx
   const Component = lazy(() => import('./Component'));
   ```

3. **Always wrap with Suspense**:

   ```tsx
   <Suspense fallback={<Loading />}>
     <LazyComponent />
   </Suspense>
   ```

4. **Best for**:
   - Routes
   - Modals and overlays
   - Tabs and accordions
   - Heavy third-party dependencies
   - Infrequently-used features

5. **Don't lazy load**:
   - Small components
   - Components used immediately
   - Critical above-the-fold content

6. **Measure the impact** with DevTools Network tab and Lighthouse

## Learning Resources

- [React docs: lazy](https://react.dev/reference/react/lazy)
- [React docs: Suspense](https://react.dev/reference/react/Suspense)
- [Code Splitting Guide](https://react.dev/learn/code-splitting)
- [Web.dev: Code Splitting](https://web.dev/code-splitting-suspense/)
- [Vite: Code Splitting](https://vitejs.dev/guide/features.html#code-splitting)
