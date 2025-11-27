import React from "react";
import styles from "./video.module.css";

export default function Video() {
  return (
    <div className={styles.videoContainer}>
       <div className={styles.container}>
      <h3 className={`${styles.title} ${styles?.step4}`}>Real clients in 30 days. Guaranteed.</h3>
        <div className={`${styles.videoWrapper} ${styles.step5}`}>
        <video 
          className={styles.video} 
          controls 
          muted 
          autoPlay={false}
        >
          <source src="/sampleVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
       </div>
    </div>
  );
}