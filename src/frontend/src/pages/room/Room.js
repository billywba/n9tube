import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import VideoSearchInput from "../../components/video/VideoSearch";
import ViewerList from "../../components/viewerlist/ViewerList";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function Room() {
  // Contains an array of objects of current connected viewers
  const [viewerList, setViewerList] = useState([]);

  // Stores current video URL source
  const [currentVideoURL, setCurrentVideoURL] = useState(
    "https://www.youtube.com/watch?v=fizcJUBCx5Y-U"
  );

  useEffect(() => {
    console.log("Connected to room");

    socket.on("connect", () => {
      console.log(socket.id);
      setViewerList((viewerList) => [...viewerList, { username: socket.id }]);
    });
  }, [socket]);

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
