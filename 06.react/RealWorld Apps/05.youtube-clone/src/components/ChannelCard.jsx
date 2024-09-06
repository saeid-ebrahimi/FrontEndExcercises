import {Link} from "react-router-dom"
import {Box, Typography, CardContent,  CardMedia} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoThumbnailUrl, demoProfilePicture, logo} from "../utils/constants";


const ChannelCard = ({channelDetail}) => (
    <Box sx={{boxShadow:"none", borderRadius:"20px", display:"flex", justifyContent: "center", alignItems:"center", width: {xs:'356px', md: '320px'}, height:"326px", margin:"auto"} }>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center", color:"#fff"}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius: "50%", height:"180px", width: "180px", mb:2, border: '1px solid #e3e3e3'}}
                />
                <Typography variant={"h6"}>
                    {channelDetail?.snippet?.title}<CheckCircle sx={{fontSize: 16, color: "gray", ml:"8px"}} />
                </Typography>
                {channelDetail?.statistics && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)
export default ChannelCard;