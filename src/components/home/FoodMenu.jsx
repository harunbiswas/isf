"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Product from "./Product";

export default function FoodMenu() {
  const { t, i18n } = useTranslation();
  const [menus, setMenus] = useState([]);
  const [item, setItem] = useState({});
  const [cats, setCats] = useState([]);
  const [lng, setLng] = useState(i18n.language);

  useEffect(() => {
    // Update lng whenever the language changes
    setLng(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    axios
      .get(`/api/catagori`)
      .then((d) => {
        setCats(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/product`)
      .then((d) => {
        setMenus(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // Filter catagori based on the selected language
  const filteredCats = cats.filter((cat) => cat.lng === lng);
  const filterProducts = menus.filter((product) => product?.catagori === item);
  useEffect(() => {
    setItem(filteredCats[0]?.title);
  }, [cats, lng]);

  return (
    <div id="menu" className="food-menu">
      <div className="container">
        <h2
          data-wow-duration="1.5s"
          data-wow-delay=".6s"
          className="title wow animate__fadeInDown"
        >
          {t("textProducts")}
        </h2>
        <div className="food-menu-cat">
          {filteredCats?.map((cat, i) => (
            <Link
              data-wow-duration="1.5s"
              data-wow-delay=".6s"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setItem(cat.title);
              }}
              key={i}
              className={`wow animate__fadeInUp food-menu-cat-item ${
                (item === cat?.title && "active") || ""
              }`}
            >
              <h4>{cat?.title}</h4>
              <div className="food-menu-cat-item-img">
                <Image
                  src={cat?.image}
                  width={200}
                  height={200}
                  alt="Indian street food"
                />
              </div>
            </Link>
          ))}
        </div>
        {filterProducts.length > 0 && (
          <div className="food-menu-wrp">
            <div className="food-menu-item">
              <div
                data-wow-duration="1.5s"
                data-wow-delay=".6s"
                className={`food-menu-item-left order wow animate__fadeInRight`}
              >
                <Image
                  src={filterProducts[0]?.image}
                  width={500}
                  height={500}
                  alt="Indian street food"
                />
              </div>
              <div
                data-wow-duration="1.5s"
                data-wow-delay=".6s"
                className="food-menu-item-right wow animate__fadeInLeft"
              >
                <h2>{filterProducts[0]?.title}</h2>

                <p>{filterProducts[0]?.discription}</p>
                <div className="bottom">
                  <strong className="price">฿{filterProducts[0]?.price}</strong>
                  <a
                    className="btn"
                    href="grob://order/12345"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order on Grob
                  </a>
                </div>
              </div>
            </div>

            {filterProducts.length > 1 && (
              <Product products={filterProducts.slice(1)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
