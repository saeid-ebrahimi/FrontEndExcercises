import { createContext } from "react";

export const NavDataContext = createContext({
  collapsed: false,
});

export const NavApiContext = createContext({
  open: () => {},
  close: () => {},
});
