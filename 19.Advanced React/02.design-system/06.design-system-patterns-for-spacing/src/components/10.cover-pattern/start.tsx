import { styled } from "styled-components";

import { Button } from "./components";
import { spaceSchema } from "../common/spaces";
import { InlineBundle } from "../05.inline-bundle/start";
import { Layers } from "../01-layers-pattern/start";
import { Pad } from "../07.pad-pattern/start";
import type { ReactNode } from "react";

export interface ICoverProps {
  children?: ReactNode;
  top?: ReactNode;
  bottom?: ReactNode;
  gutter?: keyof typeof spaceSchema;
  minHeight?: string;
}
export const Cover = styled.div.attrs<ICoverProps>(({ children, top, bottom }) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
})`
  display: grid;
  gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.lg};
  min-block-size: ${(props) => props.minHeight ?? "100vh"};

  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
        ? "auto 1fr"
        : bottom
          ? "1fr auto"
          : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;

const Top = () => {
  return (
    <InlineBundle gutter="xl" justify="end">
      <span>Home</span>
      <span>Products</span>
      <span>Blog</span>
      <span>Contact Us</span>
    </InlineBundle>
  );
};

const Bottom = () => {
  return (
    <InlineBundle gutter="xl" justify="center">
      <a href="/#">Terms and Rules</a>
    </InlineBundle>
  );
};

const HeroPage = () => {
  return (
    <Cover top={<Top />} bottom={<Bottom />} as={Pad} padding={["lg"]} >
      <Layers gutter="lg">
        <h1>CodeLicks</h1>
        <span>Learn and grow</span>
        <InlineBundle gutter="lg">
          <Button primary>Enroll now</Button>
          <Button>Register</Button>
        </InlineBundle>
      </Layers>
    </Cover >
  );
};

export default HeroPage;
