"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Product() {
  const products = [
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, this samosa is filled with a spiced potato mixture. The potatoes are cooked until tender and then combined with aromatic spices, creating a comforting and flavorful snack",
    },
    {
      img: "/images/food/biriani.jpg",
      name: "Biriani",
      text: "A classic Indian street food, ",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
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
                src={product?.img}
                alt={product?.name}
                width={200}
                height={200}
              />
              <h4>{product.name}</h4>
              <p>{product?.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
