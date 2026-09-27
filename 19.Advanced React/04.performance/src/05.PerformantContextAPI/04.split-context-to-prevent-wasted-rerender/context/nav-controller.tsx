import { useCallback, useMemo, useState, type ReactNode } from "react"
import { NavApiContext, NavDataContext } from "./navContext";

const NavController = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);

    const open = useCallback(() => setCollapsed(false), []);
    const close = useCallback(() => setCollapsed(true), []);

    const data = useMemo(() => ({ collapsed }), [collapsed]);

    const api = useMemo(() => ({ open, close }), [open, close])

    return <NavDataContext.Provider value={data}>
        <NavApiContext.Provider value={api}>{children}</NavApiContext.Provider>
    </NavDataContext.Provider>
}

export default NavController;
