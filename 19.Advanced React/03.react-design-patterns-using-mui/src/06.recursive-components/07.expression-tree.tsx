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
        return <span>{node.value}</span>;
    }

    return (
        <span>
            (
            <ExpressionNode node={node.left} />
            {" "}{node.operator}{" "}
            <ExpressionNode node={node.right} />
            )
        </span>
    );
}