# Custom Hook Usage

Custom hooks in React are mainly used to extract reusable stateful logic from components.

They let you take logic such as data fetching, form handling, subscriptions, pagination, or local state management and reuse it across multiple components without duplicating code.

## What makes something a custom hook?

A custom hook is simply a function that:

1. Usually starts with use
2. Can use React hooks such as useState, useEffect, useMemo, useRef, etc.
3. Encapsulates reusable logic

## The important concept

A custom hook doesn't create shared state between components.

For example:

```javascript
const a = useCounter();
const b = useCounter();
```

a and b have completely separate count states.

The hook shares logic, not necessarily state.

If you need genuinely shared state between components, you'd typically use something like:

- Context
- Redux
- Zustand
- React Query
  etc.
  Where custom hooks are especially useful

## Category of custom hooks usages

A useful way to categorize **custom hooks** is by the kind of problem they solve:

| Category                           | Purpose                                                     | Examples                                                          |
| ---------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- |
| **Data Fetching & API**            | Fetch, cache, update, delete, and synchronize server data   | `useFetch`, `useUser`, `useUsers`, `useMutation`                  |
| **Forms & Input**                  | Manage form values, validation, submission, and input state | `useForm`, `useInput`, `useField`                                 |
| **Authentication & Authorization** | Manage logged-in user, permissions, roles, tokens           | `useAuth`, `usePermissions`, `useRole`                            |
| **State Management**               | Encapsulate reusable local or shared state logic            | `useToggle`, `useCounter`, `useDisclosure`                        |
| **UI & Interaction**               | Handle common UI behaviors and interactions                 | `useModal`, `useDropdown`, `useOutsideClick`, `useClickAway`      |
| **Browser & DOM**                  | Interact with browser APIs or DOM elements                  | `useWindowSize`, `useMediaQuery`, `useEventListener`, `useScroll` |
| **Performance**                    | Reduce unnecessary calculations, requests, or updates       | `useDebounce`, `useThrottle`, `usePrevious`, `useDeferredValue`   |
| **Navigation & URL**               | Manage routing, query parameters, and URL state             | `useQueryParams`, `useSearchParamsState`, `useRouteState`         |
| **Pagination & Lists**             | Manage pagination, infinite loading, filtering, and sorting | `usePagination`, `useInfinitePagination`, `useFilters`            |
| **Storage**                        | Synchronize React state with browser storage                | `useLocalStorage`, `useSessionStorage`                            |
| **Real-time Communication**        | Manage WebSockets, SSE, subscriptions                       | `useWebSocket`, `useSSE`, `useSubscription`                       |
| **Device & Browser Features**      | Access browser/device capabilities                          | `useGeolocation`, `useOnlineStatus`, `useClipboard`               |
| **Timers & Async**                 | Handle intervals, timeouts, countdowns, and async workflows | `useTimer`, `useInterval`, `useTimeout`                           |
| **Analytics & Tracking**           | Track events, page views, and user behavior                 | `useAnalytics`, `usePageView`                                     |
| **Business Logic**                 | Encapsulate application-specific rules and workflows        | `useBooking`, `useCheckout`, `usePriceCalculation`                |

### An even simpler architecture

You can think of custom hooks in 5 big groups:

```text
Custom Hooks
│
├── 1. Server / Data
│   ├── useUser
│   ├── useFetch
│   ├── useMutation
│   └── useInfinitePagination
│
├── 2. UI / Interaction
│   ├── useModal
│   ├── useToggle
│   ├── useOutsideClick
│   └── useDropdown
│
├── 3. Browser / Device
│   ├── useLocalStorage
│   ├── useWindowSize
│   ├── useMediaQuery
│   └── useGeoLocation
│
├── 4. Performance / Async
│   ├── useDebounce
│   ├── useThrottle
│   ├── usePrevious
│   └── useTimer
│
└── 5. Business / Domain
    ├── useAuth
    ├── useBooking
    ├── useCheckout
    └── useSearch

## List of React Hooks

Here’s a practical list of the main **React hooks and what they are used for**.

### Built-in React Hooks

| Hook                   | Main usage                                                               |
| ---------------------- | ------------------------------------------------------------------------ |
| `useState`             | Store and update local component state                                   |
| `useEffect`            | Run side effects such as API calls, subscriptions, timers                |
| `useContext`           | Read values from React Context                                           |
| `useReducer`           | Manage complex state transitions                                         |
| `useRef`               | Store a mutable value without causing re-render; access DOM elements     |
| `useMemo`              | Memoize an expensive calculated value                                    |
| `useCallback`          | Memoize a function reference                                             |
| `useLayoutEffect`      | Run an effect synchronously after DOM changes but before browser paint   |
| `useImperativeHandle`  | Customize what a parent receives through a ref                           |
| `useId`                | Generate stable unique IDs for accessibility and forms                   |
| `useTransition`        | Mark state updates as non-urgent                                         |
| `useDeferredValue`     | Defer updating a value to keep the UI responsive                         |
| `useSyncExternalStore` | Subscribe to an external store safely                                    |
| `useInsertionEffect`   | Primarily for CSS-in-JS libraries to inject styles before layout effects |

### React 19+ Hooks

| Hook             | Main usage                                              |
| ---------------- | ------------------------------------------------------- |
| `use`            | Read a Promise or Context directly during rendering     |
| `useActionState` | Manage state/result of an action                        |
| `useFormStatus`  | Access the status of a form submission                  |
| `useOptimistic`  | Show an optimistic UI update before the server responds |
```
