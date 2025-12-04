'use client'

import Head from "next/head";
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
      <Head>
        <title>SurgeonUp - AI-SEO & Google AI Overviews Optimization for Aesthetic Surgeons</title>
        <meta name="description" content="SurgeonUp specializes in AI-SEO and Google AI Overviews (AI-OO) optimization for Aesthetic Surgeons. Guaranteed 10 new clients in 30 days with no upfront cost. Expert SEO services from Beverly Hills to Barcelona." />
        <meta name="keywords" content="AI-SEO, Google AI Overviews, Aesthetic Surgeons SEO, AI-OO optimization, surgeon marketing, medical SEO, client acquisition, SEO for surgeons" />
        <meta property="og:title" content="SurgeonUp - AI-SEO & Google AI Overviews Optimization for Aesthetic Surgeons" />
        <meta property="og:description" content="Guaranteed 10 new clients in 30 days. Specializing in AI-SEO and Google AI Overviews optimization for Aesthetic Surgeons. No upfront cost." />
        <meta property="og:url" content="https://surgeonup.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SurgeonUp" />
        <meta name="twitter:title" content="SurgeonUp - AI-SEO & Google AI Overviews Optimization for Aesthetic Surgeons" />
        <meta name="twitter:description" content="Guaranteed 10 new clients in 30 days. Specializing in AI-SEO and Google AI Overviews optimization for Aesthetic Surgeons." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://surgeonup.com/" />
      </Head>
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
