import { Avatar, Card, CardContent, CardHeader, Grid2 as Grid, Typography } from "@mui/material";
const videos = [
    { title: "Video Title 1", viewCount: 12000, user: { name: "YouTuber 1", }, },
    { title: "Video Title 2", viewCount: 14000, user: { name: "YouTuber 2", }, },
    { title: "Video Title 3", viewCount: 13000, user: { name: "YouTuber 3", }, },
    { title: "Video Title 4", viewCount: 14000, user: { name: "YouTuber 4", }, },
    { title: "Video Title 5", viewCount: 11000, user: { name: "YouTuber 5", }, },
    { title: "Video Title 6", viewCount: 11000, user: { name: "YouTuber 6", }, },
    { title: "Video Title 7", viewCount: 11000, user: { name: "YouTuber 7", }, },
    { title: "Video Title 8", viewCount: 11000, user: { name: "YouTuber 8", }, },
    { title: "Video Title 9", viewCount: 11000, user: { name: "YouTuber 9", }, },
]
import AvatarImg from "../../assets/test.jpeg"
export function Grid2Demo() {
    return <Grid container spacing={3}>
        {videos.map(video => <Grid size={{ xs: 12, sm: 6, md: 4, xl: 2 }} key={video.title}>
            <Card>
                <CardHeader avatar={<Avatar src={AvatarImg}>W</Avatar>} title={video.title} subheader={video.user.name} />
                <CardContent>
                    <Typography component={"p"} variant={"caption"}>{video.viewCount.toString()} Views</Typography>
                </CardContent>
            </Card>
        </Grid>)}
    </Grid>
}