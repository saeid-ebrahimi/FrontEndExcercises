import { ComponentType, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";


export function withLoggerClient<P extends object>(Component: ComponentType<P>) {
    return function Wrapped(props: P) {
        const [searchParams] = useSearchParams();

        const utmData = useMemo(() => ({
            utm_source: searchParams.get("utm_source"),
            utm_medium: searchParams.get("utm_medium"),
            utm_campaign: searchParams.get("utm_campaign"),
        }), [searchParams]);

        useEffect(() => {
            // sendAnalytics(utmData);
            console.log(utmData);
        }, [utmData]);

        console.log();

        return <Component {...props} />;
    };
}