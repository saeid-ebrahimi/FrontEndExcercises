import { useLocation, useNavigate } from "react-router-dom";

export function useRouteState() {
    const navigate = useNavigate();
    const location = useLocation();

    const goTo = (path: string, options?: {
        replace?: boolean;
        state?: unknown;
    }) => {
        navigate(path, {
            replace: options?.replace,
            state: options?.state,
        });
    };

    const goBack = () => {
        navigate(-1);
    };

    const goForward = () => {
        navigate(1);
    };

    const reload = () => {
        navigate(0);
    };

    return {
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
        state: location.state,
        goTo,
        goBack,
        goForward,
        reload
    }

}