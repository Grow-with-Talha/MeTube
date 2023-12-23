import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../utils/constants"

const VideoCard = ({video: {id: { videoId }, snippet}}) => {
  return (
    <Card sx={{width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: "none"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
        sx={{width: 358, height: 180}}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="Bold" color="white"> {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
      </Link>
      <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="Bold" color="grey"> {snippet?.channelTitle || demoChannelTitle}<span><CheckCircle sx={{color: "grey", fontSize: 12, ml: "5px" }} /></span></Typography>
        
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard