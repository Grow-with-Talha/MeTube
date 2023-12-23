import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import NavBar from "./components/NavBar"
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetails"
import ChannelDetails from "./components/ChannelDetails"
import SearchFeed from "./components/SearchFeed"

const App = () => (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000"}} >
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/video/:id"  element={<VideoDetail/>}/>
          <Route path="/channel/:id"  element={<ChannelDetails/>}/>
          <Route path="/search/:searchterm"  element={<SearchFeed/>}/>
        </Routes>
      </Box>

    </BrowserRouter>
  )


export default App