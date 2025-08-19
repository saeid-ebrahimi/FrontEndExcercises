
import type { ButtonProps } from "./composition.types"

export function Button({ size, color, children, ...props }: ButtonProps) {
    return (<button style={{ fontSize: size === "small" ? "10px" : "24px", backgroundColor: color }} {...props}>{children}</button>)
}

export function RedButton(props: ButtonProps) {
    return <Button {...props} color="crimson">{props.children}</Button>
}

export function GreenSmallButton(props: ButtonProps) {
    return <Button {...props} color="green" size={"small"}>{props.children}</Button>
}