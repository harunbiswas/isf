"use client";

import i18next from "i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Menu({ isToggle, setIsToggle, refr }) {
  const { t } = useTranslation();
  const [menus, setMenus] = useState([]);

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

  useEffect(() => {
    setMenus(t("menus", { returnObjects: true }));
  }, [i18next.language]);

  return (
    <nav className="nav">
      <ul ref={refr} className={`nav-menu ${(isToggle && "show") || ""}`}>
        {menus.map((item, i) => (
          <li key={i}>
            <Link
              onClick={() => {
                setIsToggle(false);
              }}
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
