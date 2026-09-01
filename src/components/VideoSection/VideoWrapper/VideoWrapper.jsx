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
        <span className="video-src-btn">|</span>
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
      <div
        style={{
          aspectRatio: "16 / 9",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "rgb(17 22 38 / 35%)",
          borderRadius: "12px",
        }}
      >
        <iframe
          src={activeSource === "vk" ? vkvideolink : youtubelink}
          title={`${activeSource} video - ${title}`}
          className={`video ${isLoading ? "hidden" : ""}`}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          onLoad={() => setIsLoading(false)}
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoWrapper;
