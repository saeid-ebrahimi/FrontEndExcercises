// Good for
// Data fetching
// Mouse position
// Permissions
// Form state
// Reusable behavior

type TDataProviderProps<T> = {
    data: T;
    children: (data: T) => React.ReactNode;
};
export function DataProvider<T>({
    data,
    children
}: TDataProviderProps<T>) {
    return children(data)
}