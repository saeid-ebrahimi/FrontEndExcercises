import { useMemo, useReducer, type ReactNode } from "react"
import { NavApiContext, NavDataContext } from "./navContext";

type TState = { collapsed: boolean };
const defaultState: TState = {
    collapsed: false,
}

type TAction = {
    type: "open" | "close" | "toggle"
}

const reducer = (state: TState, action: TAction): TState => {
    switch (action.type) {
        case "open":
            return { ...state, collapsed: false }
        case "close":
            return { ...state, collapsed: true }
        case "toggle":
            return { ...state, collapsed: !state.collapsed }
    }
}

const NavController = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const data = useMemo(() => ({ collapsed: state.collapsed }), [state]);

    const api = useMemo(() => ({ open: () => dispatch({ type: "open" }), close: () => dispatch({ type: "close" }), toggle: () => dispatch({ type: "toggle" }) }), [])

    return <NavDataContext.Provider value={data}>
        <NavApiContext.Provider value={api}>{children}</NavApiContext.Provider>
    </NavDataContext.Provider>
}

export default NavController;
