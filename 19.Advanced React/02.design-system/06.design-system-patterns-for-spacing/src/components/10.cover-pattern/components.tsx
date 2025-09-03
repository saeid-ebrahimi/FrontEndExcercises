import styled from "styled-components";
import { Pad } from "../07.pad-pattern/start";

export interface IButtonProps {
  primary?: boolean;
}

export const Button = styled(Pad).attrs<IButtonProps>(() => ({
  padding: ["md", "xl"],
  as: "button",
}))`
  background: ${(props) => (props.primary ? "crimson" : "white")};
  color: ${(props) => (props.primary ? "white" : "crimson")};
  border: ${(props) => (props.primary ? "none" : "1px solid crimson")};
  border-radius: 0.25rem;
`;
