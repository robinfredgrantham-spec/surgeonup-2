import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./landing.module.css";

export default function Landing({handleScroll}) {
  return (
    <div style={{ marginTop: "28px" }}>
      <div className={styles.mainLandingBody2}>
        <div className={styles.mainLandingContainer}>
          <p className={`${styles.fadeIn} ${styles.step3}`}>
           <span className={`${styles.para1} ${styles.span1}`}>
             Surge-on Up fuses Robin Grantham's business acumen with Tam Moudden's SEO expertise. We specialise in AI-SEO and Google AI Overviews (AI-OO) optimisation for Aesthetic Surgeons.
            </span>
            <span className={`${styles.para2} ${styles.span2}`}>
              Robin Grantham is the CEO of Surge-on Up. His 25 years up close and personal with Hollywood Stars and a British TV National Treasure, plus a BAFTA nomination, mean he understands the exacting standards and client service expectations that high-flying Aesthetic Surgeons need.
            </span>
            <span className={`${styles.para3} ${styles.span3}`}>
              Tam has a Cambridge Computer Science Degree and 25 years exclusively serving elite Aesthetic Surgeons from Beverly Hills to Barcelona the UAE and beyond. His tested and honed Client Acquisition system delivers new Clients in 30 days, not the 3-6 months others promise.
            </span>
            <span className={`${styles.para4} ${styles.span4}`}>
              We guarantee you 10 new Clients in a Month with no upfront cost. You only pay on Day 31.
            </span>
          </p>
          <div style={{ marginTop: "80px" }}>
            <h3 className={`${styles.fadeIn} ${styles.step1}`}>
              <span className={styles.word1}>Surgeons</span>{" "}
              <span className={styles.word2}>are</span>{" "}
              <span className={styles.word3}>HEROES!</span>
            </h3>
            <h4>
              <span className={styles.word4}>They</span>{" "}
              <span
                className={styles.word5}
                style={{ fontStyle: "italic !important" }}
              >
                transform
              </span>{" "}
              <span className={styles.word6}>people's</span>{" "}
              <span className={styles.word7}>lives</span>
            </h4>
          </div>
        </div>
        <div className={styles.mainLandingContainer3}>
          <h2
            style={{
              fontSize: "38px",
              fontWeight: "600",
              paddingTop: "2px",
              marginTop: "24px",
            }}
            className={`${styles.mainLandingContainer31}`}
          >
            So, What we can do for <span style={{letterSpacing:'12px'}}>you</span>?
          </h2>

          <div
            style={{
              paddingTop: "5px",
              paddingBottom:'3px',
              fontSize: "17px",
              fontWeight: "900",
              background: "white",
              borderRadius: "5px",
              color: " #3366FF",
              // marginRight: "12px",
              marginTop: "23px",
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              border:'2px solid #33FFCC',
              paddingLeft:'9px',
              paddingRight:'9px'
            }}
            onClick={handleScroll}

            className={styles?.step4}
          >
            SEE WHAT WE’VE GOT FOR YOU
          </div>
        </div>
      </div>
      {/* <div className={`${styles.mainLandingBody2} ${styles.animateOnLoad}`}>
        <div className={styles.mainLandingContainer2}>
          <p>
            Surge-on Up is a unique combination of Robin Grantham's personal
            consulting skills and Tam Moudden's AI & Google expertise. The
            leading Specialists in Google AI Overviews (AIO).
          </p>
          <p>
            Robin is a visionary CEO, according to not one but two Business
            Magazines, TRADEFlock and CIS. He has 25 years’ experience working
            with legendary Hollywood Stars up close and personal. He has a BAFTA
            nomination.
          </p>
          <p>
            Tam has a Computer Science Degree from Cambridge and 25 years
            experience as an SEO Pioneer, plus a recent Semrush Certification in
            AIO. He has transformed top global Aesthetic Surgeon’s websites from
            Beverly Hills to Barcelona, the UAE and beyond.
          </p>
          <p>
            We guarantee you 10 new Clients in a Month with no upfront cost. You
            only pay on Day 31.
          </p>
        </div>
        <div className={styles.mainLandingContainer3}>
          <h2>So, What we can do for you?</h2>
        </div>
      </div> */}
    </div>
  );
}
