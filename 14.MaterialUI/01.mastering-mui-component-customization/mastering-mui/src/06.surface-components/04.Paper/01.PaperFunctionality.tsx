import { Paper } from "@mui/material";

export function PaperFunctionality() {
    return (
        <Paper
            variant={"elevation"}
            elevation={20}
        // variant={"outlined"}
        // square
        >
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
        </Paper>
    )
}
