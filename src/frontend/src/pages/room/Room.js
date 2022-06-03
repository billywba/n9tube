import ReactPlayer from 'react-player/youtube'

function Room() {
    return (
        <>
            {/* <h1>ROOM</h1> */}
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=fizcJUBCx5Y-U' 
                width='1280px' 
                height='720px'
                controls='1'
            />
        </>
    );
}

export default Room;
