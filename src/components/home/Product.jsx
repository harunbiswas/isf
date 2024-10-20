"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Product({ products }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Screens less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
          infinite: true,
          dots: true, // Show dots on medium screens
        },
      },
      {
        breakpoint: 768, // Screens less than 768px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: true, // Show dots on small screens
        },
      },
      {
        breakpoint: 480, // Screens less than 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
          infinite: true,
          dots: true, // Show dots on extra-small screens
        },
      },
    ],
  };

  return (
    <div className="product">
      <div className="product-wrp">
        <Slider {...settings}>
          {products?.map((product, i) => (
            <div key={i} className="product-item">
              <Image
                src={product?.image}
                alt={product?.title}
                width={200}
                height={200}
              />
              <h4>{product.title}</h4>
              <p>{product?.discription}</p>{" "}
              <strong className="price">Pirce: ฿{product?.price}</strong>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
