import React from "react";
import Slider from "react-slick";
import "./testimonialSlider.css"; // Your custom CSS file

const TestimonialSlider = () => {
  const testimonials = [
    {
      image: "/0W5A0003.jpg",
      alt: "Interior Design",
      heading: "Here’s What Our Satisfied Clients are Saying",
      text: `“We strongly recommend R N & Associates in case you are in need of an Interior Designer. 
              They made our house a living heaven. My friend suggested this company and I must say, 
              this so far the best investment I have done. Their services are worth your money.”`,
      author: "⭐️⭐️⭐️⭐️⭐️ Trupti Mane",
    },
    {
      image: "/0W5A0003.jpg",
      alt: "Interior Design",
      heading: "Exceptional Experience!",
      text: `“Working with R N & Associates was seamless. Their creativity and attention to detail 
              transformed my home into a dream space. Highly recommend their service!”`,
      author: "⭐️⭐️⭐️⭐️⭐️ Rahul Verma",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div className="slide" key={index}>
            <img src={testimonial.image} alt={testimonial.alt} />
            <div className="slide-content">
              <h2>{testimonial.heading}</h2>
              <p>{testimonial.text}</p>
              <div className="author">{testimonial.author}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
