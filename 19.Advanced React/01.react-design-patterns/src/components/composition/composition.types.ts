import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export interface ButtonProps {
  size?: "small";
  color: string;
  children: ReactNode;
  props: ButtonHTMLAttributes<HTMLButtonElement>;
}
