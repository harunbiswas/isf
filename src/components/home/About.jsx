import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-left">
          <div className="img">
            <Image
              src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/7.png"
              width={200}
              height={320}
              alt=""
            />
          </div>
          <div className="img">
            <Image
              src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/8.png"
              width={320}
              height={300}
              alt=""
            />{" "}
            <Image
              src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/9.png"
              width={320}
              height={300}
              alt=""
            />
          </div>
        </div>
        <div className="about-right">
          <h2>Something about Indian Street food</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            debitis modi magni facilis quo, pariatur quasi quidem maxime, unde
            perferendis ex maiores beatae quia voluptas esse quos alias
            necessitatibus adipisci!
          </p>

          <strong>
            Sed feugiat justo at laoreet convallis. Maecenas ac aliquam turpis.
            Ut aliquet leo ut gravida auctor.
          </strong>
          <Link href="/" className="btn">
            GO to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
