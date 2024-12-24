import React, { useState } from 'react';
import '../home/slider.css';

const slides = [
  { id: 1, image: 'image/eagel1.jpg', name: 'EAGLE', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 2, image: 'image/owl1.jpg', name: 'OWL', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 3, image: 'image/crow.jpg', name: 'CROW', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 4, image: 'image/butterfly1.jpeg', name: 'BUTTERFLY', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 5, image: 'image/owl2.jpg', name: 'OWL', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 6, image: 'image/eagel3.jpg', name: 'EAGLE', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 7, image: 'image/kingfirser2.jpeg', name: 'KINGFISHER', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 8, image: 'image/parrot2.jpg', name: 'PARROT', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 9, image: 'image/heron.jpeg', name: 'HERON', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 10, image: 'image/butterfly2.jpg', name: 'BUTTERFLY', description: 'Lorem ipsum dolor sit amet consectetur.' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);     
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  

  return (
    <div className="carousel">
      <div className="list">
        {slides.map((slide, index) => (
          <div className="item" key={slide.id} style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="content">
              <div className="title">SLIDER</div>
              <div className="name">{slide.name}</div>
              <div className="des">{slide.description}</div>
              <div className="btn">
                <button>See More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="prev" onClick={prevSlide}>{'<'}</button>
        <button className="next" onClick={nextSlide}>{'>'}</button>
      </div>
    </div>
  );
};

export default Slider;
