import { useState } from "react";

function VideoSearchInput({ setCurrentVideoURL }) {
    
    const [videoSearchInputText, setVideoSearchInputText] = useState('');

    const handleWatchButtonOnClick = () => {
        console.log(`Loading ${videoSearchInputText}`);
        setCurrentVideoURL(videoSearchInputText);
    }

    const handleVideoSearchInputChange = (event) => {
        setVideoSearchInputText(event.target.value);
    }

    return (
        <>
            <input onChange={handleVideoSearchInputChange} placeholder="Enter YouTube URL" />
            <button onClick={handleWatchButtonOnClick}>Watch</button>
        </>
    );
}

export default VideoSearchInput;
