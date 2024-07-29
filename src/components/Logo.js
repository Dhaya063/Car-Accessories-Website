import React from 'react';
import '../styles/components/Logo.css';
import logo from '../assets/images/Logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Company Logo" className="logo-image" />
      <span className="company-name">Car Transformers</span>
    </div>
  );
};

export default Logo;
