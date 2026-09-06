# Suspenseful

A React application demonstrating modern data fetching with **Suspense boundaries** and the **`use()` hook** (React 19). This lab shows how to create responsive UIs that progressively load data instead of waiting for everything at once.

## The Problem

Watch the current implementation load. You see a spinner for 3-4 seconds, then suddenly everything appears at once. This feels slow and unresponsive because:

1. **Waterfall loading**: User info loads first (0.8s), then posts (1.2s), then todos (1.5s)
2. **All-or-nothing**: Nothing shows until **everything** has loaded (total: ~3.5s)
3. **Blocking**: Fast data (user info) waits for slow data (todos)
4. **Complex state management**: Multiple `useState` + `useEffect` + loading flags
5. **Poor UX**: User stares at a spinner instead of seeing partial content

## The Performance Impact

**Traditional approach** (current implementation):

- Initial render: Spinner
- After 3.5s: Everything appears at once
- User experience: Feels slow and frustrating

**Suspense + use() approach**:

- Initial render: User info skeleton
- After 0.8s: User info appears (still loading posts/todos)
- After 2.0s: Posts appear (still loading todos)
- After 3.5s: Todos appear
- User experience: Feels fast and responsive (progressive loading)

The total time is the same, but the **perceived performance** is much better because content appears progressively.

## Current Implementation (Traditional)

In `application.tsx`:

```tsx
function Application() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Sequential loading - very slow!
        const userData = await fetchUser(USER_ID);
        setUser(userData);

        const userPosts = await fetchUserPosts(USER_ID);
        setPosts(userPosts);

        const userTodos = await fetchUserTodos(USER_ID);
        setTodos(userTodos);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <Spinner />; // Blank screen until EVERYTHING loads
  }

  return (
    <>
      <UserInfo user={user} />
      <UserPosts posts={posts} />
      <UserTodos todos={todos} />
    </>
  );
}
```

**Problems**:

- ❌ 14 lines of boilerplate for state management
- ❌ User sees nothing for 3.5 seconds
- ❌ Fast data waits for slow data
- ❌ Complex error handling needed
- ❌ Loading states are all-or-nothing

## Solution: Suspense + use()

<details>
<summary>Click to see the solution</summary>

### Understanding the use() Hook

The `use()` hook (new in React 19) can **unwrap promises**. When you call `use(promise)`:

1. React suspends the component
2. Closest `<Suspense>` boundary shows its fallback
3. Promise resolves
4. Component re-renders with the data

This is **much simpler** than `useEffect` + `useState`:

```tsx
// ❌ Traditional (verbose)
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchData().then((result) => {
    setData(result);
    setLoading(false);
  });
}, []);

if (loading) return <Spinner />;

// ✅ With use() (clean!)
const data = use(fetchData());
```

### Step 1: Create Data-Fetching Components

In `components/user-info.tsx`:

```tsx
import { use } from 'react';
import { Card } from '$components/card';
import type { User } from '../types';

interface UserInfoProps {
  userPromise: Promise<User>;
}

export function UserInfo({ userPromise }: UserInfoProps) {
  // use() unwraps the promise - component suspends while loading
  const user = use(userPromise);

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
        User Information
      </h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-200">
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {user.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">@{user.username}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-slate-600 dark:text-slate-400">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      </div>
    </Card>
  );
}
```

In `components/user-posts.tsx`:

```tsx
import { use } from 'react';
import { Card } from '$components/card';
import type { Post } from '../types';

interface UserPostsProps {
  postsPromise: Promise<Post[]>;
}

export function UserPosts({ postsPromise }: UserPostsProps) {
  const posts = use(postsPromise);

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
        Recent Posts
      </h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
          >
            <h3 className="mb-1 font-medium text-slate-900 dark:text-slate-100">{post.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {post.body.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
```

In `components/user-todos.tsx`:

```tsx
import { use } from 'react';
import { Card } from '$components/card';
import type { Todo } from '../types';

interface UserTodosProps {
  todosPromise: Promise<Todo[]>;
}

export function UserTodos({ todosPromise }: UserTodosProps) {
  const todos = use(todosPromise);

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">Todo List</h2>
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center space-x-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
          >
            <input type="checkbox" checked={todo.completed} readOnly className="h-5 w-5 rounded" />
            <span
              className={`flex-1 ${
                todo.completed
                  ? 'text-slate-500 line-through dark:text-slate-500'
                  : 'text-slate-900 dark:text-slate-100'
              }`}
            >
              {todo.title}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
```

