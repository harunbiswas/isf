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
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="product">
      <div className="container">
        <h2 className="title">Our Products</h2>
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
    </div>
  );
}
