import React from "react";
import { useNavigate } from "react-router-dom";

function Video({ link, description, name }) {
  const navigate = useNavigate();

  return (
    <div className="video-container">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${link}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#c62828",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Video;
