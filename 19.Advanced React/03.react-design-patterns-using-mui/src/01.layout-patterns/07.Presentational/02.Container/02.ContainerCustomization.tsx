import { Container } from "@mui/material";


export default function ContainerCustomization() {
    return (
        <Container
            disableGutters
            component={"section"}
            role={"section"}
            maxWidth={"xl"}
            sx={{ bgcolor: "#8ec5ff", fontFamily: "Verdana", padding: "1rem", borderRadius: "1rem" }}>
            <h2>Start Using Container</h2>
            <div>Container Functionality</div>
        </Container>
    )
}
