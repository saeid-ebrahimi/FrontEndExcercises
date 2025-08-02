import { TAppDispatch } from "./../../../../09.complete-porject-with-ts/src/redux/store";
import type { TRootState } from "./store";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

export const useAppDispatch: () => TAppDispatch =
  useDispatch;

export const useAppSelector: TypedUseSelectorHook<TRootState> =
  useSelector;
