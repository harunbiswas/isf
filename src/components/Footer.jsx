import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <Link href="/" className="brand">
          <Image
            src={"/images/logo-1.jpg"}
            width={500}
            height={150}
            alt="Indian Street food"
          />
        </Link>
        <div className="footer-menu">
          <h4>{t("textQuick")}</h4>
          <ul className="footer-menu-items">
            <li>
              <Link href="#menu">{t("textMenus")}</Link>
            </li>
            <li>
              <Link href="/">{t("textTrams")}</Link>
            </li>

            <li>
              <Link href="#contact">{t("textLocations")}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>{t("textContacts")}</h4>
          <div className="content">
            <span>{t("textWork")}</span>
            <strong>{t("textTime")}</strong>
            <span>{t("textAddress")}</span>
            <strong>{t("textAdd")}</strong>
          </div>
        </div>
        <div className="footer-qrc">
          <h4>{t("textContacts")}</h4>
          <a
            href="http://vqr.vc/iPeHhJ8bM"
            target="_blank"
            rel="noopener noreferrer"
            className="qrc"
          >
            <QRCode value={"https://vqr.vc/iPeHhJ8bM"} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>
            &copy; All rights reserved by{" "}
            <a href="/">Bhaarat QSR ( Thailand ) Co Ltd</a>. Design & Develoved
            by <a href="https://www.fiverr.com/hbrubel">Harun</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}
