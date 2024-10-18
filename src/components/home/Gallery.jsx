"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/gallery")
      .then((d) => {
        setImages(d.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          arrows: false, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div id="gallery" className="gallery">
      <div className="container">
        <h2 className="title">{t("textGallery")}</h2>

        <div className="grid">
          {images.map(
            (image, i) =>
              i < 3 && (
                <div
                  key={image._id}
                  className="gridItem"
                  onClick={() => setSelectedImage(image.image)}
                >
                  <Image
                    src={image.image}
                    alt={image.image}
                    width={300}
                    height={200}
                    className="image"
                  />
                </div>
              )
          )}
        </div>

        {/* Modal for viewing selected image */}
        {selectedImage && (
          <div className="modal">
            <div className="modalContent">
              <span className="close" onClick={() => setSelectedImage(null)}>
                &times;
              </span>
              <Slider {...settings}>
                {images?.map((img) => (
                  <div key={img.id} className="slide">
                    <Image
                      src={img.image}
                      alt="Selected Image"
                      width={800}
                      height={600}
                    />{" "}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
