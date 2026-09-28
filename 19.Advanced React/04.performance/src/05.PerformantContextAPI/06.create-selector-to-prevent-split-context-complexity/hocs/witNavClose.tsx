import React from "react";
import { useNav } from "../hooks/useNav"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withNavClose = (Component: any) => {
    const MemoizedComponent = React.memo(Component)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (props: any) => {
        const { close } = useNav();
        return <MemoizedComponent {...props} closeNav={close} />;
    }
};

export default withNavClose;