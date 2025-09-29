import React, { useRef } from "react";
import "./Video.css";
import video from "../../assets/drifting.mp4";
function Video({ VideoPlay, setVideoPlay }) {
  const closePlayer = (e) => {
    if ((e.target === Player.current)) {
      setVideoPlay(false);
    }
  };

  const Player = useRef(null);
  return (
    <div
      className={`Video${VideoPlay ? "" : "hide"}`}
      ref={Player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default Video;
