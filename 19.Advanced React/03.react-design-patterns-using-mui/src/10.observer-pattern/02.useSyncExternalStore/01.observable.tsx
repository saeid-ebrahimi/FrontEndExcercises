export class CounterStore {
    private count = 0;

    private listeners = new Set<() => void>();

    getSnapshot() {
        return this.count;
    };

    subscribe(listener: () => void) {
        this.listeners.add(listener);

        return () => {
            this.listeners.delete(listener);
        }
    };

    increment() {
        this.count++;
        this.listeners.forEach(listener => {
            listener()
        })
    }
}