import React from 'react';
import '../home/header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
