// Good for
// Data fetching
// Mouse position
// Permissions
// Form state
// Reusable behavior

// all the examples are render props and change the function name create difference name for each one

type TFunctionTypes = "children" | "render" | "content" | "item";

type TDataProviderProps<T> = {
    data: T;
} & {
    [K in TFunctionTypes]: (data: T) => React.ReactNode;
};

// 1. Function passes as children
export function DataProvider<T>({
    data,
    children
}: TDataProviderProps<T>) {
    return <>
        {children(data)}
    </>
}

// 2. Function passed as render
export function DataProviderWithRender<T>({ data, render }: TDataProviderProps<T>) {
    return <>
        {render(data)}
    </>
}


// 3. Function passed as content
export function DataProviderWithContent<T>({ data, content }: TDataProviderProps<T>) {
    return <>
        {content(data)}
    </>
}

// 4. Function passed as item
export function DataProviderWithItem<T>({ data, item }: TDataProviderProps<T>) {
    return <>
        {item(data)}
    </>
}