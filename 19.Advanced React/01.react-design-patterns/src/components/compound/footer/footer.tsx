import type { IFooterProps } from "./footer.types";

export function Footer({ children }: IFooterProps) {
    return <div style={{
        borderTop: "1px solid black",
        padding: "0.5rem",
        marginTop: "0.5rem",
    }}>{children}</div>
}