import React, { useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./header.module.css";
import MainLogo from "./images/logo.jpg";
import BootAchat from "./images/chatWithRobin2.png";
import ProfitNF from "./images/profitornofee.png";
import MainLogo2 from "./images/musicnote.png";
import MusicLogo1 from "./images/musicLogo1.jpeg"; // default
import MusicLogo2 from "./images/musicLogo2.jpeg"; // hover
import MusicLogo3 from "./images/musicLogo3.jpeg"; // selected
import MusicControlPopup from "@/click/MusicControlPopup/MusicControlPopup";
import { useMusic } from "@/context/MusicContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { musicEnabled, askForMusicPreference, setShowPlayer } = useMusic();
  const [showMusicControl, setShowMusicControl] = useState(false);
  const [isMusicHovered, setIsMusicHovered] = useState(false);
  const [forceShowLogo2, setForceShowLogo2] = useState(false);
  const [isMusicSelected, setIsMusicSelected] = useState(false); // New state to track music selection
  const router = useRouter();

  const handleMusicIconClick = () => {
    setForceShowLogo2(true);
    setIsMusicSelected(true); // Mark music as selected
    if (musicEnabled) {
      setShowMusicControl(true);
    } else {
      askForMusicPreference();
    }
  };

  const getMusicIcon = () => {
    if (forceShowLogo2) {
      return MusicLogo2;
    }
    if (isMusicHovered) {
      return MusicLogo3; // hover state
    } else {
      return MusicLogo1; // default state
    }
  };

  // Helper function to check if menu item should be active
  const isMenuItemActive = (path) => {
    return !isMusicSelected && router.pathname === path;
  };

  return (
    <>
      <div className={styles.stickyHeader}>
        {/* Changed Container to div with custom class for full width */}
        <div className={styles.fullWidthContainer}>
          <div className={styles.HeaderMain}>
            {/* section1 */}
            <div className={styles.container1}>
              <Link href="/about">
                <Image
                  className={styles.mainLogo}
                  src={MainLogo}
                  alt="Logo"
                  fluid
                />
              </Link>
            </div>

            {/* section2 */}
            <div className={styles.container2}>
              <div className={styles.menuItemSec}>
                <ul>
                  <li
                    className={isMenuItemActive("/") ? styles.active : ""}
                    style={{ justifyContent: "left" }}
                  >
                    <a href="/" onClick={() => setIsMusicSelected(false)}>Home</a>
                  </li>
                  <li
                    className={isMenuItemActive("/services") ? styles.active : ""}
                  >
                    <a href="/services" onClick={() => setIsMusicSelected(false)}>Services</a>
                  </li>
                  <li
                    className={isMenuItemActive("/about") ? styles.active : ""}
                  >
                    <a href="/about" onClick={() => setIsMusicSelected(false)}>About</a>
                  </li>
                  <li
                    className={isMenuItemActive("/pdfBlogs") ? styles.active : ""}
                  >
                    <a href="/pdfBlogs" onClick={() => setIsMusicSelected(false)}>Blog</a>
                  </li>
                  <li
                    className={isMenuItemActive("/contact") ? styles.active : ""}
                    style={{ justifyContent: "right" }}
                  >
                    <a href="/contact" onClick={() => setIsMusicSelected(false)}>Contact</a>{" "}
                    <Image
                      className={styles.musicnoteIcon}
                      src={getMusicIcon()}
                      alt="Note"
                      onClick={handleMusicIconClick}
                      onMouseEnter={() => setIsMusicHovered(true)}
                      onMouseLeave={() => setIsMusicHovered(false)}
                      style={{ cursor: "pointer" }}
                    />
                  </li>
                </ul>
              </div>
              <div className={styles.conatinerNoFee}>
                <Link href="/services">
                  <Image src={ProfitNF} width={"70%"} alt="Logo" />
                </Link>
              </div>
            </div>

            {/* section3 */}
            <div className={styles.container3}>
              <Link href="/contact">
                <Image
                  className={styles.mainLogo}
                  src={BootAchat}
                  alt="Logo"
                  fluid
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Music Control Popup */}
      <MusicControlPopup
        show={showMusicControl}
        onHide={() => {
          setShowMusicControl(false);
          setForceShowLogo2(false);
        }}
      />
    </>
  );
}