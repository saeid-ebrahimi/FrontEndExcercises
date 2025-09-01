import type { ReactNode } from "react";
import { Pad } from "../07.pad-pattern/start";
import { Center } from "../08.center-pattern/start";


export const Description = (props: { children: ReactNode }) => (
  <Pad padding={["lg"]}>
    <Center maxWidth={"400px"} centerText={true}>{props.children}</Center>
  </Pad>
);
