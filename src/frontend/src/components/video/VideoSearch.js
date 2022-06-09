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
     * If the search field is left empty, alert the user that nothing has been entered
     */
    else if (videoSearchInputText == "") {
      console.log("You entered nothing");
      setCurrentVideoURL(videoSearchInputText);
    }
    /**
     * If the user does not enter a link, return relevant search results from YouTube
     * Needs to use YouTube API
     */
    else {
      let arrayOfSearchResults = [];
      return console.log("test");
      // for (let i = 0; i < 5; i++) {
      //   let video = video[i]
      //   arrayOfSearchResults.append(video)
      // }
      // return arrayOfSearchResults;
      // setCurrentVideoURL("https://www.youtube.com/watch?v=PMi4TMJvHzA");
    }
  };

  /**
   * Update state which holds value of the input element
   * @param {*} event
   */
  const handleVideoSearchInputChange = (event) => {
    setVideoSearchInputText(event.target.value);
  };

  // async function getSearchResults() {
  //   // google.options({auth});
  
  //   const res = await youtube.search.list({
  //     part: 'id,snippet',
  //     q: 'Node.js on Google Cloud',
  //   });
  //   console.log(res.data);
  // }

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
