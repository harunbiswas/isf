"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { id: 1, src: "/images/food/D8N_1792.jpg", alt: "Image 1" },
    { id: 2, src: "/images/food/D8N_1794.jpg", alt: "Image 2" },
    { id: 3, src: "/images/food/D8N_1784.jpg", alt: "Image 3" },
    { id: 4, src: "/images/food/D8N_1783.jpg", alt: "Image 4" },
    { id: 5, src: "/images/food/D8N_1774.jpg", alt: "Image 5" },
    { id: 6, src: "/images/food/D8N_1794.jpg", alt: "Image 6" },
  ];

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

  return (
    <div id="gallery" className="gallery">
      <div className="container">
        <h2 className="title">{t("textGallery")}</h2>

        <div className="grid">
          {images.map(
            (image, i) =>
              i < 3 && (
                <div
                  key={image.id}
                  className="gridItem"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
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
                      src={img.src}
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
