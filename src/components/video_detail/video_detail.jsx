import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.video}>
      <iframe
        title={video.id}
        type="text/html"
        width="100%"
        height="360"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
      />
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
