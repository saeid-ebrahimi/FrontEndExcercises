import {
    Card, CardHeader, CardMedia, CardContent,
    CardActionArea,
    CardActions,
    Button, Avatar
} from "@mui/material";

export function CardCustomization() {
    const testImage = `/src/assets/test.jpeg`
    return (
        <Card sx={{ maxWidth: 450, margin: 3, bgcolor: "#1E293B", color: "#F1F5F9", }}
            // variant={"elevation"}
            // elevation={12}
            variant={"outlined"}
        >
            <CardHeader
                sx={{
                    "& .MuiCardHeader-title": {
                        fontSize: "1.3rem",
                        color: "#F1F5F9",
                        fontFamily: "Verdana"
                    },
                    "& .MuiCardHeader-subheader": {
                        color: "#F1F5F9",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                    },
                }}
                title={"My Card"}
                subheader={"February 28 2025"}
                avatar={<Avatar alt={"writer"} sx={{
                    bgcolor: "#F1F5F9",
                    borderColor: "#F1F5F9",
                    color: "#1E293B",
                }} src={testImage}>W</Avatar>}
                action={<Button sx={{
                    bgcolor: "#F1F5F9",
                    borderColor: "#F1F5F9",
                    color: "#1E293B",
                }} size={"small"} variant="contained" onClick={() => {
                    console.log("Have some adventure");
                }}>Adventure</Button>}
            />
            <CardActionArea
                // disableRipple
                sx={{
                    "& .MuiTouchRipple-ripple": {
                        color: "#475569",
                    }
                }}
                onClick={() => { console.log("Card Clicked") }}>
                <CardMedia sx={{
                    width: "95%",
                    mx: "auto"
                }} component={"img"} image={testImage} alt={"test media"} height={300} />
                <CardContent sx={{
                    fontFamily: "verdana",
                    color: "#E2E8F0",
                    fontSize: "0.9rem"
                }}>Here is the content of the card</CardContent>
            </CardActionArea>
            <CardActions sx={{
                "& > button": {
                    color: "#F1F5F9",
                    borderColor: "#F1F5F9",
                    fontSize: "0.75rem",
                    fontFamily: "verdana",
                    textTransform: "capitalize"
                }
            }}
            >
                <Button variant={"outlined"} onClick={() => { console.log("View More") }} >View More</Button>
                <Button variant={"outlined"} onClick={() => { console.log("Close") }}>Close</Button>
            </CardActions>

        </Card>
    )
}


