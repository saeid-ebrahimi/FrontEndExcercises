import type {
  TRootState,
  TAppDispatch,
} from "./store";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

export const useAppDispatch: () => TAppDispatch =
  useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> =
  useSelector;
