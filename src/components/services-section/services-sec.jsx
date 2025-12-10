"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesSections.module.css";
import BrownStar from "./images/sergonup-star.png";
import PowerImg from "./images/rob1.jpeg";
import ClickMe from "./images/image.png";
import GoldStar from "./images/sergonup-brwonstar.png";
import SilverMinus from "./images/SilverMinus.jpg";
import Agency2 from "./images/sergonup-agency2.png";
import SilverStar from "./images/sergonup-silverstar.png";
import PlatinumOffer from "./images/PlatinumOffer.svg";
import SilverStar3 from "./images/silverFor2nd.png";
import backToMoreServices from "./images/backToMoreServices.png";
import bankLogos from "./images/bankLogos.png";
import moboApply from "./images/moboApply.png";
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
    title: "SILVER SOS RESCUE",
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
    <>
      <div className={styles.wrapper}>
        {cardsData.map((card, idx) => (
          <section key={idx} className={styles.serviceSection}>
            <div className={styles.headingRow}>
              <div className={styles.headingContent}>
                {card?.imag1 && (
                  <div className={styles.starImageContainer}>
                    <div className={styles.servicesRowImgContainer}>
                      <Image
                        src={card.imag1}
                        width={""}
                        height={""}
                        alt="icon"
                        className={styles.imageNormal}
                      />

                      <Image
                        src={card.imag2}
                        width={150}
                        height={100}
                        alt="icon"
                        className={styles.imageWide}
                      />
                    </div>
                    <h2 className={styles.title}>{card.title}</h2>
                  </div>
                )}

                {/* Center Title */}
                <div className={styles.titleContainer}>
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
                  {card?.imag2 && (
                    <div className={styles.imageContainer}>
                      <Image
                        src={card.imag2}
                        width={150}
                        height={100}
                        alt="icon"
                        id=""
                        className={`${styles.imageWide} ${styles.headerImg}`}
                      />
                    </div>
                  )}
                </div>

                {/* Right Image */}

                {card?.imag3 && (
                  <div className={styles.imageContainer}>
                    <Image
                      src={ClickMe}
                      width={494}
                      height={100}
                      id="allcardImage"
                      alt="icon"
                      className={styles.imageUltraWide}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className={styles.description}>
              <p className={styles.desc}>{card.desc}</p>
              <div className={styles.contentContainer}>
                <div className={styles.icons}>
                  <div className={styles.dollar}>
                    $
                    <p className={styles.free}>
                      {card.title === "BRONZE OFFER" ? "FREE" : "5873"}
                    </p>
                  </div>

                  <div className={styles.euro}>
                    £
                    <p className={styles.free}>
                      {card.title === "BRONZE OFFER" ? "FREE" : "4407"}
                    </p>
                  </div>
                </div>

                {card.title === "SILVER SOS RESCUE" && (
                  <div className={styles.silverRescueContainer}>
                    <div className={styles.silverRescueText}>
                      <p className={styles.perMonthText}>
                        per month for 2 months of repair, paid after results. In
                        the 3rd month you are guaranteed 10 Clients.
                      </p>
                    </div>
                    <div className={styles.silverImageContainer}>
                      <Image
                        src={SilverMinus}
                        width={494}
                        height={200}
                        alt="icon"
                        className={styles.SilverimageUltraWide}
                      />
                    </div>
                  </div>
                )}
                {card.title === "GOLD OFFER" && (
                  <div className={styles.silverRescueContainer}>
                    <div className={styles.goldRescueText}>
                      <p className={styles.GoldperMonthText}>
                        For a month, paid after stats results. In the 2nd months
                        you’ll get 10 Clients
                      </p>
                    </div>
                  </div>
                )}
                {card.title === "PLATINUM OFFER" && (
                  <div className={styles.silverRescueContainer}>
                    <div className={styles.goldRescueText}>
                      <p className={styles.GoldperMonthText}>
                        For a month, paid after stats results. In the 2nd months
                        you’ll get 10 Clients
                      </p>
                    </div>
                    <div>
                      {/* Image  */}
                      <Image
                        src={PlatinumOffer}
                        width={494}
                        height={200}
                        alt="icon"
                        className={styles.SilverimageUltraWide}
                      />
                    </div>
                  </div>
                )}

                <div className={styles.imageContainer}>
                  {card.title === "BRONZE OFFER" && (
                    <h3 className={styles.clickMeText}>GET YOUR FREE AUDIT!</h3>
                  )}
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
            <div className={styles.description}>
              <div className={styles.footerFirstInvestmentText}>
                Y o u r  i n v e s t m e n t  i s
              </div>
              <div className={styles.footerSecontInvestmentText}>
                N  O  T  H  I  N  G,   <span> it’s FREE!  </span>
              </div>



            </div>
            <div className={styles.moboApplyImageContainer}>
              <Image
                src={moboApply}
                width={""}
                height={""}
                alt="icon"
                className={styles.moboApplyImage}
              />
            </div>
          </section>
        ))}

        <section className={styles.serviceSection}>
          <div className={styles.container}>
            <div className={styles.item}>
              GOOGLE AI OVERVIEW
              <br />
              OPTIMISATION (AIOO)
            </div>
            <div className={styles.item}>
              AI & LLM SEARCH ENGINE
              <br />
              OPTIMISATION (AISEO)
            </div>
            <div className={styles.item}>
              GOOGLE BUSINESS PROFILE
              <br />
              OPTIMISATION (GBPO)
            </div>

            <div className={styles.item}>
              BACKLINKS & REFERRING
              <br />
              DOMAINS LINK BUILDING
            </div>
            <div className={styles.item}>
              BUSINESS DIRECTORY
              <br />
              LISTINGS & CITATIONS
            </div>
            <div className={styles.item}>
              KEYWORDS
              <br />
              OPTIMISATION
            </div>

            <div className={styles.item}>
              IMAGES GEO-TAG
              <br />
              CREATION
            </div>
            <div className={styles.item}>CUT YOUR CARD COSTS</div>
            <div className={styles.item}>OTHER NEW SERVICE tbc</div>
          </div>
        </section>

        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>

              <h2 className={styles.title}>
                GOOGLE'S AI OVERVIEWS OPTIMISATION (AI-OO)
              </h2>
            </div>

            <p className={styles.text}>
              Google's AI Overviews are transforming how Clients find Surgeons
              like you. When someone searches for "Who's the leading Facelift
              Surgeon near me?" its results appear ABOVE EVERYTHING ELSE,
              including PAID ADS! It lists specific Surgeons by name, not just a
              list of links. Yours needs to be one of them. Google's AI promotes
              content that directly answers Clients’ questions, backed by
              verified qualifications, peer-reviewed publications, and trusted
              platforms. More and more Clients are relying on Google’s AI
              Overviews when selecting their Surgeon. Appearing in these results
              is essential for visibility and Client Acquisition.
              <br />
              <br />
              Few practices have begun AI Overviews Optimisation (AI-OO) yet.
              Most Surgeons focus on outdated SEO tactics while the ground
              shifts beneath their feet. The first-mover advantage is closing
              rapidly. Get in now. Position yourself at the forefront with
              Surge-on Up’s specialised AI-OO service.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1283</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 977</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>497</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>393</span>
                  </span>
                </span>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>

              <h2 className={styles.title}>
                AI & LLM SEARCH ENGINE OPTIMISATION (AI-SEO)
              </h2>
            </div>

            <p className={styles.text}>
              AI Search Engines are reshaping how Clients discover Aesthetic and
              Restorative Surgeons. Platforms like ChatGPT, Perplexity, and
              Google's AI Overviews now answer millions of health queries daily.
              <br />
              When someone asks for "the best nose surgeon near me," AI doesn't
              just produce a list of links; it provides direct recommendations
              with context.
              <br />
              Being featured in AI responses is the new frontier of digital
              visibility. AI engines prioritise authoritative, structured
              content that directly answers Client questions. They pull from
              verified sources, reviews, and detailed service descriptions.
              <br />
              Become prominent in this rapidly growing segment of potential
              Clients who trust AI for research, with Surge-on Ups AI-SEO offer.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1283</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 977</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>497</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>393</span>
                  </span>
                </span>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>
        </section>

        {/* BACKLINKS & REFERRING DOMAINS LINK BUILDING */}

        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}

              <h2 className={styles.title}>
                BACKLINKS & REFERRING DOMAINS LINK BUILDING
              </h2>
            </div>

            <p className={styles.text}>
              Domain Authority (DA) is the arbiter of ranking. It is the single
              most important AI-SEO metric. If your DA is high, no one can
              outrank you unless their DA is even higher. A high DA means Google
              trusts your website. It will rank you highly and add pizazz to
              your Client Acquisition.
              <br />
              Backlinks build DA. You need quality links from high-authority
              medical sites, trusted publications, and reputable directories.
              Each backlink is a "vote of confidence" that tells Google your
              practice is credible and authoritative. But toxic backlinks, from
              low DA sites, like spam directories, unrelated industries and link
              farms, actively destroy your DA and repel Clients.
              <br />
              We audit your entire backlink profile. Systematically remove toxic
              ones that poison your DA and build strategic connections with
              authoritative medical sources. Giving you clean, high-quality
              backlinks that will elevate your DA and bring you Clients.
              <br />
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1283</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 977</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>497</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>393</span>
                  </span>
                </span>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>
        </section>
        {/* BUSINESS DIRECTORY LISTINGS & CITATIONS */}
        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}

              <h2 className={styles.title}>
                BUSINESS DIRECTORY LISTINGS & CITATIONS
              </h2>
            </div>

            <p className={styles.text}>
              Business Directory Listings and Citations amplify your online
              authority and visibility. Directory listings are complete profiles
              on platforms like Yell, Cyclex, and 118. They showcase your
              practice with photos, services, reviews, and contact details,
              helping Clients choose you over competitors. Citations are your
              practice name, address, and phone number (NAP) appearing
              consistently across the web. Search engines use these to verify
              legitimacy and boost local rankings. Together, they create
              powerful visibility. Consistent citations build search engine
              trust, while optimised listings convert researching Clients into
              booked consultations.
              <br />
              Many Surgeons have incomplete or inconsistent listings scattered
              across the web, diluting their authority and confusing search
              engines. We audit every listing, correct them and ensure both are
              complete, accurate, and strategically optimised to maximise your
              local dominance for Clients.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1283</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 977</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>497</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>393</span>
                  </span>
                </span>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>
        </section>

        {/* KEYWORDS OPTIMISATION */}

        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>
              <h2 className={styles.title}>KEYWORDS OPTIMISATION</h2>
            </div>

            <p className={styles.text}>
              When Clients search "Hair Transplant specialist Manchester,"
              strategic keywords are what determines whether your practice
              appears prominently or remains invisible. Keywords are the bridge
              between what Clients search for and whether they find you. We
              identify high-value keywords your ideal Clients actually use, then
              integrate them naturally throughout your website content, titles,
              descriptions, and service pages. Effective keyword strategy
              balances search volume against competition. It targets terms where
              you can dominate the rankings and attract qualified Clients who
              are ready to book consultations.
              <br />
              Most Surgeons guess at keywords or ignore them entirely. We use
              data-driven research to position you exactly where your next
              Clients are searchin
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1283</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 977</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>497</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>393</span>
                  </span>
                </span>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE GEO-TAG OPTIMISATION */}
        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>
              <h2 className={styles.title}>IMAGE GEO-TAG OPTIMISATION</h2>
            </div>

            <p className={styles.text}>
              Image Geo-Tagging strengthens your local search presence by
              embedding location data directly into your practice photos. When
              properly geo-tagged, your images help search engines verify your
              physical location, reinforcing your connection to specific
              geographic areas and boosting local rankings significantly.
              <br />
              Geo-tagged images appear in location-based searches like "Facelift
              Surgeon London" or "Breast augmentation specialist Manchester,"
              creating additional visibility channels beyond traditional search
              results and reaching Clients through Google Images. Mobile users
              searching "near me" benefit most from geo-tagged content, as
              devices prioritise location-verified images. We embed precise GPS
              coordinates into every image across your website and directories,
              ensuring maximum local SEO impact and geographic authority for
              your practice.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1283</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 977</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>497</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>393</span>
                  </span>
                </span>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CUT YOUR CARD COSTS */}

        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>
              <h2 className={styles.title}>CUT YOUR CARD COSTS</h2>
            </div>

            <div className={styles.text}>
              Sick of credit card fees eating your profits? Some UK healthcare
              practices spend £20,000 annually just collecting payments. That's
              money better invested in your practice, facilities, and Client
              experience.
              <br />
              A secure bank-to-bank transfer app transfers funds in 7 seconds
              with no setup costs, no machines, and NO processing fees. Major
              banks approve it.
              <br />
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={bankLogos}
                  width={500}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesCutYourCardImageUltraWide}
                />
              </p>
              For a modest monthly subscription of less than £100, you eliminate
              transaction fees forever. Month-to-month commitment with no
              long-term contract.
              <br />
              Stop funding your processor's profits. Keep more of every Client
              payment. Get your free, no-obligation demonstration and see the
              savings for yourself.
            </div>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}> $</span>
                      <span style={{ color: "#006633" }}> &lt; 135</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 100</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}> $</span>
                    <span style={{ color: "#006633" }}>&lt; 135</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>&lt; 100</span>
                  </span>
                </span>
              </div>

              <div className={styles.imageContainer}>
                <Image
                  src={ClickMe}
                  width={494}
                  height={100}
                  alt="icon"
                  className={styles.imageUltraWide}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
