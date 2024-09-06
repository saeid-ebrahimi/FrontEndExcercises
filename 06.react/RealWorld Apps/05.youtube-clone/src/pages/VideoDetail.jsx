import {useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import {Link} from "react-router-dom"
import ReactPlayer from "react-player";
import {Typography, Box, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Videos} from "../components";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${encodeURIComponent(id)}`)
            .then((data)=> setVideoDetail(data.items[0]))
            .catch((err)=> "loading...")
        fetchFromAPI(`videos?part=snippet&relatedToVideoId=${encodeURIComponent(id)}&type=video`)
            .then((data) => setVideos(data.items))
            .catch((err)=> "loading...")
    }, [id])
    if (videoDetail ){
        const {snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail;
        return(
            <Box minHeight={"95vh"}>
                <Stack direction={{xs:"column", md:"row"}}>
                    <Box sx={{width:"100%", position: "sticky", top: "86px"}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={"react-player"} controls />
                        <Typography color={"#fff"} variant={"h5"} fontWeight={"bold"} p={2}>
                            {title}
                        </Typography>
                        <Stack direction={"row"} justifyContent={"space-between"} sx={{color:"#fff"}} py={1} px={2}>
                        <Link to={`/channel/${channelId}`}>
                            <Typography variant={{sm:"subtitle1", md:"h6"}} color={"#fff"}>
                                {channelTitle}
                                <CheckCircle sx={{fontSize: "12px", color: "gray", ml: "5px"}} />
                            </Typography>
                        </Link>
                        <Stack direction={"row"} gap={"20px"} alignItems={"center"} >
                            <Typography variant={"body1"} sx={{opacity:0.7}}>
                                {parseInt(viewCount).toLocaleString()} views
                            </Typography>
                            <Typography variant={"body1"} sx={{opacity:0.7}}>
                                {parseInt(likeCount).toLocaleString()} likes
                            </Typography>
                        </Stack>
                        </Stack>
                    </Box>
                    {videos?.length>0 && (
                        <Box px={2} py={{md: 1, xs: 5}} justifyContent={'center'} alignItems={"center"}>
                            <Videos videos={videos} direction={"column"}/>
                        </Box>
                    )}

                </Stack>
            </Box>
        )
    }

    if (!videoDetail?.snippet) return "Loading..."
    if (!videos?.length) return "Loading"

}
export default VideoDetail;