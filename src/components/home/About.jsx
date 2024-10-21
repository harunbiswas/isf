"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="about">
      <div className="container">
        <div
          data-wow-duration="1.5s"
          data-wow-delay=".6s"
          className="about-left wow animate__fadeInLeft"
        >
          <div className="img">
            <Image src="/images/about-1.png" width={200} height={320} alt="" />
          </div>
          {/* <div className="img">
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
          </div> */}
        </div>
        <div
          className="about-right wow animate__fadeInRight"
          data-wow-duration="1.5s"
          data-wow-delay=".6s"
        >
          <h2>{t("aboutMissonTitle")}</h2>
          <strong>{t("aboutMisson")}</strong>
          <h2>{t("aboutTitle")}</h2>
          <p>{t("aboutDis")}</p>
          {/* <ul>
            <li>
              <p>{t("aboutList1")}</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>{t("aboutList2")}</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>{t("aboutList3")}</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>{t("aboutList4")}</p>
            </li>
          </ul> */}
          {/* <p>{t("aboutDis0")}</p> */}
          <p>{t("aboutDis1")}</p>

          {/* <Link href="#contact" className="btn">
            {t("aboutBtnText")}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
