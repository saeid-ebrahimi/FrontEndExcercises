import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small";
  color: string;
  children: ReactNode;
}
