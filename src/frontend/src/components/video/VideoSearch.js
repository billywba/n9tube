import { useEffect, useState } from "react";
import io from "socket.io-client";

/**
 * Provides input field and button for user to update the current video playing
 * @param {function} setCurrentVideoURL - function to update the video player URL prop
 */

const socket = io.connect("http://localhost:3001");



function VideoSearchInput({ setCurrentVideoURL }) {
  /**
   * Holds the current text in the search input element
   */
  const [videoSearchInputText, setVideoSearchInputText] = useState("");

  useEffect(() => {
    socket.on("vidSearchInput", (msg) => {
      setVideoSearchInputText(msg)
    });
  }, [socket])

  /**
   * When watch is clicked, set the video player to the URL
   */
  const handleWatchButtonOnClick = () => {
    console.log(`Loading ${videoSearchInputText}`);
    // when watch button is clicked emit event with the youtube url
    socket.emit("video", videoSearchInputText);
    setCurrentVideoURL(videoSearchInputText);
  };

  /**
   * Update state which holds value of the input element
   * @param {*} event
   */
  const handleVideoSearchInputChange = (event) => {
    socket.emit("videoTextInput", event.target.value)
    setVideoSearchInputText(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={videoSearchInputText}
        onChange={handleVideoSearchInputChange}
        placeholder="Enter YouTube URL"
      />
      {/* Temp styling so button is visible */}
      <button style={{ color: 'white', border: "1px solid white", margin: "1rem" }} onClick={handleWatchButtonOnClick}>Watch</button>
    </>
  );
}

export default VideoSearchInput;
