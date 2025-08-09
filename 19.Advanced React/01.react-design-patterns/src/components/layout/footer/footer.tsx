import styled from "styled-components";
import type { TFooterProps } from "./footer.types";

const StyledFooter = styled.footer<TFooterProps>`
  padding: 1rem 2rem;
  background-color: ${props => props.bgColor};
  color: white;
  font-size: 0.9rem;
  text-align: center;
`;

export function Footer({ bgColor }: TFooterProps) {
    return <StyledFooter bgColor={bgColor}>© 2025 My Website</StyledFooter>;
}
