import { Button } from "@mui/material";


export function App() {
    return (
        <div className={"App"}>
            <h2 style={{
                color: "blue", marginBottom: "50px"
            }}>Start Editing</h2>
            <Button sx={{
                color: "warning.main",
                bgcolor: "whitesmoke",
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: (theme) => theme.palette.secondary.main,
                mt: "50px",
                py: "20px",
                px: 5,
                typography: "h3",
                fontFamily: "button.fontfamily",
                fontSize: 32,
            }} variant={"contained"}>My Button</Button>
        </div>
    )
}