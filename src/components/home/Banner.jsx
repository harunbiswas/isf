"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
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

  const [offers, setOffers] = useState([]);
  const { i18n, t } = useTranslation();
  const [lng, setLng] = useState(i18n.language); // Set initial language

  useEffect(() => {
    // Update lng whenever the language changes
    setLng(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    axios
      .get("/api/offer")
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  // Filter offers based on the selected language
  const filteredOffers = offers.filter((offer) => offer.lng === lng);

  return (
    <div id="home" className="banner">
      <div className="container">
        <Slider {...settings}>
          {/* <div className="banner-slide">
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
          </div> */}
          {filteredOffers.map((offer, i) => (
            <div key={i} className="banner-slide">
              <div className="banner-slide-wrp">
                <Image
                  src={offer?.image}
                  width={500}
                  height={500}
                  alt="Indian street food"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
