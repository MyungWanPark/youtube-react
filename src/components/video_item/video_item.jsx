import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayStyle = display === "grid" ? styles.grid : styles.list;
    return (
      <li
        className={`${styles.container} ${displayStyle}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            src={snippet.thumbnails.medium.url}
            alt="video thumbnail"
            className={styles.thumbnail}
          />
          <div className={styles.metaData}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
