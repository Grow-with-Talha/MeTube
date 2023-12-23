import { Box, Stack } from "@mui/material"
import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"

const Videos = ({ videos, direction }) => {
  if (!videos || videos.length === 0) {
    return <div>Loading...</div>; // or any loading indicator
  }
  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};



export default Videos