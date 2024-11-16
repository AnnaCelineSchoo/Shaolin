import React from "react";
import Video from "../components/Video.jsx"
import { useParams } from "react-router-dom";

function VideoPage(){
    const { videoId } = useParams(); // Get the YouTube video ID from the route parameter

    

    return (
        <div className="text-center">
            <Video link={videoId}/>
        </div>
    )
}

export default VideoPage;


