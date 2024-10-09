"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const { t } = useTranslation();

  return (
    <div id="home" className="banner">
      <div className="container">
        <Slider {...settings}>
          <div className="banner-slide">
            <div className="banner-slide-wrp">
              <div className="banner-left">
                <strong>{t("timeing")}</strong>
                <h1>{t("title")}</h1>
                <p>{t("disctiption")}</p>
                <Link className="btn" href="/">
                  {t("btnText")}
                </Link>
              </div>
              <div className="banner-right">
                <div className="banner-right-wrp">
                  <div className="banner-right-img">
                    <Image
                      src={"/images/Food images for foodtruck/Spices.png"}
                      width={500}
                      height={500}
                      alt="Indian street food"
                    />
                  </div>
                  <div className="content">
                    <strong>Call Us:</strong>
                    <Link href="tel:+91 78389 87700">+91 78389 87700</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-slide">
            <div className="banner-slide-wrp">
              <Image
                src={"/images/banner-offer.jpg"}
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
