type Listener<T> = (value: T) => void;

export class Observable<T> {
    private listener = new Set<Listener<T>>();
    subscribe(listener: Listener<T>) {
        this.listener.add(listener);

        return () => {
            this.listener.delete(listener);
        }
    };

    emit(value: T) {
        this.listener.forEach((listener) => {
            listener(value)
        })
    }

}
