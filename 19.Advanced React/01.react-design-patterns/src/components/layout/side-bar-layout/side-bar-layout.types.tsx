import type { ReactNode } from "react";

export type TSidebarLayoutProps = {
    sidebar: ReactNode;
    children: ReactNode;
    sidebarWidth?: string;
    position?: "left" | "right";
};