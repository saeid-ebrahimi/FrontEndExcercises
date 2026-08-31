import { useSyncExternalStore } from "react";
import { counterStore } from "./observable-instance";

export function CounterB() {
    const count = useSyncExternalStore(
        listener => counterStore.subscribe(listener),
        () => counterStore.getSnapshot()
    );

    return <div>B: {count}</div>;
}