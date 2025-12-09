"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesSections.module.css";
import BrownStar from "./images/sergonup-star.png";
import PowerImg from "./images/rob1.jpeg";
import ClickMe from "./images/image.png";
import GoldStar from "./images/sergonup-brwonstar.png";
import Agency2 from "./images/sergonup-agency2.png";
import SilverStar from "./images/sergonup-silverstar.png";
import SilverStar3 from "./images/silverFor2nd.png";
import cupFor4 from "./images/cupFor4.png";
import wolf from "./images/rob44.jpeg";
import OpImg from "./images/sergonup-op.png";
import SvBtn from "./images/serviceButton.png";
const cardsData = [
  {
    title: "BRONZE OFFER",
    imag1: BrownStar,
    imag2: PowerImg,
    imag3: ClickMe,
    desc: "FREE, no-obligation website audit from a Cambridge graduate who has optimized top surgeons' websites for over 25 years. From Beverly Hills to Barcelona, the UAE and beyond! Tam Moudden left IBM as a Data Analyst in the 90s to focus exclusively on SEO for Cosmetic and Hair Restoration Surgeons. A full AI-SEO analysis will reveal where you stand against competitors. Tam's Semrush AI-SEO expertise will show you the path to organic growth. Claim your complimentary audit.",
    url: "/services",
  },
  {
    title: "SOS RESCUE",
    images: ["/silverStar3.png", "/opImg.png"],
    desc: "Lots of websites fragment your visibility and confuse Google...",
    url: "/services",
  },
  {
    title: "GOLD OFFER",
    images: ["/goldStar.png", "/agency2.png"],
    desc: "Your backlinks are toxic, referring domains harm your authority...",
    url: "/services",
  },
  {
    title: "PLATINUM OFFER",
    images: ["/silverStar.png", "/wolf.png"],
    desc: "You qualify if your website is already maintained to a reasonable standard...",
    url: "/services",
  },
];

export default function ServicesSections() {
  return (
    <div className={styles.wrapper}>
      {cardsData.map((card, idx) => (
        <section key={idx} className={styles.serviceSection}>
          <div className={styles.headingRow}>
            {card?.imag1 && (
              <div className={styles.imageContainer}>
                <Image
                  src={card.imag1}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.imageNormal}
                />
              </div>
            )}

            {/* Center Title */}
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{card.title}</h2>
              <h3 className={styles.subtitle}>
                {card.title.includes("BRONZE") ? (
                  <>
                    IS YOUR WEBSITE <i>FIT?</i>
                  </>
                ) : card.title.includes("SOS") ? (
                  <>
                    <i>BURIED</i> DEEP IN A HOLE?
                  </>
                ) : card.title.includes("GOLD") ? (
                  <>
                    <i>STUCK</i> IN A RUT?
                  </>
                ) : (
                  <>
                    GET 10 EXTRA <i>CLIENTS</i>
                  </>
                )}
              </h3>
            </div>

            {/* Right Image */}
            {card?.imag2 && (
              <div className={styles.imageContainer}>
                <Image
                  src={card.imag2}
                  width={150}
                  height={100}
                  alt="icon"
                  className={styles.imageWide}
                />
              </div>
            )}
            {card?.imag3 && (
              <div className={styles.imageContainer}>
                <Image
                  src={card.imag3}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className={styles.description}>
            <p className={styles.desc}>{card.desc}</p>
            {/* <div className={styles.dollar}>$
              <p>FREE</p>
            </div>

            <div className={styles.euro}>£</div> */}
          </div>

          {/* <div className="click-me">
       </div> */}
        </section>
      ))}
    </div>
  );
}
