import type { SplitScreenProps } from "./split-screen.types";
import styled from "styled-components";

type PanelProps = {
    flex: number;
};

const Container = styled.div`
    display: flex;
`
const Panel = styled.div<PanelProps>`
    flex:${(props) => props.flex};
`

export function SplitScreen({ children, childrenWidths }: SplitScreenProps) {

    return <Container>
        {children && children.map((item, index) =>
            <Panel key={index} flex={childrenWidths[index]}>{item}</Panel>
        )}

    </Container >
}