import React from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Left side - Links */}
      <div className="nav-links">
        <a href="/">Главная</a>
        <a href="/about">О нас</a>
        <a href="/services">Услуги</a>
        <a href="/contact">Контакты</a>
      </div>

      {/* Right side - Logo */}
      <div className="logo">
        <img src={Logo} alt="Company Logo" />
      </div>
    </nav>
  );
};

export default Navbar;