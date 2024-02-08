const VideoSection = () => {
  return (
    <div className="video-section">
      <iframe
      className="video"
      src="https://www.youtube.com/embed/ZLaS0psJOCw?si=EktXJDqNz18mg1lL"
      title="YouTube"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      />
      <iframe
        className="video" 
        src="https://www.youtube.com/embed/z6re6Qmoafw?si=YZLnLATYQAZRDofa"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  );
};

export default VideoSection;