import { Container } from "@mui/material";

export default function ContainerFunctionality() {
    return (
        <>
            <Container disableGutters component={"section"} maxWidth={"xl"} sx={{ bgcolor: "#8ec5ff" }}>
                <h2>Start Using Container</h2>
                <div>Container Functionality</div>
            </Container>
            <Container component={"section"} fixed maxWidth={"xl"} sx={{ bgcolor: "#8ec5ff", textAlign: "center" }}>
                <h2>Start Using Container</h2>
                <div>Container Functionality</div>
            </Container>
        </>
    )
}
