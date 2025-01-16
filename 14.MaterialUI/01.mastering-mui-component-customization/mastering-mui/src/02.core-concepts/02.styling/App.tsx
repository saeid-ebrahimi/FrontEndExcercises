import { Box, Button } from "@mui/material";
import { useState } from "react";
import MenuDemo from "./MenuDemo";

export function App() {
    const [activated, setActivated] = useState(false)
    return <Box sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Button disabled onClick={() => { setActivated(prev => !prev) }} sx={[{
            bgcolor: activated ? "secondary.main" : "secondary.light"
        }, {
            "&.Mui-disabled": {
                color: "blue",
            }
        }]} variant={"contained"}>Contained</Button>
        <MenuDemo />
    </Box>
}