import { Box } from "@mui/material";


export default function BoxFunctionality() {
    return (
        <>
            <Box component={"section"} marginBottom={(theme) => theme.spacing(6)} marginTop={(theme) => theme.spacing(10)} color={"secondary.main"} fontFamily={"Verdana"} fontSize={"2rem"} >
                <h1>Hello from Box</h1>
                <h2>Start Working with Box Component</h2>
            </Box>
            <div>test content</div>
        </>
    )
}
