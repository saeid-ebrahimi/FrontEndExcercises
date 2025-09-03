import styled from "styled-components";
import { spaceSchema } from "../common/spaces";
import { Split } from "../02-split-pattern/start";
import type { ReactNode } from "react";


export interface IPadProps {
  padding?: (keyof typeof spaceSchema)[];
}

const Pad = styled.div<IPadProps>`
  padding: ${(props) => {
    if (!props.padding) return "";
    return Array.isArray(props.padding)
      ? props.padding.map((padKey) => spaceSchema[padKey]).join(" ")
      : spaceSchema[props.padding];
  }};
`;

const Logo = styled.div`
  border-radius: 50%;
  background: linear-gradient(135deg, #ff2828, #d043ff);
`;

const MenuWrapper = styled(Pad)`
  border: 2px solid #f06292;
  border-radius: 0.5rem;
`;
export interface IMenuProps {
  switchAt?: number | string;
}
const Menu = styled(Split) <IMenuProps>`
  > ${Logo} {
    inline-size: 3rem;
    max-inline-size: 3rem;
    block-size: 3rem;
  }
`;


export interface IMenuBasis {
  children: ReactNode,
}
const MenuBasis = (props: IMenuBasis) => (
  <MenuWrapper padding={["sm"]}>
    <Menu gutter="lg" switchAt="35rem" fraction="auto-start">
      <Logo />
      {props.children}
    </Menu>
  </MenuWrapper>
);

export default MenuBasis;
