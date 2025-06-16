import { Avatar, Grid, Hidden, Typography } from "@mui/material"
import { Share as ShareIcon, AddCircle as AddCircleIcon } from "@mui/icons-material"

const subscription = ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5", "Sub 6", "Sub 7 is a very long subscription name", "Sub 8"]
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
    ,
]

type Video = {
    title: string;
    viewCount: number;
    user: { name: string };
}

export default function GridDemo() {
    return (
        <Grid container minHeight={"100vh"}>
            <Hidden mdDown> <Grid item container md={2} direction={"column"} bgcolor={"lightblue"}>
                {subscription.map(sub => <Subscription key={sub} name={sub} />)}
            </Grid></Hidden>
            <Grid item container md={10} alignItems={{ md: "flex-start", xs: "center" }} direction={{ md: "row", xs: "column" }} bgcolor={"lightcoral"} p={5}>
                {videos.map(video => <Video video={video} />)}
            </Grid>
        </Grid>
    )
}

function Subscription({ name }: { name: string }) {
    return (
        <Grid item container p={1} gap={1} alignItems={"center"}>
            <Grid item xs={"auto"} >
                <Avatar alt={name} />
            </Grid>
            <Grid item xs container direction="column" zeroMinWidth wrap={"nowrap"}>
                <Grid item zeroMinWidth>
                    <Typography component={"h5"} noWrap variant={"h6"}>{name}</Typography>
                </Grid>
                <Grid item container>
                    <Grid item><AddCircleIcon sx={{ fontSize: 15 }} /></Grid>
                    <Grid item><ShareIcon sx={{ fontSize: 15 }} /></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

function Video({ video: { title, viewCount, user: { name } } }: { video: Video }) {
    return (
        <Grid item m={1}>
            <Grid container direction={"column"} gap={1} md>
                <Grid item height={"12rem"} width={"20rem"} bgcolor={"lightgray"} />
                <Grid item container>
                    <Grid item xs={2}>
                        <Avatar alt={name} />
                    </Grid>
                    <Grid item container direction={"column"} xs={10}>
                        <Grid item>
                            <Typography variant={"h5"}>{title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h6"}>{name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"caption"}>{viewCount}</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}