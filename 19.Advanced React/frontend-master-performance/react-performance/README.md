# React Performance, v2 Course
This is a companion repository for the [React Performance, v2](https://frontendmasters.com/courses/react-performance-v2) course on Frontend Masters.
[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)](https://frontendmasters.com/courses/react-performance-v2)

## React Performance Labs: Running Examples

This project includes multiple React examples demonstrating performance optimization techniques with. To switch between examples:

```bash
npm run examples
```

This will launch an interactive menu where you can:

- Use **↑↓ arrow keys** to navigate through available examples
- Press **Enter** to select an example
- Press **Ctrl+C** or **Esc** to quit

The CLI will automatically update `index.html` to load the selected example. After selecting, run `npm run dev` to start the development server.

Once you've selected an example, start the server:

```bash
npm run dev
```

## Available Examples

We won't use _all_ of the examples today, but we have a number to choose from depending on where our conversation leads us.

### React Hooks

- **Effect Essentials** - Common useEffect pitfalls and how to fix them (dependencies, race conditions, cleanup)

### Performance Optimization

- **Deep Thoughts** - Performance optimization with useCallback, React.memo, and useReducer
- **Memo Mania** - Deep dive into memoization (useMemo, React.memo, useCallback)
- **Throwing Shapes** - useDeferredValue for responsive UI with expensive rendering

### State Management

- **Local State** - State colocation principles and best practices
- **Anti-Social Network** - Optimistic UI updates with useOptimistic
- **Contextual** - Context API re-render problems and solutions

### Concurrent Features

- **Prime Time** - useTransition vs useDeferredValue for concurrent rendering
- **Pokamoka** - Pokemon filtering with useTransition

### Code Splitting & Loading

- **Lazy Loading** - React.lazy() and Suspense for code splitting
- **Suspenseful** - Modern data fetching with Suspense and the use() hook (React 19)
