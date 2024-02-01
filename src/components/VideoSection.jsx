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
        src="https://www.youtube.com/embed/gi-LhzHWF-Y?si=W5H1jxLyjG406e1Z&amp;controls=0"
        title="YouTube"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  );
};

export default VideoSection;