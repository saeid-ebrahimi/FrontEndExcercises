import { styled, Typography } from "@mui/material";

const StyledDiv = styled("div")(({ theme }) => ({
    ...theme.typography.button
}))
export function TypographyFunctionality() {
    return (
        <>
            {/* <Typography gutterBottom align={"center"} sx={{ width: "100%" }} variant={"h1"}>Header</Typography>
            <Typography align={"right"} sx={{ width: "100%" }} variant={"h2"}>Header</Typography>
            <Typography align={"center"} sx={{ width: "100%" }} variant={"h3"}>Header</Typography>
            <Typography sx={{ width: "100%" }} variant={"h4"}>Header</Typography>
            <Typography sx={{ width: "100%" }} variant={"h5"}>Header</Typography>
            <Typography sx={{ width: "100%" }} variant={"h6"}>Header</Typography>
            <Typography sx={{ width: "100%" }} variant={"subtitle1"}>Subtitle</Typography>
            <Typography sx={{ width: "100%" }} variant={"subtitle2"}>Subtitle</Typography>
            <Typography sx={{ width: "100%" }} variant={"overline"}>Overline</Typography>
            <Typography sx={{ width: "100%" }} component={"a"} variant={"button"}>Button</Typography>
            <Typography sx={{ width: "100%" }} variant={"caption"}>Caption</Typography> */}
            <div style={{ width: "200px" }}>
                <Typography noWrap variant={"body1"}>
                    Loremipsumdolorsitametconsecteturadipisicingelit.Temporibus
                </Typography>
            </div>
            <Typography sx={{ width: "100%" }} variant={"body2"}>Body</Typography>
            <StyledDiv >Styled div like a button</StyledDiv>
        </>
    )
}
