import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchfromAPI';

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [Video, setVideo] = useState([]);


  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&satistics&id=${id}`).then(data =>
      setVideoDetails(data.items[0]));
    fetchFromAPI(`search?part=id,snippet&relatedToVideoId=${id}&type=video`).then(data =>
      setVideo(data.items));
  }, [id]);
  console.log(Video)
  // Check if videoDetails is null before accessing its properties
  if (!videoDetails) {
    return <div style={{color: "white", fontSize:"100px"}}>Loading...</div>; // You can replace this with a loading spinner or message
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              className="react-player"
              controls
              playing={true}
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography color={"#fff"} variant={'h5'} fontWeight={"bold"} p={2}>
              {title}
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"} sx={{color: "#fff"}} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sx:"subtitle1", md: "h6"}} color={'#fff'}>
                    {channelTitle}<span><CheckCircle sx={{fontSize: "12px", color: "grey", ml:"5px"}}/></span>
                  </Typography>
                </Link>
                <Stack direction={'row'} gap={'20px'} alignItems={'center'} >
                  <Typography variant={"subtitle1"} sx={{opacity: 0.7}} color={'#fff'}>
                    {parseInt(viewCount).toLocaleString()} views
                 </Typography>
                  <Typography variant={"subtitle1"} sx={{opacity: 0.7}} color={'#fff'}>
                    {parseInt(likeCount).toLocaleString()} likes
                 </Typography>
                </Stack>
              </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md: 1, xs:5}} justifyContent={"center"}>
        <Videos videos={Video} direction={"column"} />
      </Box>
      </Stack>

    </Box>
  );
};

export default VideoDetails;
