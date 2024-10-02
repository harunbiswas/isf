"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {
  const menus = [
    {
      url: "#home",
      name: "Home",
    },
    {
      url: "#about",
      name: "About",
    },
    {
      url: "#menu",
      name: "Product",
    },

    {
      url: "#shop",
      name: "Shop",
    },
    {
      url: "#offer",
      name: "Offer",
    },
    {
      url: "#gallery",
      name: "Gallery",
    },
  ];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset to account for header height
      let currentSection = "";

      menus.forEach((menu) => {
        const section = document.querySelector(menu.url);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = menu.url;
          }
        }
      });

      setActiveSection(currentSection); // Set the current active section
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menus]);

  return (
    <nav className="nav">
      <ul className="nav-menu">
        {menus?.map((item, i) => (
          <li key={i}>
            <Link
              className={activeSection === item.url ? "active" : ""}
              href={item?.url}
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
