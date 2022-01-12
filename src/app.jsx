import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideo] = useState([]);

  const onSearch = (query) => {
    youtube
      .search(query)
      .then((items) => setVideo(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    youtube
      .popularVideos()
      .then((videos) => setVideo(videos.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
