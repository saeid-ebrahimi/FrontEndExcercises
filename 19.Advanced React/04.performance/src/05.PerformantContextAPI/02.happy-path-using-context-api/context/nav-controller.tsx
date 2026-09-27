import { useState, type ReactNode } from "react"
import { NavContext } from "./navContext";




const NavController = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(prev => !prev)

    return <NavContext.Provider value={{ collapsed, toggle }}>{children}</NavContext.Provider>
}

export default NavController;