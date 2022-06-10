import axios from "axios";
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

  const handleWatchButtonOnClick = () => {
    /**
     * When watch is clicked, set the video player to the URL
     * '/' is the filter for URLs
     */
    if (videoSearchInputText.includes('/')) {
      console.log(`Loading ${videoSearchInputText}`);
      setCurrentVideoURL(videoSearchInputText);
    }
    /**
     * If the search field is left empty, log in console that nothing has been entered
     */
    else if (videoSearchInputText === "") {
      console.log("You entered nothing");
      setCurrentVideoURL(videoSearchInputText);
    }
    /**
     * If the user does not enter a link, log relevant search results from YouTube
     */
    else {
      const options = {
        method: 'GET',
        url: 'http://localhost:8000',
        params: {search: videoSearchInputText},
      }
      axios.request(options)
    }
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
