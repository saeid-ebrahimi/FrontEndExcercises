# Effect Essentials

A React application demonstrating common `useEffect` pitfalls and their solutions. This lab shows the three most frequent useEffect mistakes that cause bugs in production React applications.

## The Problem

`useEffect` is one of the most misunderstood React hooks. It's easy to create subtle bugs that are hard to debug:

1. **Missing dependencies** - Effect doesn't re-run when it should
2. **Race conditions** - Async requests return in unpredictable order
3. **Memory leaks** - Setting state on unmounted components

These bugs often appear only in production, making them particularly dangerous.

## Current Implementation (4 Progressive Examples)

This lab demonstrates each problem with an interactive user profile viewer. Each tab shows a different implementation:

### Tab 1: Missing Dependencies ❌

```tsx
function Version1MissingDeps() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);

  // ❌ PROBLEM: Missing userId from dependency array
  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUser(userId); // Uses userId
      setUser(userData);
    };

    loadUser();
  }, []); // ❌ Empty array - effect ignores userId changes!

  return (
    <div>
      <UserSelector selectedUserId={userId} onSelectUser={setUserId} />
      <UserProfileCard user={user} />
    </div>
  );
}
```

**What happens:**

- Effect runs only once on mount
- When you click different users, `userId` changes but effect doesn't re-run
- UI always shows the first user, no matter what you click
- Console shows only one fetch event

### Tab 2: Race Condition ⚠️

```tsx
function Version2RaceCondition() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);

  // ✅ Dependencies correct, ❌ but no cleanup
  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUser(userId); // Random delay 500-2000ms
      setUser(userData); // ⚠️ This runs even if userId has changed!
    };

    loadUser();
  }, [userId]); // ✅ Dependency is correct, but no cleanup!

  return (
    <div>
      <UserSelector selectedUserId={userId} onSelectUser={setUserId} />
      <UserProfileCard user={user} selectedUserId={userId} />
    </div>
  );
}
```

**What happens:**

- Effect re-runs correctly when `userId` changes ✅
- But if you rapidly click User 1 → User 2 → User 3, multiple requests are in-flight
- Due to random delays, User 2's request might complete last
- You selected User 3, but see User 2's data (race condition!)
- The red border highlights the mismatch

**Why it happens:**

Each fetch has a random delay (500-2000ms). Imagine this sequence:

1. Click User 1 → Request starts (will take 1800ms)
2. Click User 2 → Request starts (will take 600ms)
3. User 2 completes first (600ms) → Shows User 2 ✅
4. User 1 completes later (1800ms) → Shows User 1 ❌ (but we selected User 2!)

### Tab 3: No Cleanup (Memory Leak) ⚠️

```tsx
function Version3NoCleanup() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUser(userId);
      // ❌ PROBLEM: Setting state even if component unmounted
      setUser(userData);
      setLoading(false);
    };

    loadUser();
    // ❌ No cleanup function!
  }, [userId]);

  if (!show) {
    return <div>Component unmounted</div>;
  }

  return (
    <div>
      <button onClick={() => setShow(false)}>Unmount Component</button>
      <UserSelector selectedUserId={userId} onSelectUser={setUserId} />
      <UserProfileCard user={user} />
    </div>
  );
}
```

**What happens:**

1. Select a user (starts a fetch)
2. Click "Unmount Component" (component removed from DOM)
3. Fetch completes and tries to call `setUser()` and `setLoading()`
4. React warning in console: "Can't perform a React state update on an unmounted component"

**Why it's bad:**

- Memory leak (the async operation holds references)
- Console warnings clutter your logs
- In complex apps, can cause crashes or weird behavior

### Tab 4: Fixed ✅

<details>
<summary>Click to see the solution</summary>

```tsx
function Version4Fixed() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ✅ Cancellation flag
    let cancelled = false;

    const loadUser = async () => {
      setLoading(true);
      console.log(`→ Fetching user ${userId}...`);

      try {
        const userData = await fetchUser(userId);

        // ✅ Check if still relevant before updating state
        if (!cancelled) {
          setUser(userData);
          console.log(`✓ Received user ${userId}: ${userData.name}`);
        } else {
          console.log(`✗ Cancelled fetch for user ${userId} (cleanup)`);
        }
      } catch (error) {
        if (!cancelled) {
          console.error(`⚠ Failed to fetch user ${userId}`);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadUser();

    // ✅ Cleanup function
    return () => {
      cancelled = true;
    };
  }, [userId]); // ✅ Correct dependencies + cleanup

  return (
    <div>
      <UserSelector selectedUserId={userId} onSelectUser={setUserId} />
      <UserProfileCard user={user} loading={loading} selectedUserId={userId} />
    </div>
  );
}
```

**What changed:**

1. **Cancellation flag**: `let cancelled = false`
2. **Check before setState**: `if (!cancelled) { setUser(userData); }`
3. **Cleanup function**: `return () => { cancelled = true; }`

