type TContentProps = {
    heading: {
        text: string;
    };

    paragraph: {
        text: string;
    };

    button: {
        label: string;
    };

    section: object;

    card: {
        title: string;
        description?: string;
    };
};

export type TContentNode = {
    [K in keyof TContentProps]: {
        type: K;
        props: TContentProps[K];
        children?: TContentNode[];
    };
}[keyof TContentProps];


export function ContentRenderer({
    node
}: { node: TContentNode }) {
    switch (node.type) {
        case "heading":
            return <Heading {...node.props} />;

        case "paragraph":
            return <Paragraph {...node.props} />;

        case "button":
            return <ButtonComponent {...node.props} />;

        case "card":
            return (
                <CardComponent {...node.props}>
                    {node.children?.map((child, index) => (
                        <ContentRenderer
                            key={index}
                            node={child}
                        />
                    ))}
                </CardComponent>
            );

        case "section":
            return (
                <Section>
                    {node.children?.map((child, index) => (
                        <ContentRenderer
                            key={index}
                            node={child}
                        />
                    ))}
                </Section>
            );
    }
    // const Component = components[node.type];

    // return (
    //     <Component {...node.props}>
    //         {node?.children?.map((child, index) => (
    //             <ContentRenderer key={index} node={child} />
    //         ))}
    //     </Component>
    // )
}


import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

function Heading({
    text,
}: {
    text: string;
}) {
    return (
        <Typography variant="h2">
            {text}
        </Typography>
    );
}

function Paragraph({
    text,
}: {
    text: string;
}) {
    return (
        <Typography variant="body1">
            {text}
        </Typography>
    );
}

function Section({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <Box
            sx={{
                p: 3,
                mb: 2,
            }}
        >
            {children}
        </Box>
    );
}

function ButtonComponent({
    label,
}: {
    label: string;
}) {
    return (
        <Button variant="contained">
            {label}
        </Button>
    );
}

function CardComponent({
    title,
    description,
    children,
}: {
    title: string;
    description?: string;
    children?: React.ReactNode;
}) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">
                    {title}
                </Typography>

                {description && (
                    <Typography>
                        {description}
                    </Typography>
                )}

                {children}
            </CardContent>
        </Card>
    );
}

