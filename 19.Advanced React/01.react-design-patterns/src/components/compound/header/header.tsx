import type { IHeaderProps } from "./header.types";

export function Header({ children }: IHeaderProps) {
    return <div style={{
        borderBottom: '1px solid black',
        padding: "0.5rem",
        marginBottom: "0.5rem"
    }}>{children}</div>
}