**How it works:**

- When `userId` changes, React calls the cleanup function
- Cleanup sets `cancelled = true`
- Old fetch completes, but sees `cancelled === true`, so doesn't update state
- Only the latest fetch updates state
- Console shows cancelled requests

**Try it:**

- Rapidly click between users
- Console shows multiple fetches, but only the latest one sets state
- No more race conditions or stale data!

</details>

## Understanding useEffect

### Mental Model

```tsx
useEffect(() => {
  // This runs AFTER the component renders
  console.log('Effect runs');

  return () => {
    // This runs BEFORE the effect runs again, or on unmount
    console.log('Cleanup runs');
  };
}, [dependency]);
```

**Order of operations:**

1. Component renders
2. React updates the DOM
3. Browser paints the screen
4. Effect runs
5. (If dependency changes) Cleanup runs
6. (If dependency changes) Effect runs again

### Dependency Array Rules

```tsx
// ❌ Missing dependencies - effect has stale closure
useEffect(() => {
  console.log(userId); // Uses userId
}, []); // But doesn't list it!

// ✅ All dependencies listed
useEffect(() => {
  console.log(userId);
}, [userId]); // ✅ Correct

// ❌ Unnecessary dependencies cause too many re-runs
useEffect(() => {
  fetchUser(userId);
}, [userId, user, loading, error]); // Only userId is needed!

// ✅ Only necessary dependencies
useEffect(() => {
  fetchUser(userId);
}, [userId]); // ✅ Correct
```

**Rule of thumb:** If your effect uses a value from props or state, it must be in the dependency array.

**Exception:** `setState` functions from `useState` are stable and don't need to be listed.

```tsx
const [user, setUser] = useState(null);

useEffect(() => {
  fetchUser(userId).then(setUser);
  // ✅ setUser doesn't need to be in dependencies
}, [userId]);
```

## Problem 1: Missing Dependencies

### The Bug

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, []); // ❌ Missing userId

  return <div>{user?.name}</div>;
}
```

**What happens:**

- Effect runs once on mount with initial `userId`
- `userId` prop changes, but effect doesn't re-run
- UI shows stale data

### The Fix

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // ✅ Include userId

  return <div>{user?.name}</div>;
}
```

### Why It Happens

JavaScript closures! The effect "closes over" the initial value of `userId`:

```tsx
// On first render, userId = 1
useEffect(() => {
  fetchUser(1).then(setUser); // Closure captures userId = 1
}, []); // Never re-runs

// On second render, userId = 2, but effect doesn't re-run!
```

### How to Catch It

1. **ESLint rule**: `react-hooks/exhaustive-deps` warns about missing dependencies
2. **Enable it**: Most setups have this rule by default
3. **Don't ignore it**: If ESLint warns, fix it (don't use `// eslint-disable-next-line`)

## Problem 2: Race Conditions

### The Bug

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser); // No cleanup!
  }, [userId]);

  return <div>{user?.name}</div>;
}
```

**Scenario:**

1. Render with `userId = 1` → Fetch starts (will take 2000ms)
2. Render with `userId = 2` → Fetch starts (will take 500ms)
3. User 2 fetch completes (500ms) → `setUser(user2)` ✅
4. User 1 fetch completes (2000ms) → `setUser(user1)` ❌ (but we wanted user 2!)

### The Fix

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchUser(userId).then((userData) => {
      if (!cancelled) {
        setUser(userData);
      }
    });

    return () => {
      cancelled = true; // Cleanup: ignore old fetches
    };
  }, [userId]);

  return <div>{user?.name}</div>;
}
```

### Alternative: AbortController

For `fetch` API, use `AbortController`:

```tsx
useEffect(() => {
  const controller = new AbortController();

  fetch(`/api/users/${userId}`, { signal: controller.signal })
    .then((res) => res.json())
    .then(setUser)
    .catch((err) => {
      if (err.name === 'AbortError') {
        console.log('Fetch cancelled');
      }
    });

  return () => {
    controller.abort(); // Actually cancels the network request
  };
}, [userId]);
```

**Benefits of AbortController:**

- Actually cancels the network request (saves bandwidth)
- Standard browser API
- Works with any fetch-based library

## Problem 3: Memory Leaks

### The Bug

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser); // No cleanup!
  }, [userId]);

  return <div>{user?.name}</div>;
}

// If component unmounts while fetch is pending, setUser runs on unmounted component!
```

### The Fix

Same as race condition fix - use a cancellation flag:

```tsx
useEffect(() => {
  let cancelled = false;

  fetchUser(userId).then((userData) => {
    if (!cancelled) {
      // ✅ Only update if still mounted
      setUser(userData);
    }
  });

  return () => {
    cancelled = true; // ✅ Prevent setState on unmount
  };
}, [userId]);
```

### Why It Matters

In React 18+ Strict Mode, components mount → unmount → mount again in development. Without cleanup, you'll see:

- Double fetches
- Console warnings
- Stale state updates

In production, users navigating quickly can trigger the same issues.

## When NOT to Use useEffect

### Transforming Data for Rendering

```tsx
// ❌ Bad - unnecessary effect
function TodoList({ todos }) {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos.filter((t) => !t.completed));
  }, [todos]);

  return <ul>{filteredTodos.map(...)}</ul>;
}

