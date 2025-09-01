import { styled } from "styled-components";
import { spaceSchema } from "../common/spaces";


interface ILayersProps {
    gutter?: keyof typeof spaceSchema
}
export const Layers = styled.div<ILayersProps>`
 display: grid;
 gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.lg};

`
export function SubscribeForm() {
    return <Layers gutter={"xl"}>
        <Layers>
            <h2>Subscribe to Newsletter</h2>
            <p>Subscribe to the newsletter to receive other news</p>
        </Layers>
        <Layers>
            <Layers gutter="sm">
                <label htmlFor={"name"}>Name</label>
                <input type={"text"} id={"name"} />
            </Layers>

            <Layers gutter="sm">
                <label htmlFor={"email"}>Email</label>
                <input type={"text"} id={"email"} />
            </Layers>

            <button>Subscribe</button>
        </Layers>
    </Layers>
}