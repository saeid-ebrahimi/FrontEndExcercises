import { useCallback, useMemo, useState, type ReactNode } from "react"
import { NavContext } from "./navContext";

const NavController = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = useCallback(() => setCollapsed(prev => !prev), []);

    const contextValue = useMemo(() => ({ collapsed, toggle }), [collapsed, toggle]);

    return <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
}

export default NavController;