"use client";

import { useTranslation } from "react-i18next";
import Map from "./Map";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div id="location" className="contact">
      <div className="container">
        <h2 className="title">{t("textPresence")}</h2>
        <div className="contact-wrp">
          <div className="contact-left">
            <div
              data-wow-duration="1.5s"
              data-wow-delay=".6s"
              className="location-map wow animate__fadeInRight"
            >
              <Map />
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-right-item">
              <h4>Head office</h4>
              <p>
                381, Soi 58, Udom Suk, <br /> Bang Na Neua, Bangkok - 10260
              </p>
            </div>
            <div className="contact-right-item">
              <h4> 3C - Tonsai</h4>
              <p>
                Tonsai Night Market, Sukhumvit Soi 105,
                <br /> Khwaeng Bang Na, Bang Na, Bangkok 10260.
              </p>
            </div>
            <div className="contact-right-item">
              <h4>3C- Lotus Sukhumvit</h4>
              <p>
                First Floor, Lotus, Sukhumvit 50 Aly,
                <br /> Khlong Toei, Bangkok 10110, Thailand
              </p>
            </div>
            <div className="contact-right-item">
              <h4>3C - Foodie BangNa</h4>
              <p>
                Bang Kaeo, Bang Phli District,
                <br /> Samut Prakan 10540, Thailand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
