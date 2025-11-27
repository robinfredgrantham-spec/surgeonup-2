import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <div>
      <div className={styles.mainLandingBody}>
        <div className={styles.mainLandingContainer}>
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

          <h3>
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
      <div className={`${styles.mainLandingBody2} ${styles.animateOnLoad}`}>
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
      </div>
    </div>
  );
}