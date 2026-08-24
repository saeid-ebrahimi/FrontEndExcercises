import { Typography } from "@mui/material";

export type TExpression =
    | {
        type: "number";
        value: number;
    }
    | {
        type: "operator";
        operator: "+" | "-" | "*" | "/";
        left: TExpression;
        right: TExpression;
    };

export function ExpressionNode({
    node,
}: {
    node: TExpression;
}) {
    if (node.type === "number") {
        return <Typography component={"span"}>{node.value}</Typography>;
    }

    return (
        <Typography component={"span"}>
            (
            <ExpressionNode node={node.left} />
            {" "}{node.operator}{" "}
            <ExpressionNode node={node.right} />
            )
        </Typography>
    );
}