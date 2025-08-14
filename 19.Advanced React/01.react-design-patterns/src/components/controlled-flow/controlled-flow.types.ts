import type { ReactNode } from "react";

export interface IControlledFlowProps {
  children: ReactNode;
  onDone: (data: Partial<TData>) => void;
  onNext: (data: Partial<TData>) => void;
  currentIndex: number;
}

export type TData = {
  name: string;
  age: number;
  country: string;
};
