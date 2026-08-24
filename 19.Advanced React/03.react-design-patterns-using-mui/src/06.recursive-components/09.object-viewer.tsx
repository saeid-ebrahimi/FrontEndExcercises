import { Box, Typography } from "@mui/material";

export function ObjectViewer({
    value,
    level = 0,
}: {
    value: unknown;
    level?: number
}) {
    if (typeof value !== "object" || value === null) {
        return <Typography component={"span"} sx={{ pl: 2 }} >{String(value)}</Typography>;
    }

    return (
        <Box sx={{ pl: level * 2 + 2 }} >
            {Object.entries(value).map(([key, child]) => (
                <Box key={key}>
                    <Typography component={"strong"} >{key}:</Typography>

                    <ObjectViewer value={child} level={level + 1} />
                </Box>
            ))}
        </Box>
    );
}