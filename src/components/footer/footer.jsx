import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.css";
import FB from "./images/facebook.jpg";
import INSTA from "./images/instagram.jpg";
import LI from "./images/linkedin.jpg";
import PINT from "./images/pintrest.jpg";
import TOP from "./images/top.jpg";
import Link from "next/link";

export default function Footer() {
  return (
    <Container fluid style={{ padding: "0px 2px" }}>
      <div className={styles.FooterMain}>
        <Row>
          <div className={styles.FooterMainSec}>
            <Link href="/privacy">
              <h1 style={{ textAlign: "start", fontSize: "120px" }}>PRV</h1>
            </Link>

            <Link href="https://www.facebook.com/surgeonup1/" target="_blank">
              <Image src={FB} height={95} width={95} alt="Logo" className={styles.activeLinks}/>
            </Link>
            <Link href="https://uk.pinterest.com/surgeonup/" target="_blank">
              <Image src={PINT} height={95} width={95} alt="Logo" className={styles.activeLinks}/>
            </Link>
            <a
              onClick={(e) => {
                e.preventDefault(); // stop normal link behavior
                window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
              }}
              style={{cursor:'pointer'}}
            >
              <Image src={TOP} height={95} width={95} alt="Logo" className={styles.activeLinks}/>
            </a>
            <Link href="https://www.instagram.com/surgeonup/" target="_blank">
              <Image src={INSTA} height={95} width={95} alt="Logo" className={styles.activeLinks}/>
            </Link>
            <Link
              href="https://www.linkedin.com/in/robin-grantham/"
              target="_blank"
            >
              <Image src={LI} height={95} width={95} alt="Logo" className={styles.activeLinks}/>
            </Link>

            <Link href="/terms-of-service">
              <h1 style={{ fontSize: "120px" }}>TOS</h1>
            </Link>
          </div>
        </Row>
        <Row>
          <Col lg={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height:'50px'
              }}
            >
              <div
                style={{
                  color: "white",
                  fontStyle: "initial",
                  fontSize: "34px",
                  fontWeight: "900",
                  paddingLeft:'4px',
                  textTransform:'uppercase',
                  
                }}
              >
                Surgeons Only{" "}
              </div>
              <span
                className={styles.footerBtnContent}
              >
                robin@surgeonup.com 
              </span>
              <span
                className={styles.footerBtnContent}
              >
              44 7356 075 678
              </span>
              <div
                style={{ color: "white", fontSize: "34px", fontWeight: "900" }}
              >
                {" "}
                NO SUPPLIERS
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <h3
              style={{
                textAlign: "start",
                fontSize: "34px",
                fontStyle: "italic",
                fontWeight: "900",
                paddingLeft:'4px'
              }}
            >
              Copyright Robin Grantham & Surge-on up 2025 All rights reserved
            </h3>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
