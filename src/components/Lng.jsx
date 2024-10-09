"use client";

import i18next from "i18next";
import { useEffect, useRef, useState } from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

export default function Lng() {
  const boxRef = useRef(null);

  const items = [
    { emoji: "🇹🇭", name: "th" },
    { emoji: "🇺🇸", name: "en" },
  ];

  // Initialize the language state from local storage
  const initialLanguage = localStorage.getItem("lng") || items[0].name;
  const [lng, setLan] = useState(initialLanguage);
  const [isShow, setIsShow] = useState(false);

  // Change language function
  const changeLanguage = (language) => {
    i18next.changeLanguage(language); // Change i18next language
    setLan(language); // Update state
    localStorage.setItem("lng", language); // Update local storage
  };

  // Effect to set language on initial load
  useEffect(() => {
    i18next.changeLanguage(localStorage.getItem("lng"));
  }, []);

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setIsShow(false); // Deactivate the element
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, []);

  return (
    <div ref={boxRef} className="selector">
      <span
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {lng === "en" ? items[1].emoji : items[0].emoji}
        <div className="icon">
          {!isShow ? <TfiAngleDown /> : <TfiAngleUp />}
        </div>
      </span>
      <ul className={`selector-items ${isShow ? "show" : ""}`}>
        {items.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => {
                changeLanguage(item.name); // Change language when button is clicked
                setIsShow(false);
              }}
            >
              {item.emoji}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
