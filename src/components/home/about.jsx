import React from "react";
import "./aboutSection.css"; // Include your CSS file for styling

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/about.png" alt="Interior Design" />
        </div>
        <div className="about-content">
          <h2>About</h2>
          <h3>R N & Associates</h3>
          <p>
            R N & Associates offer tailor-made Interior Designs to transform
            your space into the house of your dreams. Our talented designers
            follow both modern and traditional design factors driven by an
            understanding of the client’s requirements and creative space
            planning.
          </p>
          <a href="#" className="read-more">
            Read More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
