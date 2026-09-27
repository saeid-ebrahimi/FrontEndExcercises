import { useContext } from "react";
import {
  NavApiContext,
  NavDataContext,
} from "../context/navContext";

export const useNavApi = () =>
  useContext(NavApiContext);

export const useNavData = () =>
  useContext(NavDataContext);
