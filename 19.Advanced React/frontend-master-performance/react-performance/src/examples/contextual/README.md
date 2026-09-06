# Contextual

A React application demonstrating the **Context API re-render problem** and how to solve it. This lab shows why putting everything in one context causes performance issues and how to fix it with split contexts, memoization, and composition patterns.

## The Problem

Open your browser console and change any setting (try changing the theme color or toggling a notification). Notice how **ALL 4 cards re-render** even though each card only uses a small piece of the context?

The issue:

1. **Single monolithic context** holds user, theme, notifications, and stats
2. **Any state change** creates a new context value object
3. **All consumers re-render** when context value reference changes, even if they don't use the changed data
4. **Functions recreated on every render** causing unstable references
5. **Scales terribly** as the app grows

This is one of the most common Context API mistakes. It feels natural to put related data together, but it kills performance.

## The Performance Impact

**With single context** (current implementation):

- Change theme → **4 components re-render** (user, theme, notifications, stats)
- Toggle notification → **4 components re-render**
- Refresh stats → **4 components re-render**
- Every state change → ALL consumers re-render

**With split contexts** (optimized):

- Change theme → **1 component re-renders** (only theme card)
- Toggle notification → **1 component re-renders** (only notifications card)
- Refresh stats → **1 component re-renders** (only stats card)
- Each change → Only relevant consumers re-render

## Current Implementation (Anti-Pattern)

In `application.tsx`:

```tsx
// ❌ Single context with EVERYTHING
const AppContext = createContext<AppContextValue | null>(null);

function AppProvider({ children }) {
  const [user] = useState<UserProfile>({
    /* ... */
  });
  const [theme, setTheme] = useState<ThemeSettings>({
    /* ... */
  });
  const [notifications, setNotifications] = useState<NotificationSettings>({
    /* ... */
  });
  const [stats, setStats] = useState<AppStats>({
    /* ... */
  });

  // ❌ Functions recreated on every render
  const updateTheme = (updates) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  };

  const updateNotifications = (updates) => {
    setNotifications((prev) => ({ ...prev, ...updates }));
  };

  // ❌ New object created on EVERY render
  const value = {
    user,
    theme,
    notifications,
    stats,
    updateTheme,
    updateNotifications,
    refreshStats,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function Dashboard() {
  // ❌ Gets ALL values, re-renders when ANY value changes
  const { user, theme, notifications, stats } = useAppContext();

  return (
    <>
      <UserProfileCard user={user} />
      <ThemeSettingsCard theme={theme} />
      <NotificationSettingsCard notifications={notifications} />
      <StatsCard stats={stats} />
    </>
  );
}
```

**Why this is bad**:

- UserProfileCard re-renders when theme changes (doesn't use theme!)
- ThemeSettingsCard re-renders when notifications change (doesn't use notifications!)
- StatsCard re-renders when theme changes (doesn't use theme!)
- **Every component re-renders on every context change**

## Solution 1: Split Contexts

<details>
<summary>Click to see split contexts solution</summary>

### Step 1: Create Separate Contexts

Create one context per concern:

In `contexts/user-context.tsx`:

```tsx
import { createContext, useContext } from 'react';
import type { UserProfile } from '../types';

const UserContext = createContext<UserProfile | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  // User rarely changes, so this is almost static
  const user: UserProfile = {
    id: 1,
    name: 'Jane Developer',
    email: 'jane@example.com',
    avatar: 'JD',
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}
```

In `contexts/theme-context.tsx`:

```tsx
import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { ThemeSettings } from '../types';

interface ThemeContextValue {
  theme: ThemeSettings;
  updateTheme: (updates: Partial<ThemeSettings>) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeSettings>({
    mode: 'light',
    primaryColor: '#3b82f6',
    fontSize: 'medium',
  });

  // ✅ Stable function reference
  const updateTheme = useCallback((updates: Partial<ThemeSettings>) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  }, []);

  // ✅ Memoize the context value
  const value = useMemo(() => ({ theme, updateTheme }), [theme, updateTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

In `contexts/notifications-context.tsx`:

```tsx
import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { NotificationSettings } from '../types';

interface NotificationsContextValue {
  notifications: NotificationSettings;
  updateNotifications: (updates: Partial<NotificationSettings>) => void;
}

const NotificationsContext = createContext<NotificationsContextValue | null>(null);

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: true,
    push: false,
    sms: false,
  });

  const updateNotifications = useCallback((updates: Partial<NotificationSettings>) => {
    setNotifications((prev) => ({ ...prev, ...updates }));
  }, []);

  const value = useMemo(
    () => ({ notifications, updateNotifications }),
    [notifications, updateNotifications],
  );

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationsProvider');
  }
  return context;
}
```

In `contexts/stats-context.tsx`:

```tsx
import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { AppStats } from '../types';

