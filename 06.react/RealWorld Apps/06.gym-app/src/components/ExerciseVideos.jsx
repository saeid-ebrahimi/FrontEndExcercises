import React from "react";
import {Box, Stack, Typography} from "@mui/material";

const ExerciseVideos = ({exerciseVideos, name}) => {
    if (!exerciseVideos.length) return "Loading"
    return (
        <Box sx={{marginTop:{lg:'200px', xs:"20px"}}} p="20px">
            <Typography variant={"h4"} mb={"33px"}>
                Watch <span style={{color: "#ff2625", textTransform:"capitalize"}}>{name}</span> Exercise Videos
            </Typography>
            <Stack
                justifyContent={"flex-start"}
                flexWrap={"wrap"}
                alignItems={"center"}
                sx={{
                    flexDirection:{lg:"row"}
                , gap:{lg:"50px", xs:"0"}
            }}
                >
                {exerciseVideos?.slice(0,6).map((item, index) => (
                    <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                       target={"_blank"} 
                       rel={"noopener noreferrer"}
                       key={`video${index}`} className={"exercise-video"}>
                        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                        <Box>
                            <Typography variant={"h5"} color={"#000"}>
                                {item.video.title}
                            </Typography>
                            <Typography variant={"h6"} color={"#000"}>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}
export default ExerciseVideos;