### Step 2: Create Promises (Not in Component!)

```tsx
import {
  createUserPromise,
  createUserPostsPromise,
  createUserTodosPromise,
} from './utilities/data-fetchers';

const USER_ID = 1;

// ✅ Create promises OUTSIDE component
// This ensures they're not recreated on every render
const userPromise = createUserPromise(USER_ID);
const postsPromise = createUserPostsPromise(USER_ID);
const todosPromise = createUserTodosPromise(USER_ID);
```

**IMPORTANT**: Create promises **outside** the component or in a `useMemo`. If you create them inside the component body, they'll be recreated on every render, causing infinite loops!

### Step 3: Wrap in Suspense Boundaries

In `application.tsx`:

```tsx
import { Suspense } from 'react';
import { Container } from '$components/container';
import { UserInfo } from './components/user-info';
import { UserPosts } from './components/user-posts';
import { UserTodos } from './components/user-todos';
import { UserInfoSkeleton } from './components/user-info-skeleton';
import { PostsSkeleton } from './components/posts-skeleton';
import { TodosSkeleton } from './components/todos-skeleton';
import {
  createUserPromise,
  createUserPostsPromise,
  createUserTodosPromise,
} from './utilities/data-fetchers';

const USER_ID = 1;

// Create promises outside component
const userPromise = createUserPromise(USER_ID);
const postsPromise = createUserPostsPromise(USER_ID);
const todosPromise = createUserTodosPromise(USER_ID);

function Application() {
  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Suspenseful</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Suspense + use() pattern: Each section loads independently and shows as soon as ready.
          Notice how user info appears first, then posts, then todos. Much better UX!
        </p>
        <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            ✅ Progressive loading: Show content as it becomes available
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Each section has its own Suspense boundary */}
        <section>
          <Suspense fallback={<UserInfoSkeleton />}>
            <UserInfo userPromise={userPromise} />
          </Suspense>
        </section>

        <section>
          <Suspense fallback={<PostsSkeleton />}>
            <UserPosts postsPromise={postsPromise} />
          </Suspense>
        </section>

        <section className="lg:col-span-2">
          <Suspense fallback={<TodosSkeleton />}>
            <UserTodos todosPromise={todosPromise} />
          </Suspense>
        </section>
      </div>

      <section className="rounded-md bg-slate-100 p-6 dark:bg-slate-800">
        <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          The Benefits
        </h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li>✅ User sees skeletons immediately (not a blank screen)</li>
          <li>✅ Each section appears as soon as its data is ready</li>
          <li>✅ Fast data doesn&apos;t wait for slow data</li>
          <li>✅ No complex state management or useEffect</li>
          <li>✅ Cleaner, more declarative code</li>
        </ul>
      </section>
    </Container>
  );
}

export default Application;
```

### What Changed?

**Before (Traditional)**:

- `useState` + `useEffect` + loading flags (14 lines)
- All-or-nothing loading (spinner until everything loads)
- Complex error handling
- Sequential loading (waterfall)

**After (Suspense + use())**:

- `use()` to unwrap promises (1 line per section)
- Progressive loading (each section independent)
- Automatic error boundaries
- Parallel loading (all start together)

</details>

## Key Concepts

### The use() Hook

```tsx
// Unwraps a promise
const data = use(dataPromise);

// Component suspends while promise is pending
// Shows Suspense fallback
// Re-renders when promise resolves
```

**What makes it special**:

- ✅ Simpler than `useEffect` + `useState`
- ✅ Works with Suspense for better UX
- ✅ Automatic error boundaries
- ✅ Can be called conditionally (unlike hooks!)

### Suspense Boundaries

```tsx
<Suspense fallback={<Skeleton />}>
  <ComponentThatSuspends />
</Suspense>
```

**How it works**:

- Child component calls `use()` on a pending promise
- React "throws" the promise up to nearest Suspense
- Suspense catches it and shows the fallback
- When promise resolves, child re-renders with data

### Strategic Boundary Placement

**Single boundary (all-or-nothing)**:

```tsx
<Suspense fallback={<Loading />}>
  <UserInfo userPromise={userPromise} />
  <UserPosts postsPromise={postsPromise} />
  <UserTodos todosPromise={todosPromise} />
</Suspense>
```

Waits for ALL three promises before showing anything.

