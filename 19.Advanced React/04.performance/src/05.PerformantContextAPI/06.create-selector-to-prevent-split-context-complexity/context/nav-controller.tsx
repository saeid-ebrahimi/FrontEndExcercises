import { useCallback, useMemo, useState, type ReactNode } from "react"
import { NavContext } from "./navContext";

const NavController = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = useCallback(() => setCollapsed(prev => !prev), []);
    const open = useCallback(() => setCollapsed(false), []);
    const close = useCallback(() => setCollapsed(true), []);

    const value = useMemo(() => {
        return { collapsed, open, close, toggle }
    }, [collapsed, open, close, toggle]);

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export default NavController;
