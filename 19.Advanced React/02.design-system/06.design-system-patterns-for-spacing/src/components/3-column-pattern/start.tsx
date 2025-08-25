import { InputGroup } from "../2-split-pattern/form";
import { Split } from "../2-split-pattern/start";
import { styled } from "styled-components";
import { spaceSchema } from "../common/spaces";

interface IColumnsProps {
    gutter?: keyof typeof spaceSchema;
    columns?: number;
};


export const Columns = styled.div<IColumnsProps>`
    --columns: ${props => props.columns ?? 12};
    display: grid;
    gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.lg};
    grid-template-columns: repeat(var(--columns),1fr);
`;

interface IColumnProps {
    span?: number;
}
export const Column = styled.div<IColumnProps>`
    grid-column: span min(${(props => props.span ?? 1)}, var(--columns));
`
export default function InfoFormWithColumns() {
    return <Split fraction={"1/3"} gutter={"xl"}>
        <div>
            <h3>General Information</h3>
            <span>All the information you provide via this form will be exposed to the public.
            </span>
        </div>
        <Form />
    </Split>
};

function Form() {
    return (
        <Columns columns={12}>
            <Column span={6}>
                <InputGroup htmlFor="firstName" label="First Name">
                    <input type="text" id="firstName" />
                </InputGroup>
            </Column>
            <Column span={6}>
                <InputGroup htmlFor="lastName" label="Last Name">
                    <input type="text" id="lastName" />
                </InputGroup>
            </Column>
            <Column span={6}>
                <InputGroup htmlFor="email" label="Email">
                    <input type="text" id="email" />
                </InputGroup>
            </Column>
            <Column span={6}>
                <InputGroup htmlFor="phone" label="Phone Number">
                    <input type="text" id="phone" />
                </InputGroup>
            </Column>

            <Column span={4}>
                <InputGroup htmlFor="city" label="City">
                    <input type="text" id="city" />
                </InputGroup>
            </Column>
            <Column span={8}>
                <InputGroup htmlFor="country" label="Country">
                    <input type="text" id="country" />
                </InputGroup></Column>
            <Column span={12}>
                <InputGroup htmlFor="address" label="Street Address">
                    <input type="text" id="address" />
                </InputGroup>
            </Column>
        </Columns>
    )
}