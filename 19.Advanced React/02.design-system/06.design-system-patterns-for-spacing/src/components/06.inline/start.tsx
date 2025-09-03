import { styled, css } from "styled-components";
import { InlineBundle, type InlineBundleProps } from "../05.inline-bundle/start";
import { Button, Logo, MenuWrapper } from "./components";
import { stretchSchema } from "../common/stretch";
export interface IInlineProps extends InlineBundleProps {
    stretch?: number | keyof typeof stretchSchema;
    switchAt?: number | string;
}

interface IResponsiveProps {
    switchAt?: string | number;
    gutter?: string;
}
const responsive = css<IResponsiveProps>`
    --switchAt: ${({ switchAt }) => typeof switchAt === "string" ? switchAt : `${switchAt}px`};
    flex-wrap: wrap;
    & > * {
        min-width: fit-content;
        flex-basis: calc((var(--switchAt) - (100% - var(--gutter)))* 999);
    }
`
export const Inline = styled(InlineBundle) <IInlineProps>`
    flex-wrap:nowrap;
    ${(props) => {
        if (typeof props.stretch === "number") {
            return `> :nth-child(${props.stretch}) {flex: 1}`
        }
        return props.stretch ? stretchSchema[props.stretch] : ""
    }}  
    ${({ switchAt }) => switchAt && responsive}
`

export function Menu() {
    return (
        <MenuWrapper>
            <Inline stretch={3} align={"center"} switchAt={620}>
                <div>
                    <Logo />
                </div>
                <InlineBundle gutter={"lg"} justify={"center"} align={"center"}>
                    <span>Books</span>
                    <span>Authors</span>
                    <span>Deals</span>
                    <span>About US</span>
                    <span>Sign In</span>
                </InlineBundle>
                <Inline justify={"end"} align={"center"}>
                    <span>Login</span>
                    <Button>Register</Button>
                </Inline>
            </Inline>
        </MenuWrapper>
    )
}