import type { Attributes, ComponentType } from "react";

export function withLogger<P>(Component: ComponentType<P>) {
    const WrappedComponent: React.FC<P & Attributes & { test: string }> = (props) => {
        console.log('Props:', props);
        return <Component {...props} />;
    };

    WrappedComponent.displayName = `withLogger(${Component.displayName || Component.name || 'Component'})`;
    return WrappedComponent;
}