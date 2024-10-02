"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Product from "./Product";

export default function FoodMenu() {
  const menus = [
    {
      id: 1,
      img: "/images/Food images for foodtruck/Samosa1.png",
      title: "Samosa",
      subTitle: "Chicken Samosa",
      text: "A crispy, golden-brown pastry filled with a savory mixture of minced chicken, spices, and herbs. The chicken is cooked to perfection and seasoned with aromatic Indian flavors, creating a delicious and satisfying snack or appetizer.",
      price: 15,
    },
    {
      id: 2,
      img: "/images/Food images for foodtruck/Biryani2.png",
      title: "Chicken",
      subTitle: "Chicken Lover Set",
      text: "Savor our Chicken Lover set, a hearty and flavorful meal for two. Enjoy a generous portion of aromatic Indian Chicken Biryani, paired with two crispy Chicken Samosas. Quench your thirst with your choice of refreshing Masala Chai or tangy Mango. All this for just 239 THB!",
      price: 15,
    },
    {
      id: 3,
      img: "/images/Food images for foodtruck/Panipuri2.png",
      title: "Pani Puri",
      subTitle: "A Flavor Explosion",
      text: "Indulge in the tantalizing experience of Pani Puri, a beloved Indian street food. These crispy, hollow spheres are filled with a tangy and sweet tamarind water, and topped with a medley of flavorful ingredients.",
      price: 15,
    },
  ];
  const [item, setItem] = useState(menus[0]);
  return (
    <div id="menu" className="food-menu">
      <div className="container">
        <h2 className="title">Our Products</h2>
        <div className="food-menu-cat">
          {menus?.map((product, i) => (
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setItem(product);
              }}
              key={i}
              className={`food-menu-cat-item ${
                (item?.id === product?.id && "active") || ""
              }`}
            >
              <div className="food-menu-cat-item-img">
                <Image
                  src={product?.img}
                  width={300}
                  height={300}
                  alt="Indian street food"
                />
              </div>
              <h4>{product?.title}</h4>
            </Link>
          ))}
        </div>
        <div className="food-menu-wrp">
          <div className="food-menu-item">
            <div className={`food-menu-item-left order`}>
              <Image
                src={item?.img}
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
            <div className="food-menu-item-right">
              <h2>{item?.title}</h2>
              <strong>{item?.subTitle}</strong>
              <p>{item?.text}</p>
              <div className="bottom">
                <strong className="price">${item?.price}</strong>
                <Link href="#contact" className="btn">
                  GO to shop
                </Link>
              </div>
            </div>
          </div>

          <Product />
        </div>
      </div>
    </div>
  );
}
