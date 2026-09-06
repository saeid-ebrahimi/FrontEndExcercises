# Anti-Social Network

A React application for creating and deleting posts. This lab demonstrates using `useOptimistic` to create a responsive UI that doesn't wait for server responses.

## The Problem

Try creating a post or deleting one. Notice how the UI feels sluggish? That's because every action:

1. Calls the API and **waits** for the response
2. Only updates the UI **after** receiving the response
3. Provides no visual feedback during the network request
4. Makes users wait even though we can predict what will happen

On a slow network, this creates a frustrating experience. Users expect immediate feedback, not waiting for servers to respond.

## Lab Exercise

Your task is to implement optimistic updates using `useOptimistic`. The key learning here is that **you can show users the result immediately while the server processes the request in the background**.

## Current Implementation (Slow)

```tsx
function Application() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCreatePost = async (formData: PostFormData) => {
    // Wait for server response before showing the new post
    const newPost = await createPost({
      title: formData.title,
      body: formData.body,
      userId: CURRENT_USER_ID as any,
    });

    // Only update UI after response arrives
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleDeletePost = async (id: number) => {
    // Wait for server response before removing the post
    await removePost(id);

    // Only update UI after response arrives
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <>
      <PostForm onSubmit={handleCreatePost} />
      <PostList posts={posts} onDeletePost={handleDeletePost} />
    </>
  );
}
```

## Solution: Using useOptimistic

<details>
<summary>Click to see the solution</summary>

### Implementation

```tsx
import { useState, useEffect, useOptimistic } from 'react';
import { Container } from '$components/container';
import { Alert } from '$components/alert';
import { PostForm } from './components/post-form';
import { PostList } from './components/post-list';
import { createPost, removePost, listPosts } from '$/common/api';
import type { Post, PostFormData, OptimisticPost } from './types';

const CURRENT_USER_ID = 1;

function Application() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Create optimistic state based on actual posts
  const [optimisticPosts, addOptimisticPost] = useOptimistic<OptimisticPost[], OptimisticPost>(
    posts,
    (state, newPost) => {
      // If the post has isPending, it's being added
      if (newPost.isPending) {
        return [newPost, ...state];
      }
      // Otherwise, it's being deleted
      return state.filter((post) => post.id !== newPost.id);
    }
  );

  // Fetch initial posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await listPosts({ _limit: 10 });
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts. Please try again.');
        console.error('Error fetching posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async (formData: PostFormData) => {
    try {
      setError(null);

      // Create temporary post for optimistic update
      const tempPost: OptimisticPost = {
        id: Date.now() as any, // Temporary ID
        userId: CURRENT_USER_ID as any,
        title: formData.title,
        body: formData.body,
        isPending: true,
      };

      // Immediately show the post in the UI
      addOptimisticPost(tempPost);

      // Call API in the background
      const newPost = await createPost({
        title: formData.title,
        body: formData.body,
        userId: CURRENT_USER_ID as any,
      });

      // Update actual state with server response
      setPosts((prev) => [newPost, ...prev]);
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
      // Optimistic update will be reverted automatically when setPosts is called
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      setError(null);

      // Immediately remove the post from UI
      addOptimisticPost({ id } as OptimisticPost);

      // Call API in the background
      await removePost(id);

      // Update actual state
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      setError('Failed to delete post. Please try again.');
      console.error('Error deleting post:', err);
      // Optimistic update will be reverted automatically
      // The post will reappear because setPosts wasn't called
    }
  };

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Anti-Social Network
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Create and delete posts with optimistic updates. Notice how the UI responds immediately!
        </p>
      </section>

      {error && (
        <Alert variant="destructive">
          <p>{error}</p>
        </Alert>
      )}

      <section>
        <PostForm onSubmit={handleCreatePost} />
      </section>

      <section>
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">Loading posts...</p>
          </div>
        ) : (
          <PostList posts={optimisticPosts} onDeletePost={handleDeletePost} />
        )}
      </section>
    </Container>
  );
}

export default Application;
```

### Key Changes

1. **Added `useOptimistic` hook**:
   ```tsx
   const [optimisticPosts, addOptimisticPost] = useOptimistic<OptimisticPost[], OptimisticPost>(
     posts,
     (state, newPost) => {
       if (newPost.isPending) {
         return [newPost, ...state];
       }
       return state.filter((post) => post.id !== newPost.id);
     }
   );
   ```

2. **Optimistic Create**:
   - Create temporary post with `isPending: true`
   - Call `addOptimisticPost(tempPost)` immediately
   - API call happens in background
   - Update real state when response arrives

3. **Optimistic Delete**:
   - Call `addOptimisticPost({ id })` immediately
   - API call happens in background
   - Update real state when complete

4. **Visual Feedback**:
   - Posts with `isPending: true` show reduced opacity
   - Display "Saving..." text
   - Disable delete button during save

5. **Error Handling**:
   - If API fails, optimistic update is automatically reverted
   - Error message shown to user
   - State remains consistent

</details>

## Alternative Approach: Separate Optimistic Updates

<details>
<summary>Click to see an alternative implementation</summary>

