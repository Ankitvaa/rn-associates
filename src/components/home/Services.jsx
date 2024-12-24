import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./services.css"; // Your custom CSS

const Services = () => {
  const designCards = [
    {
      id: 1,
      image: "/IMG_9916.JPG",
      alt: "Architectural Design",
      title: "01 Architectural Design",
      description:
        "Our trained designers focus on the components or elements of a structure to get the best design outcome.",
    },
    {
      id: 2,
      image: "/0W5A0156.jpg",
      alt: "Bedroom Innovation",
      title: "02 Bedroom Innovation",
      description:
        "Our trained designers transform your bedroom into a stylish pad that gives you a sanctuary feel.",
    },
    {
      id: 3,
      image: "/0W5A0158.jpg",
      alt: "Bedroom Innovation",
      title: "03 Bedroom Innovation",
      description:
        "Our trained designers transform your bedroom into a stylish pad that gives you a sanctuary feel.",
    },
    {
      id: 4,
      image: "/0W5A0210.jpg",
      alt: "Bedroom Innovation",
      title: "04 Bedroom Innovation",
      description:
        "Our trained designers transform your bedroom into a stylish pad that gives you a sanctuary feel.",
    },
  ];

  // Slick slider settings
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="design-section">
      <h1 className="service-title">Our Services</h1>
      <Slider {...settings} className="design-slider">
        {designCards.map((card) => (
          <div className="design-card" key={card.id}>
            <img src={card.image} alt={card.alt} className="design-image" />
            <div className="design-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;
