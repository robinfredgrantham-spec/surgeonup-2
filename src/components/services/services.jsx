"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "./services.module.css";

import BrownStar from "./images/sergonup-star.png";
import PowerImg from "./images/rob1.jpeg";
import GoldStar from "./images/sergonup-brwonstar.png";
import Agency2 from "./images/sergonup-agency2.png";
import SilverStar from "./images/sergonup-silverstar.png";
import SilverStar3 from "./images/silverFor2nd.png";
import cupFor4 from "./images/cupFor4.png";
import wolf from "./images/rob44.jpeg";
import OpImg from "./images/sergonup-op.png";
import SvBtn from "./images/serviceButton.png";
import Video from "../video/video";
import Link from "next/link";

export default function Services({ ref }) {
  const cardsRef = useRef([]);

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index);
          // Add base delay of 6s, then 0.6s per card
          const delay = 2000 + idx * 2000; 
          setTimeout(() => {
            entry.target.classList.add(styles.animate);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  cardsRef.current.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => observer.disconnect();
}, []);


  const cardsData = [
    {
      title: "BRONZE OFFER",
      images: [BrownStar, PowerImg],
      desc: "A FREE website audit from a Cambridge graduate who has optimised elite Surgeons globally for over 25 years, from Beverly Hills to Barcelona, the UAE and beyond. A full AI-SEO analysis will reveal whether you're maximizing your digital presence and where to focus to surpass rivals. Tam's Semrush expertise delivers competitive advantage. Request yours now. Discover your untapped revenue.",
      url:'/services'
    },
    {
      title: "SOS RESCUE",
      images: [SilverStar3, OpImg],
      desc: "Lots of websites fragment your visibility and confuse Google about who the real Surgeon is. ALL your sites are penalised. Rivals dominate while your digital footprint conspires to ruin you. You’ll need 2 months of intense AI-SEO recovery to qualify for the certainty of Platinum’s guaranteed Clients. You should get at least a Client each month but in your situation it would be reckless to guarantee it.",
      url:'/services'
    },
    {
      title: "GOLD OFFER",
      images: [GoldStar, Agency2],
      desc: `Your backlinks are toxic, referring domains harm your authority, your Google Business Profile (GBP) is idling and your Directory listings barely exist. "Good news, only one website" with "But you have only one website, good decision!". During a month of intensive AI-SEO you can expect at least one Client but they’re a likely bonus, not a certainty. In just a month you will qualify for 10 guaranteed Clients every month.`,
       url:'/services'
    },
    {
      title: "PLATINUM OFFER",
      images: [SilverStar,  wolf],
      desc: `You qualify if your website is already maintained to a reasonable standard OR you've completed our Silver or Gold Offers. You're entitled to 10 Clients a  month guaranteed with NOTHING upfront! We can also deliver 20 or 30 Clients a month. Stay with us and your Investment drops 25% three times in months 5-7, to under £2k for an ongoing certainty of 10 Clients a month. "Your ROI rockets from 9 to 25:1!`,
       url:'/services'
    },
  ];

  return (
    <>
      <div className={`${styles.mainLandingBody} ${styles.section2}`} ref={ref}>
        <Row>
          <Col lg={12} className="d-none d-lg-block">
            <h4 className={styles.serviceDailog}>
              SO,
              <span style={{ fontStyle: "italic", marginLeft: "5px" }}>
                THIS{" "}
              </span>{" "}
              IS WHAT WE CAN DO FOR{" "}
              <span style={{ letterSpacing: "12px" }}>YOU</span>!
            </h4>
          </Col>

          {cardsData.map((card, idx) => (
            <Col lg={3} className="d-none d-lg-block" key={idx}>
              <div
                className={styles.sericeBox}
                data-index={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
              >
                <div className={styles.svHeadingSec}>
                  <h3>{card.title}</h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    {card.images.map((img, i) => (
                      <div key={i}>
                        <Image
                          src={img}
                          alt="Logo"
                          className={`${
                           
                            i === 1
                              ? styles.s1Image1
                              : styles.s1Image
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <h4>
                    {card.title.includes("BRONZE") ? (
                      <>
                        IS YOUR WEBSITE{" "}
                        <span style={{ fontStyle: "italic" }}>FIT?</span>
                      </>
                    ) : card.title.includes("SOS") ? (
                      <>
                        <span style={{ fontStyle: "italic" }}>BURIED</span> DEEP
                        IN A HOLE?
                      </>
                    ) : card.title.includes("GOLD") ? (
                      <>
                       <span style={{ fontStyle: "italic" }}>STUCK</span> IN A RUT?
                      </>
                    ) : <>
                     GET 10 EXTRA <span style={{ fontStyle: "italic" }}>CLIENTS</span>
                    </>}
                  </h4>
                </div>
                <div className={styles.svDesc}>
                  <p>{card.desc}</p>
                </div>
                <Link href={card.url}>
                <div className={styles.svBtnDiv}>
                  <Image src={SvBtn} alt="Button" />
                </div>
                </Link>
              </div>
            </Col>
          ))}

          {/* MOBILE VERSION can be added here */}
        </Row>
      </div>
      {/* <Video /> */}
    </>
  );
}