**Multiple boundaries (progressive)**:

```tsx
<Suspense fallback={<UserSkeleton />}>
  <UserInfo userPromise={userPromise} />
</Suspense>

<Suspense fallback={<PostsSkeleton />}>
  <UserPosts postsPromise={postsPromise} />
</Suspense>

<Suspense fallback={<TodosSkeleton />}>
  <UserTodos todosPromise={todosPromise} />
</Suspense>
```

Each section appears as soon as its data is ready.

## Common Patterns

### Pattern 1: Parallel Data Fetching

Start all fetches immediately, don't wait:

```tsx
// ✅ Good - all start in parallel
const userPromise = fetchUser(id);
const postsPromise = fetchPosts(id);
const todosPromise = fetchTodos(id);

// ❌ Bad - sequential (waterfall)
const user = use(fetchUser(id));
const posts = use(fetchPosts(user.id)); // Waits for user first!
```

### Pattern 2: Promise Creation Outside Component

```tsx
// ✅ Good - promise created once
const dataPromise = fetchData();

function Component() {
  const data = use(dataPromise);
  return <div>{data}</div>;
}

// ❌ Bad - promise recreated every render (infinite loop!)
function Component() {
  const data = use(fetchData()); // New promise every render!
  return <div>{data}</div>;
}
```

### Pattern 3: Conditional use()

Unlike hooks, `use()` can be called conditionally:

```tsx
function Component({ dataPromise, useCache }) {
  // ✅ This is allowed with use()!
  const data = useCache ? getCachedData() : use(dataPromise);

  return <div>{data}</div>;
}

// ❌ Can't do this with useState!
function Component({ dataPromise, useCache }) {
  if (useCache) {
    return getCachedData(); // Early return
  }
  const [data] = useState(); // ERROR: Conditional hook!
}
```

### Pattern 4: Nested Suspense for Dependent Data

```tsx
<Suspense fallback={<UserSkeleton />}>
  <User userPromise={userPromise} />
  {/* Posts depend on user, but are in nested Suspense */}
  <Suspense fallback={<PostsSkeleton />}>
    <UserPosts userPromise={userPromise} />
  </Suspense>
</Suspense>
```

### Pattern 5: Error Boundaries

Combine with error boundaries for robust error handling:

```tsx
<ErrorBoundary fallback={<ErrorMessage />}>
  <Suspense fallback={<Loading />}>
    <DataComponent dataPromise={dataPromise} />
  </Suspense>
</ErrorBoundary>
```

## Comparison: Traditional vs Suspense

### Traditional Loading States

```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [userData, postsData] = await Promise.all([fetchUser(userId), fetchPosts(userId)]);
        setUser(userData);
        setPosts(postsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <>
      <UserInfo user={user} />
      <UserPosts posts={posts} />
    </>
  );
}
```

**20 lines**, multiple states, complex logic.

### With Suspense + use()

```tsx
const userPromise = fetchUser(userId);
const postsPromise = fetchPosts(userId);

function UserProfile() {
  return (
    <>
      <Suspense fallback={<UserSkeleton />}>
        <UserInfo userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<PostsSkeleton />}>
        <UserPosts postsPromise={postsPromise} />
      </Suspense>
    </>
  );
}

function UserInfo({ userPromise }) {
  const user = use(userPromise);
  return <div>{user.name}</div>;
}

function UserPosts({ postsPromise }) {
  const posts = use(postsPromise);
  return posts.map((post) => <Post key={post.id} {...post} />);
}
```

**~15 lines total**, declarative, clean separation.

## When to Use Suspense + use()

### ✅ Perfect For:

**Multiple independent data sources**:

```tsx
// Each loads independently
<Suspense fallback={<UserSkeleton />}>
  <UserInfo userPromise={userPromise} />
</Suspense>
<Suspense fallback={<PostsSkeleton />}>
  <UserPosts postsPromise={postsPromise} />
</Suspense>
```

**Progressive content loading**:

```tsx
// Show fast data first, slow data later
<Suspense fallback={<HeaderSkeleton />}>
  <Header dataPromise={fastPromise} />
</Suspense>
<Suspense fallback={<ContentSkeleton />}>
  <Content dataPromise={slowPromise} />
</Suspense>
```

**Streaming server-side rendering (SSR)**:

- Server sends HTML in chunks as data loads
- User sees content progressively
- No waiting for all data server-side

### ❌ Not Ideal For:

