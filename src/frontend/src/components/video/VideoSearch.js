import { useState } from "react";

/**
 * Provides input field and button for user to update the current video playing
 * @param {function} setCurrentVideoURL - function to update the video player URL prop
 */
function VideoSearchInput({ setCurrentVideoURL }) {
  /**
   * Holds the current text in the search input element
   */
  const [videoSearchInputText, setVideoSearchInputText] = useState("");

  /**
   * When watch is clicked, set the video player to the URL
   */
  const handleWatchButtonOnClick = () => {
    console.log(`Loading ${videoSearchInputText}`);
    setCurrentVideoURL(videoSearchInputText);
  };

  /**
   * Update state which holds value of the input element
   * @param {*} event
   */
  const handleVideoSearchInputChange = (event) => {
    setVideoSearchInputText(event.target.value);
  };

  return (
    <>
      <input
        onChange={handleVideoSearchInputChange}
        placeholder="Enter YouTube URL"
      />
      <button onClick={handleWatchButtonOnClick}>Watch</button>
    </>
  );
}

export default VideoSearchInput;
