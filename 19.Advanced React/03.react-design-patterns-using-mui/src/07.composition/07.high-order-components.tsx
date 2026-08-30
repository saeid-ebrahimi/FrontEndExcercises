import type { ComponentType } from "react";

type WithAuthProps = {
    isAuthenticated: boolean;
}

function withAuth<P extends object>(Component: ComponentType<P>): ComponentType<P & WithAuthProps> {
    return function AuthenticatedComponent(props: P & WithAuthProps) {
        const { isAuthenticated, ...componentProps } = props;

        if (!isAuthenticated) {
            return <div>Please login first.</div>;
        }

        return <Component {...(componentProps as P)} />;
    }
}

export const AuthenticatedComponent = withAuth