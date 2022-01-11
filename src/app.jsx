import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAVhWokcTJhJefw8uzdGYRv0OsM1jokGyA",
      requestOptions
    )
      .then((response) => response.json())
      .then((videos) => setVideo(videos.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
