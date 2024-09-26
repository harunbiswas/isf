import Image from "next/image";
import Link from "next/link";

export default function FoodMenu() {
  const menus = [
    {
      img: "/images/Food images for foodtruck/Samosa1.png",
      title: "Samosa",
      subTitle: "Chicken Samosa",
      text: "A crispy, golden-brown pastry filled with a savory mixture of minced chicken, spices, and herbs. The chicken is cooked to perfection and seasoned with aromatic Indian flavors, creating a delicious and satisfying snack or appetizer.",
      price: 15,
    },
    {
      img: "/images/Food images for foodtruck/Samosa2.png",
      title: "Samosa",
      subTitle: "Mixed Vegetable Samosa",
      text: "A vegetarian delight, this samosa is filled with a vibrant blend of mixed vegetables, including bell peppers, carrots, and potatoes. The vegetables are seasoned with a medley of Indian spices, offering a flavorful and healthy option.",
      price: 15,
    },
    {
      img: "/images/Food images for foodtruck/Biryani2.png",
      title: "Chicken",
      subTitle: "Chicken Lover Set",
      text: "Savor our Chicken Lover set, a hearty and flavorful meal for two. Enjoy a generous portion of aromatic Indian Chicken Biryani, paired with two crispy Chicken Samosas. Quench your thirst with your choice of refreshing Masala Chai or tangy Mango. All this for just 239 THB!",
      price: 15,
    },
    {
      img: "/images/Food images for foodtruck/Panipuri2.png",
      title: "Pani Puri",
      subTitle: "A Flavor Explosion",
      text: "Indulge in the tantalizing experience of Pani Puri, a beloved Indian street food. These crispy, hollow spheres are filled with a tangy and sweet tamarind water, and topped with a medley of flavorful ingredients.",
      price: 15,
    },
  ];
  return (
    <div id="menu" className="food-menu">
      <div className="container">
        <div className="food-menu-offers">
          <div className="food-menu-offer">
            <div className="img">
              <Image
                src="/images/offer-1.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
            </div>
            {/* <div className="content">
              <strong>-20%</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam praesentium odit dolorem quasi dignissimos nobis,
              </p>
            </div> */}
          </div>
          <div className="food-menu-offer">
            <div className="img">
              <Image
                src="/images/offer-2.jpg"
                width={500}
                height={500}
                alt="Indian street food"
              />
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
                <p>{item?.text}</p>
                <div className="bottom">
                  <strong className="price">${item?.price}</strong>
                  <Link href="#contact" className="btn">
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
