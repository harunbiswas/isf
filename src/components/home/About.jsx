"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-left">
          <div className="img">
            <Image
              src="/images/food/Samosa.jpg"
              width={200}
              height={320}
              alt=""
            />
          </div>
          <div className="img">
            <Image
              src="/images/food/pani-puri.jpg"
              width={320}
              height={300}
              alt=""
            />{" "}
            <Image
              src="/images/food/biriani.jpg"
              width={320}
              height={300}
              alt=""
            />
          </div>
        </div>
        <div className="about-right">
          <h2>{t("aboutTitle")}</h2>
          <p>{t("aboutDis")}</p>

          <strong>{t("aboutMisson")}</strong>
          <Link href="#contact" className="btn">
            {t("aboutBtnText")}
          </Link>
        </div>
      </div>
    </div>
  );
}
