function VideoSection() {
  return (
    <section className="video-section">
      <h2 className="header-text">видео / video</h2>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/ZLaS0psJOCw?si=EktXJDqNz18mg1lL"
        title="Arushi Warma - Больше чем того требует справедливость"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="auto"
      />
      <iframe
        className="video"
        src="https://www.youtube.com/embed/z6re6Qmoafw?si=YZLnLATYQAZRDofa"
        title="Arushi Warma - Человеком стать"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="auto"
      />
    </section>
  );
}

export default VideoSection;
