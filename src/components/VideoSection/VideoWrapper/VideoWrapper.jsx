import { useState, useCallback, memo } from "react";

import Loader from "../../Loader";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "5px",
};

const videoContainerStyle = {
  aspectRatio: "16 / 9",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "rgb(17 22 38 / 35%)",
  borderRadius: "12px",
};

function VideoWrapper({ youtubelink, vkvideolink, title }) {
  const [activeSource, setActiveSource] = useState("vk");
  const [isLoading, setIsLoading] = useState(true);

  const changeSourseHandle = useCallback((source) => {
    setIsLoading(true);
    setActiveSource(source);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={buttonGroupStyle}>
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
      <div style={videoContainerStyle}>
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

export default memo(VideoWrapper);
