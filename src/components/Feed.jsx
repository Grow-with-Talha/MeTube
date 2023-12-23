import { useEffect, useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchfromAPI'


const Feed = () =>  { 
  const [selectedCategory, setselectedCategory] = useState("New")
  const [videos, setvideos] = useState([])


  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&type=video,channel`)
      .then((data) => setvideos(data.items))
    }, [selectedCategory]);



  return(
  <Stack sx={{flexDirection: { sx: "column", md: "row"}}}>
    <Box sx={{height: { sx: "auto", md: "92vh"},
borderRadius: "1px solid red", px:{sx: 0, md: 2}, zIndex: 999}}>
      <SideBar
      selectedCategory={selectedCategory}
      setselectedCategory={setselectedCategory}/>
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © GrowwithTalha
        </Typography>
    </Box>

    <Box p={4} sx={{overflowY:"auto", height: "90vh", flex: "2"}}>
      <Typography variant='h4' fontWeight={"bold"} mb={3} sx={{color: "white"}}>
      {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  </Stack>
  )
}


export default Feed