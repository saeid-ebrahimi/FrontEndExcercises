import { ComponentType } from "react";

// configurable HOC (or a curried HOC). for logging and adding utm data
export function withLogger(options: {
    calledIn: string;
    utmData: Record<string, string>;
}) {
    return function <P extends object>(Component: ComponentType<P>) {
        return function Wrapped(props: P) {
            console.log(options.calledIn);
            console.log(options.utmData);

            return <Component {...props} />;
        };
    };
}