import styled from "styled-components";
import tshirt from "../../assets/tshirt.jpg";
import { Grid } from "../04.grid-pattern/start";
import { Description } from "./components";
interface IMediaWrapperProps { ratio: [number, number] }
export const MediaWrapper = styled.div<IMediaWrapperProps>`
    position: relative;
    width: 18rem;
    height:18rem;
    --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
    --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};
    aspect-ratio: var(--n) / var(--d);
    @supports not (aspect-ration: 1/1){
        padding-block-end: calc(var(--d)/var(--n) * 100%);
    }

    > * {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right:0;
        width: 100%;
        height: 100%;
    }
`;
const NewProducts = () => {
    return <div>
        <MediaWrapper ratio={[16, 9]}>
            <img src={tshirt} alt={"image of a T-Shirt"} />
            <Description>White T-Shirt - $19.99</Description>
        </MediaWrapper>
    </div>
}

export const NewProductsList = () => {
    return (<Grid gutter="xl" minItemWidth="18rem">
        <NewProducts />
        <NewProducts />
        <NewProducts />
        <NewProducts />
    </Grid>)
}