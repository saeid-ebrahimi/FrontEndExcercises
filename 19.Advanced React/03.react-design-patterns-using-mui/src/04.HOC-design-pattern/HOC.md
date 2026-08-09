# HOC Usage

The Higher-Order Component (HOC) pattern is an advanced technique in React used for reusing component logic.

An HOC is not a React component itself; it is a function that takes a component as an argument and returns a new component.

## How an HOC Works

The structural formula of an HOC looks like this:

```JavaScript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

While regular components transform props into UI, an HOC transforms a component into another component by adding extra data, styling, or behavior.

## Common Use Cases

HOCs are typically used when you need to share cross-cutting concerns across multiple components, such as:

- Authentication: Checking if a user is logged in before rendering a protected page.

- Logging/Analytics: Tracking user interactions or page views automatically.

- Data Fetching (Loading/Error states): Injecting fetched data or managing API loading spinners.

- Styling/Theming: Injecting dynamic styles or theme properties.

## Key Characteristics & Best Practices

- Pure Functions: HOCs should be pure functions with no side effects. They should not modify the WrappedComponent, but rather compose it by wrapping it in a container component.

- Pass Through Unrelated Props: Always pass down the incoming props to the wrapped component ({...props}) so you don't unintentionally strip away existing functionality.

- Do Not Mutate the Original Component: Avoid modifying the prototype of the WrappedComponent, as it can lead to unpredictable bugs.

- Debugging: Give the returned component a helpful display name (e.g., WithAuth(Dashboard)) so it is easy to identify in React DevTools:

```JavaScript
WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
```

## HOCs vs. Custom Hooks (Modern React)

While HOCs are still widely found in older codebases and certain libraries (like Redux's connect or React Router), Custom Hooks are generally preferred in modern React (React 16.8+) for sharing stateful logic.

Use Custom Hooks when you want to share stateful logic or side effects without adding extra layers to your component tree (avoiding "wrapper hell").

Use HOCs when you need to declaratively manipulate rendering, intercept component mounting, or override props globally for a component.

Stateful logic and side-effect management previously handled by HOCs are the ones most cleanly replaced by Custom Hooks.

Here is a breakdown of what can—and cannot—be easily replaced by hooks:

## 1. What Can Be Replaced by Hooks (Stateful & Side-Effect Logic)

Logic that deals with data, subscriptions, browser APIs, or state can be extracted into a reusable Custom Hook, completely eliminating the need for wrapper components.

Data Fetching & Loading States: Instead of an HOC wrapping a component to inject data and isLoading props, a custom hook like useFetch(url) lets components fetch data directly.

Authentication Checks: While an HOC can block rendering globally, authentication state and redirection can often be handled neatly inside a hook (e.g., useAuth()) combined with router logic or conditional rendering inside the component body.

Event Listeners & Subscriptions: Tracking window size (useWindowSize), online status (useOnlineStatus), or keyboard shortcuts can all be cleanly encapsulated in hooks without cluttering the component tree.

Example Replacement:

Old HOC Way: withWindowSize(MyComponent) injects windowWidth as a prop.

Modern Hook Way: const windowWidth = useWindowSize(); called directly inside MyComponent.

## 2. What Still Requires HOCs (or Render Props / Components)

Hooks cannot fully replace HOCs when you need to declaratively manipulate rendering, modify component types, or control how and when a component is mounted based on abstract conditions.

HOCs are still useful for:

- Render Interception / Conditional Mounting: Completely preventing a component from rendering or rendering an error boundary/fallback UI high up the tree before even running the component's internal logic.

- Global Prop Injection / Monkey Patching: Automatically injecting a static set of configuration props across dozens of legacy components where refactoring every single file to call a hook isn't feasible.

- Library Integrations: Certain older architectural patterns (like Redux's connect, though modern Redux uses useSelector and useDispatch) rely heavily on HOCs to bridge external stores with React components.
