import { useEffect } from "react";


function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    return function LoggedComponent(props: P) {
        // Track mount and unmount lifecycle
        useEffect(() => {
            console.log(`[Lifecycle]: 🟢 ${componentName} mounted.`);

            return () => {
                console.log(`[Lifecycle]: 🔴 ${componentName} unmounted.`);
            };
        }, []);

        useEffect(() => {
            console.log(`[Render / Props Update]: 🔄 ${componentName} received new props:`, props);
        });

        return <WrappedComponent {...props} />;
    }
}


export const LoggedUserCard = withLogger(UserCard);