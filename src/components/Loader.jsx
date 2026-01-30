function Loader() {
  return (
    <div className="loader-wrapper">
      <img className="loader-img" src="/video.svg" alt="" />
      <p style={{ color: "white", lineHeight: 0, margin: 0 }}>Загрузка...</p>
    </div>
  );
}

export default Loader;