// ✅ Good - calculate during render
function TodoList({ todos }) {
  const filteredTodos = todos.filter((t) => !t.completed);

  return <ul>{filteredTodos.map(...)}</ul>;
}
```

**Rule:** If you can calculate something during render, don't use useEffect.

### Handling User Events

```tsx
// ❌ Bad - effect for event handling
function Form() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      sendToAnalytics('form_submitted');
    }
  }, [submitted]);

  return <form onSubmit={() => setSubmitted(true)}>...</form>;
}

// ✅ Good - handle in event handler
function Form() {
  const handleSubmit = () => {
    sendToAnalytics('form_submitted');
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Rule:** If something happens in response to a user action, handle it in the event handler.

### Initializing State

```tsx
// ❌ Bad - effect for initial state
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getInitialUser(userId));
  }, []);

  return <div>{user?.name}</div>;
}

// ✅ Good - initialize state directly
function UserProfile({ userId }) {
  const [user, setUser] = useState(() => getInitialUser(userId));

  return <div>{user?.name}</div>;
}
```

**Rule:** Use the lazy initializer pattern for expensive initial state.

## Common Patterns

### Pattern 1: Fetching Data

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUser(userId);

        if (!cancelled) {
          setUser(userData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return <div>{user?.name}</div>;
}
```

### Pattern 2: Subscribing to External Store

```tsx
function useWebSocket(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    // ✅ Cleanup: close connection
    return () => {
      socket.close();
    };
  }, [url]);

  return data;
}
```

### Pattern 3: Setting Up Event Listeners

```tsx
function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === targetKey) {
        setKeyPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // ✅ Cleanup: remove listeners
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKey]);

  return keyPressed;
}
```

### Pattern 4: Timers

```tsx
function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  // Remember latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up interval
  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => savedCallback.current(), delay);

    // ✅ Cleanup: clear interval
    return () => clearInterval(id);
  }, [delay]);
}
```

## Debugging useEffect

### Console Logging

```tsx
useEffect(() => {
  console.log('Effect running', { userId, user });

  return () => {
    console.log('Cleanup running', { userId });
  };
}, [userId]);
```

**Look for:**

- Effect running when it shouldn't (check dependencies)
- Effect not running when it should (missing dependencies)
- Cleanup not running (missing return statement)

### React DevTools

1. Open React DevTools
2. Go to Profiler tab
3. Click "Record"
4. Interact with your component
5. Look for unexpected re-renders

### Strict Mode

React 18+ Strict Mode intentionally double-invokes effects in development:

```tsx
// In development with Strict Mode:
// 1. Mount → Effect runs
// 2. Unmount → Cleanup runs
// 3. Mount → Effect runs again

// In production:
// 1. Mount → Effect runs
```

**Why?** To catch bugs where you forget cleanup. If your effect breaks when run twice, you need cleanup.

## Testing useEffect

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserProfile from './UserProfile';

test('loads and displays user', async () => {
  render(<UserProfile userId={1} />);

  // Should show loading initially
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Should show user after fetch completes
  await waitFor(() => {
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
  });
});

test('handles race conditions', async () => {
  const { rerender } = render(<UserProfile userId={1} />);

  // Immediately change userId before first fetch completes
  rerender(<UserProfile userId={2} />);

  // Should show user 2, not user 1
  await waitFor(() => {
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
  });
  expect(screen.queryByText('Leanne Graham')).not.toBeInTheDocument();
});
```

## Key Takeaways

1. **Always include dependencies**
   - Use ESLint rule `react-hooks/exhaustive-deps`
   - If you use it, list it

2. **Always clean up async operations**
   - Use cancellation flag: `let cancelled = false`
   - Or use `AbortController` for fetch
   - Return cleanup function: `return () => { cancelled = true }`

3. **Check before setState**
   - `if (!cancelled) { setState(...) }`
   - Prevents race conditions and memory leaks

4. **Don't overuse useEffect**
   - Calculate during render when possible
   - Handle events in event handlers
   - Use lazy initializers for initial state

5. **Test your effects**
   - Especially cleanup behavior
   - Test rapid state changes (race conditions)
   - Test unmounting during async operations

## Complete Working Example

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const userData = await fetchUser(userId);

        if (!cancelled) {
          setUser(userData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [userId]); // ✅ Correct dependencies + cleanup

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

## Learning Resources

- [React docs: useEffect](https://react.dev/reference/react/useEffect)
- [React docs: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [React docs: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [Overreacted: A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
