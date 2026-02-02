import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LinkButton from "../components/LinkButton";
import { releases } from "../data/releases";

function ReleasePage() {
  const page = useParams();
  const [currRelease, setCurrRelease] = useState({});

  console.log(currRelease.links);

  useEffect(() => {
    if (page.id) {
      setCurrRelease(releases.find((release) => release.id === page.id));
    }
  }, [page.id]);

  if (!currRelease.name) {
    return <div className="App" style={{ height: "100vh" }}></div>;
  }

  return (
    <div className="App">
      <main className="release-wrapper">
        <div className="release-main-container">
          <div className="release-top-container">
            <img
              className="release-image release-page-img"
              src={currRelease.imgnotext}
              alt=""
            />
            <div className="release-songname-container">
              <img
                height="70"
                src="../header-logo.webp"
                alt="Логотип Arushi Warma"
              />
              <p style={{ margin: "-5px 0 20px" }}>{currRelease.name}</p>
            </div>
          </div>
          <div className="release-bottom-container">
            <LinkButton
              hasName
              colorVariant
              name="Apple music"
              href={currRelease.links.applemusic}
              src="../links/apple-color.svg"
            />
            <LinkButton
              hasName
              colorVariant
              name="Yandex music"
              href={currRelease.links.yandex}
              src="../links/yandex-color.svg"
            />
            <LinkButton
              hasName
              colorVariant
              name="Spotify"
              href={currRelease.links.spotify}
              src="../links/spotify-color.svg"
            />
            <LinkButton
              hasName
              colorVariant
              name="VK музыка"
              href={currRelease.links.vkmusic}
              src="../links/vk-color.svg"
            />
            <LinkButton
              hasName
              colorVariant
              name="Deezer"
              href={currRelease.links.deezer}
              src="../links/deezer-color-2.svg"
            />
            <LinkButton
              hasName
              colorVariant
              name="Kion music"
              href={currRelease.links.kionmusic}
              src="../links/kion-color.svg"
            />
            <LinkButton
              hasName
              colorVariant
              name="Звук"
              href={currRelease.links.zvuk}
              src="../links/zvuk-color.svg"
            />
            <LinkButton
              hasName
              colorVariant
              name="Youtube music"
              href={currRelease.links.youtubemusic}
              src="../links/youtube-color.svg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ReleasePage;
