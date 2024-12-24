import React from 'react';
import './whyChooseUs.css'; // Import corresponding CSS file for styling

const WhyChooseUs = () => {
  const cards = [
    {
      icon: '/design.png',
      alt: 'Design Process Icon',
      title: 'Design Process',
      description:
        'We’ll develop architectural layouts for your property as we begin to investigate finishes, design styles and influences.',
    },
    {
      icon: '/finance.png',
      alt: 'Financing Options Icon',
      title: 'Financing Options',
      description:
        'The desire for getting the best designed interior is understandable. But interior designing a space can be an expensive affair.',
    },
    {
      icon: '/post.png',
      alt: 'Post Project Completion Icon',
      title: 'Post Project Completion',
      description:
        'As the project finishes, we will visit the site to inspect all the works & prepare a schedule of defects if needed.',
    },
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <p className="subtitle">
        "Transforming spaces into personalized masterpieces—choose us for innovative design, expert craftsmanship, and a seamless experience!"
      </p>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">
              <img src={card.icon} alt={card.alt} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
