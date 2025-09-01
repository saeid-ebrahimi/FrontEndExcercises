import { spaceSchema } from "../common/spaces";
import Card from "./card";
import { styled } from "styled-components";

interface IGridProps {
    gutter?: keyof typeof spaceSchema;
    minItemWidth?: string;
}

export const Grid = styled.div<IGridProps>`
    display: grid;
    gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.lg};
    grid-template-columns: repeat(auto-fit, minmax(min(${(props) => props.minItemWidth ?? "min-content"},"100%"), 1fr));
`
export function Cards() {
    return (
        <Grid minItemWidth={"24rem"} gutter={"xl"} >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Grid>
    )
}