import styled from "styled-components";
import type { TContainerProps } from "./container.types";

export const Container = styled.div<TContainerProps>`
  flex: 1;
  padding: 2rem;
  background-color: ${(props) => props.bgColor};
`;
