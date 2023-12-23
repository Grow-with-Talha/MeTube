import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchfromAPI'

const ChannelDetails = () => {
  const [channeldetail, setchanneldetail] = useState()
  const [videos, setvideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      
      setchanneldetail(data?.items[0]);
      
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      
      setvideos(videosData?.items);
    };
    
    fetchResults();
  }, [id]);
  
  
  
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          height: "300px",
          zIndex: "10"
        }} />
        <ChannelCard channelDetail={channeldetail} marginTop={"-93px"} />
        <Box display={'flex'} p={2}>
          <Box sx={{mr: {sm: '160px'}}}/>
          <Videos videos={videos} />
        </Box>

      </Box>
    </Box>
  );
};

export default ChannelDetails