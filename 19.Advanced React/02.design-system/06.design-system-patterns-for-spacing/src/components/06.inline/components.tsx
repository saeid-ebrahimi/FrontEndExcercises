import styled from "styled-components";
import { spaceSchema } from "../common/spaces";

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

interface ILogoProps {
  size?: string; // اختیاری یا الزامی بسته به نیاز
}


export const Logo = styled.div.attrs<ILogoProps>(() => ({ size: "3rem" }))`
  border-radius: 50%;
  background-color: #5e0000;
  inline-size: ${({ size }) => size};
  block-size: ${({ size }) => size};
`;

export const MenuWrapper = styled(Pad).attrs<IPadProps>(() => ({ padding: ["md"] }))`
  border: 1px solid black;
`;

export const Button = styled(Pad).attrs<IPadProps>(() => {
  return {
    as: "button",
    padding: ["md", "lg"],
  };
})`
  background: #340025;
  color: white;
  border: none;
  border-radius: 0.25rem;
`;
