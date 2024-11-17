import React from "react";
import Video from "../components/Video.jsx";
import { useParams, useLocation } from "react-router-dom";

function VideoPage() {
  const { videoId } = useParams(); // Get the YouTube video ID from the route parameter
  const location = useLocation();

  // Extract query parameters using URLSearchParams
  const queryParams = new URLSearchParams(location.search);
  const description =
    queryParams.get("description") || "No description available";
  const name = queryParams.get("name") || "Untitled Video";

  console.log(description, "/ ", name);
  return (
    <div className="text-center">
      <Video link={videoId} description={description} name={name} />
    </div>
  );
}

export default VideoPage;
