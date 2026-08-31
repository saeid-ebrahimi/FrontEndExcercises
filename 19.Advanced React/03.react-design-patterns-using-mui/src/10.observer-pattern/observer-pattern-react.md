# Observer Pattern in React

The **Observer Pattern** is used when one object or system changes and needs to notify other objects or components that are interested in that change.

The core idea is:

> **Something changes → notify everyone who is interested in that change.**

A simple mental model is a YouTube channel:

```text
              YouTube Channel
               (Observable)
                    │
          "New video published!"
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
     User A      User B      User C
    (Observer)  (Observer)  (Observer)
```

The users subscribe to the channel. When something happens, the channel notifies its subscribers.

---

## 1. DOM Events

One of the simplest real-world examples in JavaScript is DOM events.

```tsx
button.addEventListener("click", handleClick);
```

Here, the button/DOM system produces an event and `handleClick` is interested in that event.

```text
Button / DOM
   │
   │ click happens
   ▼
handleClick
```

In React:

```tsx
function App() {
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  return <div>Hello</div>;
}
```

The component is effectively saying:

> "Notify me whenever the window is resized."

That is Observer-style behavior.

---

## 2. React State

Consider:

```tsx
const [count, setCount] = useState(0);
```

When you do:

```tsx
setCount(10);
```

React knows that something changed and schedules the component to render again.

Conceptually:

```text
        State
          │
       changed
          │
          ▼
        React
          │
       notify/update
          │
          ▼
      Component
          │
       re-render
          │
          ▼
          UI
```

React's internal architecture is more complicated than a simple Observer implementation, so it is better to say that React uses **change notification and subscription concepts** rather than saying "`useState` is simply the Observer Pattern."

---

## 3. `useSyncExternalStore`

This is one of the clearest Observer-style examples in React.

Imagine an external store:

```tsx
class CounterStore {
  private count = 0;

  private listeners = new Set<() => void>();

  getSnapshot() {
    return this.count;
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  increment() {
    this.count++;

    this.listeners.forEach((listener) => {
      listener();
    });
  }
}
```

Create the store:

```tsx
const counterStore = new CounterStore();
```

A component can subscribe:

```tsx
function Counter() {
  const count = useSyncExternalStore(
    (listener) =>
      counterStore.subscribe(listener),
    () => counterStore.getSnapshot(),
  );

  return (
    <div>
      Count: {count}
      <button
        onClick={() => counterStore.increment()}>
        +
      </button>
    </div>
  );
}
```

The flow is:

```text
                    CounterStore
                         │
                    count changed
                         │
                    notify listeners
                         │
                         ▼
                  React component
                         │
                      re-render
                         │
                         ▼
                         UI
```

This is a very direct example of the Observer concept.

---

## 4. Redux

Redux is another practical example.

Imagine an application with:

```text
Navbar
ProductList
Cart
Checkout
```

Different components can subscribe to different parts of the Redux store.

```text
                   Redux Store
                       │
                  state changes
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Navbar       ProductList    Cart
       observer       observer     observer
```

For example:

```tsx
const cartItems = useSelector(
  (state) => state.cart.items,
);
```

Conceptually, the component is saying:

> "I am interested in this part of the store. Notify me when the relevant state changes."

The general flow is:

```text
dispatch()
   ↓
Store changes
   ↓
Subscribers notified
   ↓
Relevant React components update
   ↓
UI re-renders
```

Redux's implementation has additional mechanisms and optimizations, but the Observer/Subscription concept is fundamental to how connected components respond to store changes.

---

## 5. TanStack Query / React Query

TanStack Query is another very practical example.

For example:

```tsx
const { data } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
});
```

Multiple components can be interested in the same query:

```text
                 Query Cache
                     │
              products updated
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Product     Sidebar     Other
       component   component   component
```

Conceptually:

```text
API response
     ↓
Query Cache
     ↓
notify subscribers
     ↓
React components
     ↓
re-render
```

This is particularly important when multiple parts of an application depend on the same server state.

---

## 6. WebSocket

WebSockets are a great real-world example.

Imagine a chat application.

The server sends a new message:

```text
"Hello!"
```

The application listens for incoming messages:

```tsx
socket.onmessage = (event) => {
  setMessages((prev) => [...prev, event.data]);
};
```

Conceptually:

```text
              WebSocket Server
                     │
                new message
                     │
                     ▼
                   Socket
                     │
                   notify
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Chat UI    Notification  Badge
       Observer    Observer    Observer
```

The important idea is that interested parts of the application react when a new event arrives.

---

## 7. RxJS

If you want to see the Observer Pattern explicitly, RxJS is one of the clearest examples.

```tsx
import { Subject } from "rxjs";

const userSubject = new Subject<string>();
```

Subscribe:

```tsx
const subscription = userSubject.subscribe(
  (username) => {
    console.log(username);
  },
);
```

Publish a value:

```tsx
userSubject.next("Saeid");
```

Conceptually:

```text
                 Subject
                   │
              next("Saeid")
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
       Observer Observer Observer
```

Unsubscribe:

```tsx
subscription.unsubscribe();
```

This is very close to the classic Observer Pattern.

---

## 8. `IntersectionObserver`

The browser itself provides APIs based on observation.

For example:

```tsx
const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
  },
);

observer.observe(element);
```

You are telling the browser:

> "Observe this element and notify me when its visibility/intersection changes."

Conceptually:

