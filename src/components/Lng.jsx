"use client";

import { useEffect, useRef, useState } from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

export default function Lng() {
  const boxRef = useRef(null);
  const items = [
    { emoji: "🇺🇸", name: "en" },
    { emoji: "🇹🇭", name: "th" },
  ];
  const [lng, setLan] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("lng")) {
      localStorage.setItem("lng", items[0].name);
    }
    localStorage.setItem("lng", lng);
  }, [lng]);

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
        {(lng === "en" && items[0].emoji) || items[1].emoji}
        <div className="icon">
          {(!isShow && <TfiAngleDown />) || <TfiAngleUp />}
        </div>
      </span>
      <ul className={`selector-items ${(isShow && "show") || ""}`}>
        {items?.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => {
                setLan(item?.name);
                setIsShow(false);
              }}
            >
              {item?.emoji}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
