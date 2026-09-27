import { createContext } from "react";

export const NavContext = createContext({
  collapsed: false,
  toggle: () => {},
});