You can also use separate `useOptimistic` hooks for creates and deletes:

```tsx
function Application() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Separate optimistic state for creates
  const [optimisticCreates, addOptimisticCreate] = useOptimistic<OptimisticPost[], OptimisticPost>(
    [],
    (state, newPost) => [...state, newPost]
  );

  // Separate optimistic state for deletes
  const [optimisticDeletes, addOptimisticDelete] = useOptimistic<number[], number>(
    [],
    (state, deletedId) => [...state, deletedId]
  );

  // Combine all posts, filtering out deleted ones
  const displayedPosts = [
    ...optimisticCreates,
    ...posts.filter((post) => !optimisticDeletes.includes(post.id as number)),
  ];

  const handleCreatePost = async (formData: PostFormData) => {
    const tempPost: OptimisticPost = {
      id: Date.now() as any,
      userId: CURRENT_USER_ID as any,
      title: formData.title,
      body: formData.body,
      isPending: true,
    };

    addOptimisticCreate(tempPost);

    const newPost = await createPost({
      title: formData.title,
      body: formData.body,
      userId: CURRENT_USER_ID as any,
    });

    setPosts((prev) => [newPost, ...prev]);
  };

  const handleDeletePost = async (id: number) => {
    addOptimisticDelete(id);
    await removePost(id);
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return <PostList posts={displayedPosts} onDeletePost={handleDeletePost} />;
}
```

**Pros**:
- More explicit about what's being created vs deleted
- Easier to track pending operations separately

**Cons**:
- More complex state management
- Need to combine states for rendering

For this example, the single `useOptimistic` approach is simpler and sufficient.

</details>

## Your Task

1. **Implement optimistic updates** - Use the solution above as a guide
2. **Test creating posts** - Notice how they appear immediately
3. **Test deleting posts** - Notice how they disappear immediately
4. **Test on slow network** - Use Chrome DevTools to throttle network to "Slow 3G"
5. **Handle errors** - Try disabling network in DevTools to see error handling

### Success Criteria

After optimization:
- ✅ Posts appear immediately when created (no waiting)
- ✅ Posts disappear immediately when deleted (no waiting)
- ✅ Pending posts show visual feedback (opacity + "Saving..." text)
- ✅ On error, optimistic updates are reverted automatically
- ✅ UI feels responsive even on slow networks

## Key Learnings

### Optimistic UI Pattern

The core pattern is:

```tsx
const [actualState, setActualState] = useState(initialValue);
const [optimisticState, addOptimistic] = useOptimistic(actualState, reducerFn);

const handleAction = async () => {
  // 1. Update optimistic state immediately
  addOptimistic(optimisticValue);

  // 2. Call API in background
  const result = await apiCall();

  // 3. Update actual state when complete
  setActualState(result);
};
```

### When to Use useOptimistic

Perfect for:
- Creating/deleting items in a list
- Toggling boolean values (like/favorite)
- Simple updates where you can predict the result
- Any action where waiting for server feels slow

Not ideal for:
- Complex calculations that depend on server logic
- Actions with unpredictable results
- Cases where showing wrong data temporarily is unacceptable

### Automatic Reversion

One of the best features of `useOptimistic`:

- If you update `actualState`, optimistic state automatically syncs
- If API fails and you don't update `actualState`, optimistic update disappears
- No manual cleanup needed!

```tsx
try {
  addOptimistic(tempValue);
  await apiCall();
  setActualState(newValue); // Success: optimistic syncs to this
} catch (err) {
  // Failure: optimistic reverts automatically
  // No need to manually remove tempValue!
}
```

### Visual Feedback

Always provide feedback for pending operations:

```tsx
export interface OptimisticPost extends Post {
  isPending?: boolean;
}

// In your component:
<div className={post.isPending ? 'opacity-50' : 'opacity-100'}>
  {post.title}
  {post.isPending && <span>Saving...</span>}
</div>
```

### Temporary IDs

When creating items optimistically, use temporary IDs:

```tsx
const tempPost = {
  id: Date.now(), // or crypto.randomUUID() or -1
  ...formData,
  isPending: true,
};
```

The real ID from the server will replace it when `actualState` updates.

## Comparison: With vs Without useOptimistic

| Feature | Without | With useOptimistic |
|---------|---------|-------------------|
| **Create post** | Wait 500ms+ | Instant |
| **Delete post** | Wait 500ms+ | Instant |
| **On slow network** | Unusable | Still responsive |
| **User experience** | Frustrating | Smooth |
| **Visual feedback** | None | "Saving..." indicator |
| **Error handling** | Manual | Automatic reversion |

## Testing on Slow Network

To really see the difference:

1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Change throttling to "Slow 3G"
4. Try creating/deleting posts

Without optimistic updates: UI freezes for seconds
With optimistic updates: Instant feedback, smooth experience

## Learning Resources

- [React docs: useOptimistic](https://react.dev/reference/react/useOptimistic)
- [Optimistic UI patterns](https://www.patterns.dev/posts/optimistic-ui)
- [Building responsive UIs](https://react.dev/learn/responding-to-input-with-state)
