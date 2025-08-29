import styled from "styled-components";
import { Layers } from "../1-layers-pattern/start";

export const Card = styled.div`
  border: 1px solid crimson;
  border-radius: 1rem;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 0.2),
    rgba(255, 128, 0, 0.2),
    rgba(255, 255, 0, 0.2),
    rgba(0, 255, 0, 0.2),
    rgba(0, 0, 255, 0.2),
    rgba(139, 0, 255, 0.2),
    rgba(255, 20, 147, 0.2)
  );
`;

export const Top = (props) => <Layers {...props} gutter="m" />;

export const Bottom = styled.div`
  border-top: 1px solid crimson;
`;

export const Button = styled.div`
  background-color: crimson;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 0.25rem;
`;

export const Description = styled.p`
  color: gray;
`;

export const Price = styled.span`
  font-size: 1.5rem;
`;

export const Name = styled.strong`
  font-size: 1.25rem;
`;
