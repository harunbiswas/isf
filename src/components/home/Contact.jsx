"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div id="offer" className="contact">
      <div className="container">
        <h2 className="title">{t("textOffers")}</h2>
        <div className="food-menu-offers">
          <div
            data-wow-duration="1.5s"
            data-wow-delay=".6s"
            className="food-menu-offer wow animate__fadeInLeft"
          >
            <div className="img">
              <Image
                src="/images/offer-1.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
            {/* <div className="content">
              <strong>-20%</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam praesentium odit dolorem quasi dignissimos nobis,
              </p>
            </div> */}
          </div>
          <div
            data-wow-duration="1.5s"
            data-wow-delay=".6s"
            className="food-menu-offer wow animate__fadeInRight"
          >
            <div className="img">
              <Image
                src="/images/offer-2.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
