import type { ReactNode } from "react";

export type SplitScreenProps<
  T extends readonly ReactNode[]
> = {
  children: T;
  childrenWidths: { [K in keyof T]: number };
};
