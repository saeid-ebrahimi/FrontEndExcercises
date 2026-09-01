import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

const StyledButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.25rem 0;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Button = ({ onClick, children }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