**Form state** (use `useState` instead):

```tsx
// ❌ Don't use Suspense for form inputs
const [email, setEmail] = useState('');
```

**Mutations** (use optimistic updates):

```tsx
// ❌ Don't suspend on POST/PUT/DELETE
// ✅ Use useOptimistic or useTransition instead
```

**Single slow data source with no progressive loading**:

```tsx
// If there's nothing to show while loading, traditional might be simpler
if (loading) return <Spinner />;
```

## Testing the Difference

### Traditional Approach

1. Refresh page
2. See spinner for 3-4 seconds
3. Everything appears at once
4. Feels slow

### Suspense + use() Approach

1. Refresh page
2. See user info skeleton immediately
3. After ~0.8s, user info appears
4. After ~2s, posts appear
5. After ~3.5s, todos appear
6. Feels fast and responsive (progressive loading)

The total time is the same, but perceived performance is much better!

## Common Pitfalls

### Pitfall 1: Creating Promises Inside Component

```tsx
// ❌ Infinite loop - new promise every render!
function Component() {
  const data = use(fetchData()); // New promise created each render
  return <div>{data}</div>;
}

// ✅ Create promise outside
const dataPromise = fetchData();
function Component() {
  const data = use(dataPromise);
  return <div>{data}</div>;
}

// ✅ Or use useMemo
function Component({ id }) {
  const dataPromise = useMemo(() => fetchData(id), [id]);
  const data = use(dataPromise);
  return <div>{data}</div>;
}
```

### Pitfall 2: Forgetting Suspense Boundary

```tsx
// ❌ Error: no Suspense boundary
function App() {
  return <UserInfo userPromise={userPromise} />;
}

// ✅ Must wrap in Suspense
function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <UserInfo userPromise={userPromise} />
    </Suspense>
  );
}
```

### Pitfall 3: Sequential Instead of Parallel

```tsx
// ❌ Waterfall - slow!
function Component() {
  const user = use(fetchUser());
  const posts = use(fetchPosts(user.id)); // Waits for user!
  return <div>...</div>;
}

// ✅ Parallel - fast!
const userPromise = fetchUser();
const postsPromise = fetchPosts(userId); // Starts immediately

function Component() {
  const user = use(userPromise);
  const posts = use(postsPromise);
  return <div>...</div>;
}
```

### Pitfall 4: Too Few Suspense Boundaries

```tsx
// ❌ Single boundary - waits for slowest
<Suspense fallback={<Loading />}>
  <FastComponent dataPromise={fastPromise} />
  <SlowComponent dataPromise={slowPromise} />
</Suspense>

// ✅ Separate boundaries - progressive loading
<Suspense fallback={<FastSkeleton />}>
  <FastComponent dataPromise={fastPromise} />
</Suspense>
<Suspense fallback={<SlowSkeleton />}>
  <SlowComponent dataPromise={slowPromise} />
</Suspense>
```

## Performance Checklist

Before implementing:

- ✅ Identify independent data sources
- ✅ Determine which data is fast vs slow
- ✅ Decide where to place Suspense boundaries
- ✅ Create skeleton/loading components

While implementing:

- ✅ Create promises outside components (or use useMemo)
- ✅ Start all fetches in parallel
- ✅ Wrap each section in appropriate Suspense boundary
- ✅ Use meaningful loading fallbacks (skeletons, not spinners)

After implementing:

- ✅ Test on slow connection (DevTools throttling)
- ✅ Verify progressive loading works
- ✅ Check that fast data appears before slow data
- ✅ Measure perceived performance improvement

## Key Takeaways

1. **use() hook unwraps promises** - simpler than useEffect + useState

2. **Suspense enables progressive loading** - show content as it becomes available

3. **Strategic boundary placement matters**:
   - Multiple boundaries = progressive loading
   - Single boundary = all-or-nothing

4. **Create promises outside components** - or use useMemo to avoid infinite loops

5. **Start fetches in parallel** - don't create waterfalls

6. **Better perceived performance** - users see content sooner even if total time is same

## Learning Resources

- [React docs: use](https://react.dev/reference/react/use)
- [React docs: Suspense](https://react.dev/reference/react/Suspense)
- [Suspense for Data Fetching](https://react.dev/blog/2022/03/29/react-v18#suspense-in-data-frameworks)
- [Building Great User Experiences with Concurrent Mode](https://react.dev/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense)
