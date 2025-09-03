import styled from "styled-components";
import { Extras } from "./components";

interface ICenterProps {
    maxWidth: string;
    centerText?: boolean;
    centerChildren?: boolean;
}

export const Center = styled.div<ICenterProps>`
    box-sizing: content-box;
    margin-inline-end: auto;
    margin-inline-start: auto;
    max-inline-size: ${(props) => props.maxWidth};
    ${(props) => props.centerText && `text-align: center;`};
    ${(props) => props.centerChildren && `
    display: flex;
    flex-direction: column;
    alignItems: center;
    `}
`

export const Profile = () => {
    return (
        <Center maxWidth={"60ch"} centerText>
            <h2>I am title!</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt recusandae sapiente esse. Totam culpa aliquid, reiciendis adipisci iusto sapiente sunt ratione asperiores maxime deserunt laborum placeat incidunt molestias doloremque neque.
            </p>
            <Extras />
        </Center>
    )
}