import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import VideoSearchInput from "../../components/video/VideoSearch";
import ViewerList from "../../components/ViewerList/ViewerList";

function Room() {
  const [viewerList] = useState([
    {
      username: "test"
    },
    {
      username: "viewer2"
    }
  ]);

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

      <ViewerList viewerList={viewerList} />
    </>
  );
}

export default Room;
