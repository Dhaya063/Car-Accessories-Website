import React from 'react';
import '../styles/components/Banner.css';
import BannerImage from '../assets/images/Banner1.jpg';

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="banner-content">
        <h1>Welcome to Car Transformers</h1>
        <p>Transform Your Ride with Us</p>
      </div>
    </div>
  );
};

export default Banner;
