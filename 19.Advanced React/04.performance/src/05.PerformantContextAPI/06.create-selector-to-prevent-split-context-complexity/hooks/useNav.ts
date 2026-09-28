import { useContext } from "react";
import { NavContext } from "../context/navContext";

export const useNav = () =>
  useContext(NavContext);
