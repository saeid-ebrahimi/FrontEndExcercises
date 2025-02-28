import { Paper } from "@mui/material";

export function PaperCustomization() {
    return (
        <Paper
            sx={{
                padding: 3,
                bgcolor: "#0F172A",
                color: "#E2E8F0",
                fontFamily: "verdana",
                fontSize: "1.1rem",
                minWidth: "200px",
                maxWidth: "400px",
                height: "10rem",
                overflowY: "auto"
            }}
        >
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
        </Paper>
    )
}
