import React, { useEffect, useRef } from "react";
import "./autoSlider.css"; // Add your CSS for styling

const AutoSlider = ({ images, containerClass, sliderClass }) => {
  const sliderRef = useRef(null);

  // Automatically scroll the slider
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(slide, 100); // Adjust speed by changing interval duration
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={containerClass}>
      <ul className={sliderClass} ref={sliderRef}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const slider1Images = [
    { src: "/0W5A0003.jpg", alt: "Slider 1" },
    { src: "/0W5A0156.jpg", alt: "Slider 2" },
    { src: "/0W5A0158.jpg", alt: "Slider 3" },
    { src: "/0W5A0174.jpg", alt: "Slider 4" },
    { src: "/0W5A0174.jpg", alt: "Slider 5" },
    { src: "/0W5A0174.jpg", alt: "Slider 6" },
  ];

  const slider2Images = [
    { src: "/butterfly1.jpeg", alt: "Slider 1" },
    { src: "/butterfly2.jpg", alt: "Slider 2" },
    { src: "/crow.jpg", alt: "Slider 3" },
    { src: "/eagel1.jpg", alt: "Slider 4" },
    { src: "/eagel3.jpg", alt: "Slider 5" },
    { src: "/heron.jpeg", alt: "Slider 6" },
  ];

  return (
    <div>
      <AutoSlider
        images={[...slider1Images, ...slider2Images]} // Duplicated images for seamless scrolling
        containerClass="auto_slider_container-1"
        sliderClass="auto_slider-1"
      />
      <AutoSlider
        images={[...slider1Images, ...slider2Images]}
        containerClass="auto_slider_container-2"
        sliderClass="auto_slider-2"
      />
      <AutoSlider
        images={[...slider1Images, ...slider2Images]}
        containerClass="auto_slider_container-3"
        sliderClass="auto_slider-3"
      />
    </div>
  );
};

export default App;
