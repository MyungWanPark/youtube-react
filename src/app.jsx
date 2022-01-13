import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const display = selectedVideo ? "list" : "grid";

  const onSearch = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query)
        .then((items) => setVideo(items))
        .catch((error) => console.log("error", error));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .popularVideos()
      .then((videos) => setVideo(videos.items))
      .catch((error) => console.log("error", error));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={display}
          />
          ;
        </div>
      </section>
    </div>
  );
}

export default App;
