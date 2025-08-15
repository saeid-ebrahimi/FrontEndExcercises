import type { IRecursiveProps, RecursiveObject } from "./recursive.types";

const isString = (data: RecursiveObject | string) =>
    typeof data === "string";

export const Recursive = ({ data }: IRecursiveProps) => {
    if (isString(data)) {
        return <li>{data}</li>;
    } else {
        const pairs = Object.entries(data)
        return <>
            {pairs.map(([key, value]) => {

                return (<li>{key}: <ul>
                    <Recursive data={value} />
                </ul></li>)

            })}
        </>
    }

};
