import { ComponentType, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { track } from "./analytics";


type TAnalyticsOptions = {
    event: string;
    page: string;
}

export function withAnalytics(options: TAnalyticsOptions) {
    // use this function for having proper name instead of Wrapper for react dev-tool
    return function <P extends object>(Component: ComponentType<P>) {
        function Wrapped(props: P) {
            const [searchParams] = useSearchParams();

            useEffect(() => {
                const utm = {
                    source: searchParams.get("utm_source"),
                    medium: searchParams.get("utm_medium"),
                    campaign: searchParams.get("utm_campaign"),
                };
                void track({
                    event: options.event,
                    page: options.page,
                    utm
                });
            }, [searchParams]);
            return <Component {...props} />;
        }

        // add name for react dev-tool
        Wrapped.displayName = `withAnalytics(${Component.displayName || Component.name || "Component"
            })`;

        return Wrapped;
    }
}