import styled from "styled-components";
import type { THeaderProps } from "./header.types";

const StyledHeader = styled.header<THeaderProps>`
  padding: 1rem 2rem;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

export function Header({ bgColor }: THeaderProps) {
    return <StyledHeader bgColor={bgColor}>My Website</StyledHeader>;
}
