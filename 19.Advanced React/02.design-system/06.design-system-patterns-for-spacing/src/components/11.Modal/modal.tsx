import { styled } from "styled-components";
import { Center } from "../08.center-pattern/start";
import { Inline } from "../06.inline/start";
import { Layers } from "../01-layers-pattern/start";
import { Pad } from "../07.pad-pattern/start";
import { Cover } from "../10.cover-pattern/start";

import registerImage from "../../assets/register.png";
import closeImage from "../../assets/close.svg";

const ContentArea = styled(Layers).attrs(() => ({
    as: Pad,
    padding: ["lg"],
    gutter: "md"
}))`
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
`
const StyledImg = styled(Center).attrs(() => ({
    as: "img",
}))`
    ${(props) => props?.maxWidth && "max-width"}
`
interface ITextProps {
    fontSize: string;
}
const Text = styled(Center).attrs<ITextProps>(() => ({
    as: "span",
}))`
    font-size: ${(props) => props.fontSize};

`

const Button = styled(Center).attrs(() => ({
    as: "button"
}))`
    border-radius: 5px;
    cursor: pointer;
    background-color: #03045e;
    color:white;
    border: 3px solid transparent;
    font-size: 18px;
`

export function Modal() {

    return <Cover as={Center} maxWidth={"50rem"}>
        <ContentArea>
            <Inline justify={"end"}>
                <img src={closeImage} />
            </Inline>
            <StyledImg src={registerImage} alt={"a-person-penning-a-door"} maxWidth={"30rem"} />
            <Layers gutter={"lg"}>
                <Layers gutter={"sm"}>
                    <Text maxWidth={"100%"} fontSize={"2rem"}>Register</Text>
                    <Text maxWidth={"100%"} fontSize={"1.2rem"}>Register and Unlock All The Features</Text>
                </Layers>
                <Button maxWidth={"fit-content"}>
                    <Pad padding={["md", "xl"]}>
                        Register
                    </Pad>
                </Button>
            </Layers>
        </ContentArea>
    </Cover>
}