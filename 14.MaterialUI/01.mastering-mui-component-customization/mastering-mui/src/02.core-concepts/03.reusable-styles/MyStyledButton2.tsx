import { styled, Button } from "@mui/material";

export const MyStyledButton2 = styled(Button)(({ theme }) => (
    {
        color: theme.palette.grey[300],
        backgroundColor: theme.palette.common.black,
        borderRadius: theme.shape.borderRadius * 8,
        padding: 13,
    }
))