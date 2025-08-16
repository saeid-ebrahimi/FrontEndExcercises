import type { ComponentType } from "react";
import type { ButtonProps } from ".";

export function Button({ size, color = "blue", children, ...props }: ButtonProps) {
    return (<button style={{ fontSize: size === "small" ? "10px" : "24px", backgroundColor: color }} {...props}>{children}</button>)
}

export function partialComponent<P extends object, K extends keyof P>(
    Component: ComponentType<P>,
    partialProps: Pick<P, K>
) {
    return (props: Omit<P, K>) => {
        return <Component {...(partialProps as P)} {...(props as P)} />;
    };
}
export const RedButton = partialComponent(Button, { color: "crimson" })
export const SmallRedButton = partialComponent(Button, { size: "small" })