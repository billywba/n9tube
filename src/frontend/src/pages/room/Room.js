import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import VideoSearchInput from "../../components/video/VideoSearch";
import ViewerList from "../../components/viewerlist/ViewerList";
import io from "socket.io-client";


const socket = io.connect("http://localhost:3001");



function Room() {
  // Contains an array of objects of current connected viewers
  const [viewerList, setViewerList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0);

  // Stores current video URL source
  const [currentVideoURL, setCurrentVideoURL] = useState(
    // "https://www.youtube.com/watch?v=fizcJUBCx5Y-U"
    "https://www.youtube.com/watch?v=q3ATfbYXqpc"
  );

  useEffect(() => {
    console.log("Connected to room");

    socket.on("connect", () => {
      console.log(socket.id);
      // setViewerList((viewerList) => [...viewerList, { username: socket.id }]);
    });

    // all clients receive video url, set the currentvideourl state and video will be displayed in all browers connected to socket
    socket.on("videourl", (url) => {
      setCurrentVideoURL(url);
    })

    socket.on("onstart", (isStart) => {
      setIsPlaying(isStart);
    })

    socket.on("onready", (isReady) => {
      setIsReady(isReady);
      console.log(isReady);
    })

    socket.on("room:user_join", (new_user_socketid) => {
      console.log(new_user_socketid);
      setViewerList(new_user_socketid);
    });
  }, [socket]);

  const onPlay = () => {
    // setMuted(true);
    // setVolume(0)
    socket.emit("start", true)
    setIsPlaying(true)

  }

  const onPause = () => {
    socket.emit("start", false)
    setIsPlaying(false);
  }

  const onReady = () => {
    socket.emit("ready", true)
  }

  return (
    <>
      {/* <h1>ROOM</h1> */}

      <VideoSearchInput setCurrentVideoURL={setCurrentVideoURL} />

      <ReactPlayer
        url={currentVideoURL}
        width="1280px"
        height="720px"
        controls={true}
        muted={muted}
        volume={volume}
        // onStart={onStart}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        playing={isPlaying}
      />

      <ViewerList viewerList={viewerList} />
    </>
  );
}

export default Room;
