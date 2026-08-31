import { useSyncExternalStore } from "react";
import { counterStore } from "./observable-instance";

export function CounterA() {
    const count = useSyncExternalStore(
        listener => counterStore.subscribe(listener),
        () => counterStore.getSnapshot()
    );
    return <div>A: {count}</div>;
}