import Header from "@/components/header/header";
import styles from "./services.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import WhatsappLogo from "./images/whatsapp.png";
import ChartImg from "./images/chart.jpg";
import LogoSeries from "./images/logoseries.jpg"
import Services from "@/components/services/services";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import ServicesSections from "@/components/services-section/services-sec";

export default function Service() {
    return (
    <div className={styles.ServicesMainSection}>
<div className={styles.ServicesMainSection}>
  <div className={styles.servicesRow}>
    <div className={styles.left}></div>
    <h2 className={styles.center}>Services</h2>
    <div className={styles.right}>
      <Link href="/more-services">
        <Image
          src="/more-services.png"
          alt="More services"
           width={468}
          height={87}
          priority
        />
      </Link>
    </div>
  </div>
</div>
<ServicesSections />
      </div>
    );
}