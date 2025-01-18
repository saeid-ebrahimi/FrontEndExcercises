import { Box, Button } from "@mui/material";
import { useState } from "react";
import { MyStyledButton } from "./MyStyledButton";
import { MyStyledButton2 } from "./MyStyledButton2";
import { MyDynamicallyStyledButton } from "./MyDynamicallyStyledButton";
import { MyButtonUsingSimulatesClasses } from "./MyButtonUsingSimulatesClasses";


export function App() {
    const [activated, setActivated] = useState(false)
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
    }}>
        <Button onClick={() => { setActivated(prev => !prev) }} sx={[{
            bgcolor: activated ? "secondary.main" : "secondary.light"
        },
        ]} variant={"contained"}>Contained</Button>
        <MyStyledButton>I'm Styled!</MyStyledButton>
        <MyStyledButton2>Styled Using Theme</MyStyledButton2>
        <MyDynamicallyStyledButton color={"white"}>
            Reusable Dynamically Styled Button
        </MyDynamicallyStyledButton>
        <MyButtonUsingSimulatesClasses />
    </Box >
}