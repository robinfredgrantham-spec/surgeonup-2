'use client'

import Landing from "@/components/landing/landing";
import Services from "@/components/services/services";
import Video from "@/components/video/video";
import { useRef, useEffect } from "react";

export default function Home() {

  const servicesRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll to Services
  const scrollToServices = () => {
    const section = servicesRef.current;
    const y = section.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // Scroll to Video
  const scrollToVideo = () => {
    const section = videoRef.current;
    const y = section.getBoundingClientRect().top + window.scrollY - 122;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // Auto scroll → first Services, then Video
  useEffect(() => {
    // After 41 sec scroll to Services
    const timer1 = setTimeout(() => {
      scrollToServices();
    }, 41000);

    // After 60 sec scroll to Video
    const timer2 = setTimeout(() => {
      scrollToVideo();
    }, 50000); // Change time according to your need

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <Landing handleScroll={scrollToServices} />

      <div ref={servicesRef} id="services-section">
        <Services />
      </div>

      <div ref={videoRef} id="video-section">
        <Video />
      </div>
    </>
  );
}
