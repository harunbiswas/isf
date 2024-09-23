import Image from "next/image";
import Link from "next/link";

export default function FoodMenu() {
  const menus = [
    {
      img: "https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/4.png",
      title: "Beef",
      subTitle: "Big Burger",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta rem veniam aperiam, cupiditate quisquam.",
      price: 15,
    },
    {
      img: "https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/2.png",
      title: "Beef",
      subTitle: "Big Burger",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta rem veniam aperiam, cupiditate quisquam.",
      price: 15,
    },
    {
      img: "https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/2.png",
      title: "Beef",
      subTitle: "Big Burger",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta rem veniam aperiam, cupiditate quisquam.",
      price: 15,
    },
  ];
  return (
    <div className="food-menu">
      <div className="container">
        <div className="food-menu-offers">
          <div className="food-menu-offer">
            <div className="img">
              <Image
                src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/5.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
            <div className="content">
              <strong>-20%</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam praesentium odit dolorem quasi dignissimos nobis,
              </p>
            </div>
          </div>
          <div className="food-menu-offer">
            <div className="img">
              <Image
                src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/6.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
            <div className="content">
              <strong>Free Delivery</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <Link className="btn" href="/">
                Find Location
              </Link>
            </div>
          </div>
        </div>
        <div className="food-menu-wrp">
          {menus?.map((item, i) => (
            <div key={i} className="food-menu-item">
              <div
                className={`food-menu-item-left ${i % 2 === 0 ? "order" : ""}`}
              >
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  soluta rem veniam aperiam, cupiditate ab quisquam.
                </p>
                <div className="bottom">
                  <strong className="price">${item?.price}</strong>
                  <Link href="/" className="btn">
                    GO to shop
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