interface StatsContextValue {
  stats: AppStats;
  refreshStats: () => void;
}

const StatsContext = createContext<StatsContextValue | null>(null);

export function StatsProvider({ children }: { children: React.ReactNode }) {
  const [stats, setStats] = useState<AppStats>({
    pageViews: 12453,
    activeUsers: 342,
    lastUpdated: Date.now(),
  });

  const refreshStats = useCallback(() => {
    setStats({
      pageViews: Math.floor(Math.random() * 100000),
      activeUsers: Math.floor(Math.random() * 1000),
      lastUpdated: Date.now(),
    });
  }, []);

  const value = useMemo(() => ({ stats, refreshStats }), [stats, refreshStats]);

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>;
}

export function useStats() {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within StatsProvider');
  }
  return context;
}
```

### Step 2: Compose Providers

In `application.tsx`:

```tsx
import { Container } from '$components/container';
import { UserProvider } from './contexts/user-context';
import { ThemeProvider } from './contexts/theme-context';
import { NotificationsProvider } from './contexts/notifications-context';
import { StatsProvider } from './contexts/stats-context';
import { Dashboard } from './components/dashboard';

function Application() {
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationsProvider>
          <StatsProvider>
            <Container className="my-8 space-y-8">
              <section>
                <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Contextual
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                  Now with split contexts! Open your console and change any setting. Only the
                  relevant component re-renders.
                </p>
                <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    ✅ Split contexts: Only relevant consumers re-render
                  </p>
                </div>
              </section>

              <Dashboard />
            </Container>
          </StatsProvider>
        </NotificationsProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default Application;
```

### Step 3: Update Components to Use Specific Contexts

In `components/user-profile-card.tsx`:

```tsx
import { useUser } from '../contexts/user-context';

export function UserProfileCard() {
  const user = useUser(); // Only subscribes to user context
  console.log('👤 UserProfileCard rendered');

  return (
    <Card>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </Card>
  );
}
```

In `components/theme-settings-card.tsx`:

```tsx
import { useTheme } from '../contexts/theme-context';

export function ThemeSettingsCard() {
  const { theme, updateTheme } = useTheme(); // Only subscribes to theme context
  console.log('🎨 ThemeSettingsCard rendered');

  return (
    <Card>
      <button onClick={() => updateTheme({ primaryColor: '#ef4444' })}>Change Color</button>
    </Card>
  );
}
```

In `components/notification-settings-card.tsx`:

```tsx
import { useNotifications } from '../contexts/notifications-context';

export function NotificationSettingsCard() {
  const { notifications, updateNotifications } = useNotifications();
  console.log('🔔 NotificationSettingsCard rendered');

  return (
    <Card>
      <Checkbox
        checked={notifications.email}
        onChange={(e) => updateNotifications({ email: e.target.checked })}
      />
    </Card>
  );
}
```

In `components/stats-card.tsx`:

```tsx
import { useStats } from '../contexts/stats-context';

export function StatsCard() {
  const { stats, refreshStats } = useStats();
  console.log('📊 StatsCard rendered');

  return (
    <Card>
      <p>Page Views: {stats.pageViews}</p>
      <button onClick={refreshStats}>Refresh</button>
    </Card>
  );
}
```

### What Changed?

**Before (Single Context)**:

- One context with all data
- All components re-render on any change
- Unstable function references

**After (Split Contexts)**:

- Four separate contexts (user, theme, notifications, stats)
- Each component subscribes only to what it needs
- Only relevant components re-render
- Stable function references with useCallback
- Memoized context values

**Performance improvement**:

- Before: 4 components re-render per change
- After: 1 component re-renders per change
- **4x reduction in re-renders!**

</details>

## Solution 2: Memoize Context Values

<details>
<summary>Click to see memoization solution</summary>

Even with a single context, you can prevent unnecessary re-renders by memoizing the context value.

### The Problem with Object Literals

```tsx
// ❌ Bad - new object every render
function AppProvider({ children }) {
  const [theme, setTheme] = useState({
    /* ... */
  });

  const value = {
    // New object reference every render!
    theme,
    updateTheme: (updates) => {
      /* ... */
    }, // New function every render!
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
```

Every render creates a new `value` object, so React thinks the context changed, causing all consumers to re-render.

### Solution: useMemo + useCallback

```tsx
// ✅ Good - stable references
function AppProvider({ children }) {
  const [theme, setTheme] = useState({
    /* ... */
  });

  // Stable function reference
  const updateTheme = useCallback((updates: Partial<ThemeSettings>) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  }, []); // Empty deps - function never changes

  // Memoized context value
  const value = useMemo(
    () => ({
      theme,
      updateTheme,
    }),
    [theme, updateTheme],
  ); // Only changes when theme or updateTheme changes

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
```

**Key principles**:

1. **useCallback** for functions - ensures same function reference across renders
2. **useMemo** for context value - ensures same object reference unless dependencies change
3. **Functional updates** in state setters - allows empty dependency arrays

### Complete Example

```tsx
function AppProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState<UserProfile>({
    /* ... */
  });
  const [theme, setTheme] = useState<ThemeSettings>({
    /* ... */
  });
  const [notifications, setNotifications] = useState<NotificationSettings>({
    /* ... */
  });
  const [stats, setStats] = useState<AppStats>({
    /* ... */
  });

  // ✅ All functions stabilized with useCallback
  const updateTheme = useCallback((updates: Partial<ThemeSettings>) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  }, []);

  const updateNotifications = useCallback((updates: Partial<NotificationSettings>) => {
    setNotifications((prev) => ({ ...prev, ...updates }));
  }, []);

  const refreshStats = useCallback(() => {
    setStats({
      pageViews: Math.floor(Math.random() * 100000),
      activeUsers: Math.floor(Math.random() * 1000),
      lastUpdated: Date.now(),
    });
  }, []);

  // ✅ Memoized context value - only changes when state actually changes
  const value = useMemo(
    () => ({
      user,
      theme,
      notifications,
      stats,
      updateTheme,
      updateNotifications,
      refreshStats,
    }),
    [user, theme, notifications, stats, updateTheme, updateNotifications, refreshStats],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
```

**Limitation**: This still doesn't solve the fundamental problem. Changing theme still triggers all consumers to re-render because the context value object changed (theme changed). For true isolation, you need split contexts.

</details>

## Solution 3: Context + Component Composition

<details>
<summary>Click to see composition solution</summary>

Another pattern is to reduce context usage by using component composition instead.

### Pattern: Render Props

Instead of putting data in context, pass it through props via composition:

```tsx
// ❌ Context for everything
function Dashboard() {
  const { user, theme, notifications, stats } = useAppContext();

  return (
    <>
      <UserProfileCard user={user} />
      <ThemeSettingsCard theme={theme} />
      <NotificationSettingsCard notifications={notifications} />
      <StatsCard stats={stats} />
    </>
  );
}

// ✅ Composition - state at top level, pass as props
function Application() {
  const [theme, setTheme] = useState<ThemeSettings>({
    /* ... */
  });
  const [notifications, setNotifications] = useState<NotificationSettings>({
    /* ... */
  });
  const [stats, setStats] = useState<AppStats>({
    /* ... */
  });

  return (
    <Dashboard
      theme={theme}
      onUpdateTheme={setTheme}
      notifications={notifications}
      onUpdateNotifications={setNotifications}
      stats={stats}
      onRefreshStats={refreshStats}
    />
  );
}
```

**When to use**:

- Data doesn't need to be accessed deep in the tree
- You're okay with prop drilling through 1-2 levels
- You want explicit data flow

**When NOT to use**:

- Data accessed by many components at different depths
- Prop drilling becomes excessive (5+ levels)
- You need global application state

</details>

## Best Practices

### Split Contexts by Concern

**❌ Don't**: Put everything in one context

```tsx
const AppContext = createContext({ user, theme, auth, cart, settings, ... });
```

**✅ Do**: Separate contexts for independent concerns

```tsx
const UserContext = createContext(user);
const ThemeContext = createContext(theme);
const AuthContext = createContext(auth);
const CartContext = createContext(cart);
```

**Rule of thumb**: If two pieces of state **always change together**, they can share a context. If they change independently, split them.

### Memoize Context Values

**❌ Don't**: Create new objects in render

```tsx
<Context.Provider value={{ state, handler: () => {} }}>
```

**✅ Do**: Memoize values and callbacks

```tsx
const handler = useCallback(() => {}, []);
const value = useMemo(() => ({ state, handler }), [state, handler]);
<Context.Provider value={value}>
```

### Colocate Providers with Usage

**❌ Don't**: Put all providers at app root

```tsx
<App>
  <UserProvider>
    <ThemeProvider>
      <NotificationsProvider>
        <Router>  {/* Everything wrapped even if routes don't use it */}
```

**✅ Do**: Place providers close to where they're needed

```tsx
<App>
  <Router>
    <Route path="/dashboard">
      <NotificationsProvider>  {/* Only wraps dashboard */}
        <Dashboard />
      </NotificationsProvider>
    </Route>
```

### Use Separate Contexts for State and Actions

For complex state, split data and updaters:

```tsx
// ✅ Good - state and dispatch in separate contexts
const StateContext = createContext(state);
const DispatchContext = createContext(dispatch);

// Components that only need to dispatch don't re-render on state changes
function AddButton() {
  const dispatch = useContext(DispatchContext); // Won't re-render on state changes
  return <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>;
}
```

### Consider Alternatives to Context

Context isn't always the answer:

**State management libraries** for complex global state:

- Zustand (simple, fast)
- Redux Toolkit (robust, devtools)
- Jotai (atomic state)

**Props** for simple cases:

- 1-2 levels of drilling is fine
- Explicit and easy to understand

**Composition** to avoid prop drilling:

- Render props
- Component children
- Slots pattern

## Common Patterns

### Pattern 1: Split State and Dispatch

```tsx
const UserStateContext = createContext<User | null>(null);
const UserDispatchContext = createContext<Dispatch | null>(null);

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

// Components that only dispatch won't re-render
function useUserDispatch() {
  return useContext(UserDispatchContext);
}
```

### Pattern 2: Context Factory

Create contexts with a factory function:

```tsx
function createSimpleContext<T>(hookName: string) {
  const Context = createContext<T | null>(null);

  function Provider({ value, children }: { value: T; children: React.ReactNode }) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useValue() {
    const context = useContext(Context);
    if (!context) {
      throw new Error(`${hookName} must be used within its Provider`);
    }
    return context;
  }

  return [Provider, useValue] as const;
}

// Usage
const [ThemeProvider, useTheme] = createSimpleContext<ThemeSettings>('useTheme');
```

### Pattern 3: Context Selectors (Advanced)

For fine-grained subscriptions without splitting contexts:

```tsx
import { useSyncExternalStore } from 'react';

function createContextWithSelectors<T>(initialValue: T) {
  const Context = createContext<T>(initialValue);
  const subscribers = new Set<() => void>();

  function Provider({ value, children }: { value: T; children: React.ReactNode }) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useSelector<R>(selector: (state: T) => R): R {
    const context = useContext(Context);
    return useSyncExternalStore(
      (callback) => {
        subscribers.add(callback);
        return () => subscribers.delete(callback);
      },
      () => selector(context),
    );
  }

  return [Provider, useSelector] as const;
}
```

## Testing the Difference

### Before Optimization (Single Context)

1. Open browser console
2. Click "Refresh" on stats card
3. See console logs: **All 4 components re-render** 👤 🎨 🔔 📊
4. Change theme color
5. See console logs: **All 4 components re-render** 👤 🎨 🔔 📊
6. Toggle notification
7. See console logs: **All 4 components re-render** 👤 🎨 🔔 📊

### After Optimization (Split Contexts)

1. Open browser console
2. Click "Refresh" on stats card
3. See console log: **Only StatsCard re-renders** 📊
4. Change theme color
5. See console log: **Only ThemeSettingsCard re-renders** 🎨
6. Toggle notification
7. See console log: **Only NotificationSettingsCard re-renders** 🔔

### React DevTools Profiler

**Before**:

- Any change → 4-5 components in the flame graph
- Total render time: ~8ms

**After**:

- Any change → 1-2 components in the flame graph
- Total render time: ~2ms
- **4x fewer re-renders, 4x faster**

## When to Use Context

### ✅ Good Use Cases

**Theme/locale** (accessed by many components):

```tsx
const ThemeContext = createContext<Theme>(defaultTheme);
```

**Authentication** (needed throughout app):

```tsx
const AuthContext = createContext<AuthState>(null);
```

**Feature flags** (read-only, rarely changes):

```tsx
const FeatureFlagsContext = createContext<Flags>({});
```

**Current user** (rarely changes):

```tsx
const CurrentUserContext = createContext<User | null>(null);
```

### ❌ Don't Use Context For

**Form state** (use local state):

```tsx
// ❌ Don't
const FormContext = createContext<FormData>(null);

// ✅ Do
const [formData, setFormData] = useState({});
```

**Frequently updating data** (use state management library):

```tsx
// ❌ Context with rapidly changing data
const RealtimeDataContext = createContext<Data>(null);

// ✅ Use Zustand/Redux/etc for high-frequency updates
```

**Data that only 1-2 components need** (use props):

```tsx
// ❌ Context for narrow usage
const ModalDataContext = createContext<Data>(null);

// ✅ Props for limited scope
<Modal data={data} />;
```

## Performance Checklist

Before optimizing:

- ✅ Profile with React DevTools to see which components re-render
- ✅ Check if all consumers actually need all context data
- ✅ Measure the actual performance impact

When optimizing:

- ✅ Split contexts by concern (independent data = separate contexts)
- ✅ Memoize context values with useMemo
- ✅ Stabilize functions with useCallback
- ✅ Use functional state updates to minimize dependencies

After optimizing:

- ✅ Verify only relevant components re-render
- ✅ Check that functions have stable references
- ✅ Profile again to confirm improvement

## Key Takeaways

1. **Single monolithic context** causes all consumers to re-render on any change

2. **Split contexts by concern** - independent data should be in separate contexts

3. **Always memoize context values**:

   ```tsx
   const value = useMemo(() => ({ state, handler }), [state, handler]);
   ```

4. **Stabilize functions with useCallback**:

   ```tsx
   const handler = useCallback(() => {
     /* ... */
   }, []);
   ```

5. **Context isn't always the answer** - consider props, composition, or state management libraries

6. **Test with console.logs and React DevTools Profiler** to verify optimizations work

## Learning Resources

- [React docs: useContext](https://react.dev/reference/react/useContext)
- [React docs: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Kent C. Dodds: How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [React docs: Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
