
import styled from "styled-components";
import { Header } from "./header";
import { Footer } from "./footer";
import { Container } from "./container";
import type { ReactNode } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type TLayoutProps = {
    children: ReactNode;
    bgColor: string
}

export function Layout({ children, bgColor }: TLayoutProps) {
    return (
        <Wrapper>
            <Header bgColor={"gray"} />
            <Container bgColor={bgColor}>{children}</Container>
            <Footer bgColor={"gray"} />
        </Wrapper>
    );
}
