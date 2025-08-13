import type { ReactNode } from "react";

export interface IControlledModalProps {
  shouldDisplay: boolean;
  onClose: () => void;
  children: ReactNode;
}
