import styled from "styled-components";
import MenuBasis from "./menu";
import { spaceSchema } from "../common/spaces";
import { justifyContentSchema } from "../common/justify-content";
import { alignItemsSchema } from "../common/align-items";



export type InlineBundleProps = {
    gutter?: keyof typeof spaceSchema;
    justify?: keyof typeof justifyContentSchema;
    align?: keyof typeof alignItemsSchema
}
export const InlineBundle = styled.div<InlineBundleProps>`
    --gutter: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.lg};
    display: flex;
    flex-wrap:wrap;
    gap: var(--gutter);
    justify-content: ${(props) => props.justify ? justifyContentSchema[props.justify] : justifyContentSchema.stretch};
    align-items: ${(props) => props.align ? alignItemsSchema[props.align] : alignItemsSchema.stretch} ;
`;

export function BundledMenu() {
    return <MenuBasis>
        <InlineBundle gutter={"lg"} justify={"end"} align={"center"}>
            <span>Books</span>
            <span>Authors</span>
            <span>Deals</span>
            <span>About US</span>
            <span>Sign In</span>
        </InlineBundle>
    </MenuBasis>
}