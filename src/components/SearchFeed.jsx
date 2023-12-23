import { useEffect, useState } from 'react'
import {  Box, Typography } from '@mui/material'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchfromAPI'


const Feed = () =>  { 
  const [videos, setvideos] = useState([])
  const { searchterm } = useParams()


  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchterm}&type=video,channel`)
      .then((data) => setvideos(data.items))
    }, [searchterm]);



  return(
    <Box p={4} sx={{overflowY:"auto", height: "90vh", flex: "2"}}>
      <Typography variant='h4' fontWeight={"bold"} mb={3} sx={{color: "white"}}>
      Search result for <span style={{ color: "#FC1503" }}>{searchterm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}


export default Feed