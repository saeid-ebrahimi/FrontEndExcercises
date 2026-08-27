import { Box, Paper, Typography } from "@mui/material";

type PageProps = {
    title: React.ReactNode;
    actions?: React.ReactNode;
    content: React.ReactNode;
};

export function Page({ title, actions, content }: PageProps) {
    return (
        <Paper component={"section"}>
            <Box display={"flex"} gap={2} justifyContent={"space-between"}>
                <Typography variant={"h3"} component={"h1"}>{title}</Typography>
                <Box>{actions}</Box>
            </Box>
            <Box>{content}</Box>
        </Paper>
    )
}