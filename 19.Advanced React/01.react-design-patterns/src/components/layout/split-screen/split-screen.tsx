
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

export function SplitScreen<T extends readonly React.ReactNode[]>({ children, childrenWidths }: SplitScreenProps<T>) {

    return <Container>
        {children && children.map((item, index) =>
            <Panel key={index} flex={childrenWidths[index]}>{item}</Panel>
        )}

    </Container >
}