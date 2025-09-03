import { Layers } from "../01-layers-pattern/start"
import { styled } from "styled-components";
import { Grid } from "../04.grid-pattern/start"
import { InlineBundle } from "../05.inline-bundle/start"
import { Bottom, Card, Description, Name, Price, Top } from "./component"
import { spaceSchema } from "../common/spaces";

export interface IPadProps {
    padding?: (keyof typeof spaceSchema)[];
}

export const Pad = styled.div<IPadProps>`
  padding: ${(props) => {
        if (!props.padding) return "";
        return Array.isArray(props.padding)
            ? props.padding.map((padKey) => spaceSchema[padKey]).join(" ")
            : spaceSchema[props.padding];
    }};
`;

export const Button = styled(Pad).attrs(() => ({
    as: "button",
    padding: ["sm", "lg"],
}))`
    background-color: crimson;
    color: white;
    border: none;
    border-radius: 4px;
`
const GiftCard = () => {
    return (<Card>
        <Top>
            <Pad padding={["xl"]}>
                <Name>Git Card</Name>
                <Description>This is one of our gift cards</Description>
                <Price>$25.99</Price>
                <InlineBundle gutter={"none"} justify={"center"}>
                    <Button>Buy</Button>
                </InlineBundle>
            </Pad>
        </Top>
        <Bottom>
            <Pad padding={["md"]}>
                <Layers gutter={"md"}>
                    <span>Includes</span>
                    <ul>
                        <li>This is inclusion number 1</li>
                        <li>This is inclusion number 2 which comes after inclusion number 1</li>
                        <li>This is inclusion number 3</li>
                    </ul>
                </Layers>
            </Pad>
        </Bottom>


    </Card >)
}

export const GiftCardList = () => {
    return <Grid gutter={"xl"} minItemWidth="16rem">
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
    </Grid>
}