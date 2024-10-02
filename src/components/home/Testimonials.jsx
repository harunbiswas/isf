"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Map from "./Map";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Krisana Subu",
      message:
        "Congratulations Bhuvan Bhai! Excellent Branding! Wish You Great Success in many more places in Thailand & I am happy to be your 1st Day 1st Thai-Indian Customer-Friend for your Inauguration Today! Loved your 3C’s Samosa-PaaniPuri-MangoAamPanna Juice & 1st Time Vodka-Tequila PaaniPuri! Thank You for bringing Samosa-Paani Puri to our Bearing-UdomSuk-Bangna area! Way To Go! 👏👏👍👍",
      role: "",
    },
    {
      name: "Shaz Godfrey",
      message:
        "What a beautiful and lovely place this was to get some authentic Indian food. Served with meticulousness and pride for the food they were serving and all with a warm friendly smile . A definite must for anyone! I will definitely be back ☺️ The food is delicious 😋",
      role: "",
    },
    {
      name: "Kout Kout",
      message:
        "The food is superb. You should try chicken samosa and potato ones. The service is amazing. I love the sauce. One more thing is resonable price. Love the shop. Will be coming again.",
      role: "",
    },
    {
      name: "Manisha Agrawal",
      message:
        "Had one of the best Indian snacks at this find in Bangkok. A different take on pani puri with beet root and spinach, amazing filling with alu samosa, really flavourful sambar with idly. Finishing it off with the chai was really satisfying. Absolutely recommend this place.",
      role: "",
    },
    {
      name: "Rajesh K Mishra",
      message:
        "Great taste and variety of Paani Puris. Quite flavourful taste of Samosas. On top of this, the shop is located in a greaf location, open area with great vibes.",
      role: "",
    },
    {
      name: "SUWAN P. (R'Chai)",
      message:
        "Hot tea and the food you order are very delicious. You don't have to go to India. I got to try Indian food. It tastes good and is clean. I recommend it. The restaurant is next to the beer garden at Bearing Market.",
      role: "",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div id="shop" className="testimonials">
      <div className="container">
        <div className="testimonials-slider">
          {" "}
          <h2 className="title">Our Customer says</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonials-item ">
                <div className="testimonials-item-body">
                  <p className="">{testimonial?.message}</p>
                  <h4 className="">{testimonial.name}</h4>
                  <span className="">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="location-map">
          <h2 className="title">Our Vendor</h2>
          <Map />
        </div>
      </div>
    </div>
  );
}
