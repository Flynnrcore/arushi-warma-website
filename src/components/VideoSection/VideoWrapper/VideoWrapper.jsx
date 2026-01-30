import { useState } from "react";

import Loader from "../../Loader";

function VideoWrapper({ youtubelink, vkvideolink, title }) {
  const [activeSource, setActiveSource] = useState("vk");
  const [isLoading, setIsLoading] = useState(true);

  const changeSourseHandle = (source) => {
    setIsLoading(true);
    setActiveSource(source);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
      }}
    >
      <div style={{ display: "flex", gap: "5px" }}>
        <button
          onClick={() => changeSourseHandle("vk")}
          type="button"
          className="video-src-btn"
          style={{
            fontWeight: activeSource === "vk" ? "bold" : "normal",
          }}
        >
          Vk video
        </button>
        <span className="video-src-btn">/</span>
        <button
          onClick={() => changeSourseHandle("youtube")}
          type="button"
          className="video-src-btn"
          style={{
            fontWeight: activeSource === "youtube" ? "bold" : "normal",
          }}
        >
          Youtube
        </button>
      </div>
      {isLoading && <Loader />}
      <iframe
        src={activeSource === "vk" ? vkvideolink : youtubelink}
        title={`${activeSource} video - ${title}`}
        className={`video ${isLoading ? "hidden" : ""}`}
        width="100%"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        onLoad={() => setIsLoading(false)}
        allowFullScreen
      />
    </div>
  );
}

export default VideoWrapper;
