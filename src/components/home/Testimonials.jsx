"use client";

import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Map from "./Map";

export default function Testimonials() {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    vertical: true, // Enable vertical sliding
    verticalSwiping: true, // Smooth vertical swipe experience
  };

  useEffect(() => {
    setTestimonials(t("testimonials", { returnObjects: true }));
  }, [i18next.language]);

  return (
    <div id="shop" className="testimonials">
      <div className="container">
        <div className="testimonials-slider">
          {" "}
          <h2 className="title">{t("textCustomer")}</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonials-item ">
                <div className="testimonials-item-body">
                  <p className="">{testimonial?.message}</p>
                  <h4 className="">{testimonial.name}</h4>
                  <span className="">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="separator"></div>
        <div className="location-map">
          <h2 className="title">{t("textPresence")}</h2>
          <Map />
        </div>
      </div>
    </div>
  );
}
