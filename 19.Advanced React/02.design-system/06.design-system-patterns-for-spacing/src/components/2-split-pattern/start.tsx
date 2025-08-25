import { styled } from "styled-components";
import { spaceSchema } from "../common/spaces";
import Form from "./form";
import { fractionSchema } from "../common/fraction";

interface ISplitProps {
    gutter?: keyof typeof spaceSchema;
    fraction?: keyof typeof fractionSchema;
}

export const Split = styled.div<ISplitProps>`
  display: grid;
  gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.lg};
  grid-template-columns: ${(props) => props.fraction ? fractionSchema[props.fraction] : fractionSchema["1/2"]};
`

export function InfoForm() {
    return <Split fraction={"1/3"} gutter={"xl"}>
        <div>
            <h3>General Information</h3>
            <span>All the information you provide via this form will be exposed to the public.</span>
        </div>
        <Form />
    </Split>
}