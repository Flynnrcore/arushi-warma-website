export const VideoBackground = ({ children }) => {
  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/background.mp4"
        aria-hidden="true"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 0.6;
        }}
        poster="/background.webp"
      />
      <div className="background-video-overlay" aria-hidden="true" />
      <div className="app-content">{children}</div>
    </>
  );
};
