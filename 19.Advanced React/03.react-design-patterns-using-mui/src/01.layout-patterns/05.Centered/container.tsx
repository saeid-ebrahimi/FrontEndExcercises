import { Container } from "@mui/material";

export function ContainerDemo() {
    return <Container maxWidth={"lg"} sx={{
        bgcolor: "lightblue",
        height: "100%"
    }}>
        Centered Using Container
    </Container>
}