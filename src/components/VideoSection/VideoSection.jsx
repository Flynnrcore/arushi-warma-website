import VideoWrapper from "./VideoWrapper/VideoWrapper";

function VideoSection() {
  return (
    <section className="video-section">
      <h2 className="header-text">видео / video</h2>
      <VideoWrapper
        youtubelink="https://www.youtube.com/embed/ZLaS0psJOCw?si=EktXJDqNz18mg1lL"
        vkvideolink="https://vkvideo.ru/video_ext.php?oid=-219955302&id=456239023&hash=499be83414b96290&hd=3"
        title="Больше чем того требует справедливость"
      />
      <VideoWrapper
        youtubelink="https://www.youtube.com/embed/z6re6Qmoafw?si=YZLnLATYQAZRDofa"
        vkvideolink="https://vkvideo.ru/video_ext.php?oid=-219955302&id=456239024&hash=cf1abf798d29a53e&hd=3"
        title="Человеком стать"
      />
    </section>
  );
}

export default VideoSection;
