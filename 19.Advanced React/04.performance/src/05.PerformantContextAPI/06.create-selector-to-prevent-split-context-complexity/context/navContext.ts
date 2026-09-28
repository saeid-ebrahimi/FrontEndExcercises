import { createContext } from "react";

export const NavContext = createContext({
  collapsed: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});
