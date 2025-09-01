import { Pad } from "../7-pad-pattern/final";
import { Center } from "../8-center-pattern/final";

export const Description = (props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);
