"use client";

import Image from "next/image";
import Link from "next/link";
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
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div id="home" className="banner">
      <div className="container">
        <Slider {...settings}>
          <div className="banner-slide">
            <div className="banner-slide-wrp">
              <div className="banner-left">
                <strong>From 11 Am to 12 pm</strong>
                <h1>Best Foods</h1>
                <p>
                  Our commitment to authenticity extends to our ingredients. We
                  source the finest Indian spices and basmati rice directly from
                  India, ensuring a truly authentic taste experience. These
                  premium ingredients are the foundation of our flavorful
                  dishes, bringing the rich heritage of Indian cuisine to
                  Bangkok.
                </p>
                <Link className="btn" href="/">
                  Find Store
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
