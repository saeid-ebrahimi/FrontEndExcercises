import { useEffect } from "react";
import { ResourceLoader2 } from "../../02.container-patterns/02.generic-container/resource-loader";
import { TUser, UserInfo } from "./user-info";


function withLogger<P extends object>(WrappedComponent: React.ComponentType<P> | React.FC<P>) {
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

function UserProfileLoader() {
    return (
        <ResourceLoader2 resourceUrl={"/users/1"}>
            {(resource: TUser) => <UserInfo user={resource} />}
        </ResourceLoader2>
    );
}

export const LoggedResourceLoader = withLogger(UserProfileLoader);