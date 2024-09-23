"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      message: "This service is amazing! Highly recommend to everyone.",
      role: "CEO at Example Co.",
    },
    {
      name: "Jane Smith",
      message: "A wonderful experience from start to finish.",
      role: "Marketing Manager at Company XYZ",
    },
    {
      name: "Bob Johnson",
      message: "I will be returning for sure. Thank you for the great service!",
      role: "CTO at Tech Solutions",
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
    <div className="testimonials">
      <div className="container">
        <h2 className="title">Our Customer says</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials-item ">
              <div className="testimonials-item-body">
                <p className="">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum natus voluptatum perspiciatis! Iure ab sapiente
                  reiciendis id, dolor eius alias adipisci totam animi ducimus
                  officia sequi? Est praesentium accusamus repudiandae.""
                </p>
                <h4 className="">{testimonial.name}</h4>
                <span className="">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
