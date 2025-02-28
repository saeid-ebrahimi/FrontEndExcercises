import {
    Card, CardHeader, CardMedia, CardContent,
    CardActionArea,
    CardActions,
    Button, Avatar
} from "@mui/material";

export function CardFunctionality() {
    const testImage = `/src/assets/test.jpeg`
    // const testVideo = `/src/assets/Do_not_let_them_underestimate_you.mp4`
    // const testAudio = `/src/assets/Lil_Wayne.mp3`
    return (
        <Card sx={{ width: 350, margin: 3 }}
            // elevation={12}
            // raised
            variant={"outlined"}
        >
            <CardHeader
                avatar={<Avatar alt={"writer"} src={testImage}>W</Avatar>}
                action={<Button size={"small"} variant="contained" onClick={() => {
                    console.log("Have some adventure");
                }}>Adventure</Button>} title={"My Card"} subheader={"February 28 2025"} />
            <CardActionArea onClick={() => { console.log("Card Clicked") }}>
                <CardMedia component={"img"} image={testImage} alt={"test media"} height={300} />
                {/* <CardMedia component={"video"} height={300} preload={"metadata"} poster={testImage} controls src={testVideo} /> */}
                {/* <CardMedia component={"audio"} controls src={testAudio} /> */}
                <CardContent>Here is the content of the card</CardContent>
            </CardActionArea>
            <CardActions
            // disableSpacing
            >
                <Button variant={"outlined"} onClick={() => { console.log("View More") }} >View More</Button>
                <Button variant={"outlined"} onClick={() => { console.log("Close") }}>Close</Button>
            </CardActions>

        </Card>
    )
}
