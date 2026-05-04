import { Container } from "@mui/material";

export function ContainerDemo() {
    return <>
        <Container
            component={"main"}
            maxWidth={"xl"}
            sx={{
                minHeight: "100vh",
                height: "100vh",
                bgcolor: "lightgreen"
            }}
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim omnis veniam aliquid quam? Voluptatibus commodi placeat, iure aut eos nihil possimus eligendi facere aperiam reiciendis saepe ipsum explicabo temporibus nobis!</Container>
    </>
}