```text
Element
   │
   │ enters viewport
   ▼
IntersectionObserver
   │
   │ notify
   ▼
callback()
```

Common use cases:

- Lazy loading
- Infinite scrolling
- Animations
- Detecting visible elements
- Analytics

---

## 9. `MutationObserver`

`MutationObserver` watches changes to the DOM.

```tsx
const observer = new MutationObserver(
  (mutations) => {
    console.log(mutations);
  },
);

observer.observe(element, {
  childList: true,
  attributes: true,
});
```

The idea is:

> "Watch this DOM element and notify me when it changes."

```text
DOM Element
     │
  changes
     │
     ▼
MutationObserver
     │
   notify
     │
     ▼
 callback
```

---

## 10. `ResizeObserver`

`ResizeObserver` watches an element's size.

```tsx
const observer = new ResizeObserver((entries) => {
  console.log(entries);
});

observer.observe(element);
```

Conceptually:

```text
Element
   │
   │ size changes
   ▼
ResizeObserver
   │
   ▼
callback
```

This is useful for components whose behavior depends on their actual rendered dimensions.

---

## Real-World Analogies

### 11. YouTube Subscription

Imagine a YouTube channel.

```text
                 YouTube Channel
                    Observable
                        │
                  New video
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       User A        User B        User C
       Observer      Observer      Observer
```

The channel does not need to know what each user does.

It only needs to notify subscribers:

> "A new video was published."

---

### 12. Weather Station

Imagine a weather station.

```text
                 Weather Station
                    Observable
                        │
                   temperature
                     changes
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       Mobile App    Web App      Smart Watch
       Observer      Observer      Observer
```

When the temperature changes, every interested application can react.

The weather station doesn't need to know how each application displays the temperature.

---

### 13. Stock Price

A stock price is another classic example.

```text
                 Stock Price
                  Observable
                     │
                  $150 → $151
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Trading UI  Mobile App  Alert System
        Observer    Observer     Observer
```

When the price changes:

```text
$150 → $151
      ↓
   notify()
      ↓
 ┌────┼────┐
 ▼    ▼    ▼
UI   App  Alert
```

Each observer decides what it needs to do.

---

## Why Use the Observer Pattern?

One of the biggest benefits is **loose coupling**.

Without the pattern, an object might need to know about every system that should react to a change:

```text
Stock Price
   │
   ├── update Trading UI
   ├── update Mobile App
   ├── send Alert
   ├── update Analytics
   └── update Dashboard
```

With Observer:

```text
Stock Price
     │
     │ notify
     ▼
Subscribers
```

The observable only knows:

> "I have subscribers. I need to notify them."

It does not need to know what each subscriber does.

---

## Observer vs Pub/Sub

These patterns are closely related but not exactly the same.

### Observer

Observers usually subscribe directly to the observable:

```text
Observable
    │
    ├── Observer A
    ├── Observer B
    └── Observer C
```

### Pub/Sub

Publisher and subscribers are usually decoupled through a broker/event bus:

```text
Publisher
    │
    ▼
 Event Bus
    │
    ├── Subscriber A
    ├── Subscriber B
    └── Subscriber C
```

A custom `EventBus` implementation is therefore often closer to **Pub/Sub**, while a store with `subscribe()` and `notify()` is a more direct Observer-style design.

---

## A Minimal Observer Implementation

Most Observer implementations boil down to four operations:

```tsx
class Observable<T> {
  private observers = new Set<
    (value: T) => void
  >();

  // 1. Subscribe
  subscribe(observer: (value: T) => void) {
    this.observers.add(observer);

    // 2. Unsubscribe
    return () => {
      this.observers.delete(observer);
    };
  }

  // 3. Something changes
  setValue(value: T) {
    // 4. Notify observers
    this.observers.forEach((observer) => {
      observer(value);
    });
  }
}
```

The important concepts are:

```text
subscribe()
unsubscribe()
notify()
```

When you see these concepts together, think:

> **Observer Pattern**

---

## Where You'll Encounter It as a React Developer

| Technology             | Observer / Subscription Concept |
| ---------------------- | ------------------------------: |
| `addEventListener`     |                      ⭐⭐⭐⭐⭐ |
| WebSocket              |                      ⭐⭐⭐⭐⭐ |
| `IntersectionObserver` |                      ⭐⭐⭐⭐⭐ |
| `ResizeObserver`       |                      ⭐⭐⭐⭐⭐ |
| RxJS                   |                      ⭐⭐⭐⭐⭐ |
| `useSyncExternalStore` |                      ⭐⭐⭐⭐⭐ |
| Redux                  |                        ⭐⭐⭐⭐ |
| Zustand                |                        ⭐⭐⭐⭐ |
| TanStack Query         |                        ⭐⭐⭐⭐ |
| React state            |                          ⭐⭐⭐ |

---

## The Main Pattern to Remember

The most useful mental model for a React developer is:

```text
External Source
      │
      │ subscribe
      ▼
   Observer
      │
      │ something changes
      ▼
   notify()
      │
      ▼
 React update
      │
      ▼
  re-render
      │
      ▼
     UI
```

The Observer Pattern is therefore especially useful when **multiple parts of an application need to react to changes without the source needing to know the implementation details of those parts**.

In modern React development, you will encounter this idea in:

- Redux
- Zustand
- TanStack Query
- RxJS
- WebSockets
- Browser Observer APIs
- External stores
- Event listeners
- Custom event systems
