import { useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import VideoSearchInput from '../video/VideoSearch';

function Room() {

    const [currentVideoURL, setCurrentVideoURL] = useState('https://www.youtube.com/watch?v=fizcJUBCx5Y-U' );

    return (
        <>
            {/* <h1>ROOM</h1> */}

            <VideoSearchInput />

            <ReactPlayer 
                url={currentVideoURL} 
                width='1280px' 
                height='720px'
                controls='1'
            />
        </>
    );
}

export default Room;
