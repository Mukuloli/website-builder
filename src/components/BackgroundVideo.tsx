"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure the video plays and handles autoplay policies gracefully
      const playVideo = () => {
        video.play().catch((err) => {
          console.warn("Autoplay prevented, retrying on user interaction...", err);
          // Try playing again when the user clicks or scrolls the page
          const startPlay = () => {
            video.play().catch(() => {});
            document.removeEventListener("click", startPlay);
            document.removeEventListener("touchstart", startPlay);
            document.removeEventListener("scroll", startPlay);
          };
          document.addEventListener("click", startPlay);
          document.addEventListener("touchstart", startPlay);
          document.addEventListener("scroll", startPlay);
        });
      };

      playVideo();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="global-video-bg"
      style={{ pointerEvents: "none" }}
    >
      <source src="/images/ai-automation-background-video.mp4" type="video/mp4" />
    </video>
  );
}
