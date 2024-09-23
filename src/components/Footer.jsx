import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Link href="/" className="brand">
          <Image
            src={"/images/logo.png"}
            width={500}
            height={150}
            alt="Indian Street food"
          />
        </Link>
        <div className="footer-menu">
          <h4>Quick Links</h4>
          <ul className="footer-menu-items">
            <li>
              <Link href="/">Menus</Link>
            </li>
            <li>
              <Link href="/">Trams & condition</Link>
            </li>

            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contacts</h4>
          <div className="content">
            <span>Work time</span>
            <strong>Monday - Friday 11:00-00:0</strong>
            <span>address</span>
            <strong>LA, Vehicula Street, 58</strong>
          </div>
        </div>
        <div className="footer-qrc">
          <h4>Qrc</h4>
          <QRCode value={"https://www.example.com"} />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>
            &copy; All rights reserved by <a href="/">Indian street food</a>.
            Design & Develoved by{" "}
            <a href="https://www.fiverr.com/hbrubel">Harun</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}
