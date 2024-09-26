"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import Lng from "./Lng";
import Menu from "./Menu";

export default function Header() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY; // Initialize the last scroll position

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        // If the user is at the top of the page
        setActive(true);
      } else if (currentScrollY > lastScrollY) {
        // If the user is scrolling down
        setActive("hide");
      } else {
        setActive("show");
      }

      lastScrollY = currentScrollY; // Update last scroll position
    };

    // Attach the scroll event listener
    document.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${
        (active === "show" && "show") || (active === "hide" && "hide") || ""
      }`}
    >
      <div className="container">
        <Link href={"/"} className="brand">
          <Image
            src={"/images/logo.png"}
            width={500}
            height={150}
            alt="Indian Street food"
          />
        </Link>
        <Menu />
        <Lng />
      </div>
    </header>
  );
}
