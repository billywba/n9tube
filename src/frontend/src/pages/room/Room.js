import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import VideoSearchInput from "../../components/video/VideoSearch";

function Room() {
  const [currentVideoURL, setCurrentVideoURL] = useState(
    "https://www.youtube.com/watch?v=fizcJUBCx5Y-U"
  );

  return (
    <>
      {/* <h1>ROOM</h1> */}

      <VideoSearchInput setCurrentVideoURL={setCurrentVideoURL} />

      <ReactPlayer
        url={currentVideoURL}
        width="1280px"
        height="720px"
        controls={true}
      />
    </>
  );
}

export default Room;
