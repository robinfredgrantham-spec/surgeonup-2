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
    images: ["SilverStar3", "/opImg.png"],
    imag1: SilverStar3,
    imag2: OpImg,
    imag3: ClickMe,
    desc: "Fed up spending £10-20k monthly just to survive on Paid Ads, with nothing certain? You're trapped at the bottom of a deep hole, while competitors dominate above you, winning patients you're paying for Fragmented multi-website practices splinter your visibility. Your fractured presence confuses Google - it can't tell who the real Surgeon is, so it penalises them ALL. Your digital footprint is AGAINST you. This damage demands intervention. It’s too severe to guarantee Clients yet. We'll rebuild over 2 months, paid in arrears. You'll typically see at least 1 Client during repair but none guaranteed. Month 3+: 10 clients monthly, under £2k Month 9 - ROI 9-25:1. Unfurl your rope ladderr!",
    url: "/services",
  },
  {
    title: "GOLD OFFER",
    images: ["/goldStar.png", "/agency2.png"],
        imag1: GoldStar,
    imag2: Agency2,
    imag3: ClickMe,
    desc: "You may have toxic backlinks, idling Google Business Profile (GBP) and sparse Directory listings. But you have only one website, which is an extremely astute decision. During a month of intensive AI-SEO repair, you can expect at least one Client (which should cover your investment in us) but none can be guaranteed because of our focus on repair. During your repair month, we will clean toxic backlinks, optimise your GBP, build quality Directory listings, and strengthen your site foundation. If you decide to continue on your Fast track to Platinum, then, repair done, we’ll focus on getting you 10 guaranteed Clients every month. No lock-in, continue monthly; pause or stop anytime. Hook up your tow-truck!",
    url: "/services",
  },
  {
    title: "PLATINUM OFFER",
    images: ["/silverStar.png", "/wolf.png"],
       imag1: SilverStar,
    imag2: wolf,
    imag3: ClickMe,
    desc: "You qualify if your website is reasonably functional OR you've completed our Silver or Gold Offers. We GUARANTEE you 10 CLIENTS a month with NOTHING upfront. Pay after results. We can scale for each Surgeon in your Clinic, up to six. How? From an AI-SEO Client Acquisition system exclusively for Aesthetic Surgeons. It’s our SIGNATURE offer, it encapsulates how we like to be treated.£4,407 a month, plummets by 25% three times in months 5, 6 and 7, to under £2k.  No lock-in. continue one month at a time; pause or stop at any time. Ready for Lift Off? 3, 2, 1 . . .",
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
                  src={ClickMe}
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
            <div className={styles.contentContainer}>
              <div className={styles.icons}>
                <div className={styles.dollar}>
                  $<p className={styles.free}>{card.title==="BRONZE OFFER" ? "FREE" : "5873"}</p>
                </div>

                <div className={styles.euro}>
                  £<p className={styles.free}>{card.title==="BRONZE OFFER" ? "FREE" : "4407"}</p>
                </div>
              </div>
              {/* <div >
               <p className={styles.perMonthText}>per month for 2 months of repair, paid after results.  In the 3rd month you are guaranteed 10 Clients.</p>
              </div>
              <div >

                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
             </div> */}


              <div className={styles.imageContainer}>
                {card.title==="BRONZE OFFER" &&
                <h3 className={styles.clickMeText}>GET YOUR FREE AUDIT!</h3>
}
                <Image
                  src={card.imag3}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>

          {/* <div className="click-me">
       </div> */}
        </section>
      ))}
    </div>
  );
}
