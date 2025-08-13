import type { ReactNode } from "react";

export interface IUncontrolledFlow {
  children: ReactNode;
  onDone: (data: TData) => void;
}

export type TData = {
  name: string;
  age: number;
  country: string;
};
