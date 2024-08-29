import React from 'react';
import '../styles/pages/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Welcome to our car accessories store! We are passionate about providing
        high-quality car accessories to enhance your driving experience. Our
        mission is to offer a wide range of products that meet the needs of car
        enthusiasts and everyday drivers alike.
      </p>
      <h3>Our Story</h3>
      <p>
        Founded in 2021, our store started with a small selection of car
        accessories. Over the years, we have expanded our inventory to include
        a diverse range of products, from interior enhancements to exterior
        upgrades. Our team is dedicated to sourcing the best products from
        trusted manufacturers around the world.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li><span>Quality : </span> We only offer products that meet our high standards of quality.</li>
        <li> <span>Customer Service : </span> Our team is here to help you with any questions or concerns.</li>
        <li><span>Innovation : </span> We continuously seek out the latest and greatest in car accessories.</li>
      </ul>
      <h3>Contact Us</h3>
      <p className="centered">
        If you have any questions or need assistance, please don't hesitate to
        contact us. We're here to help!
      </p>
    </div>
  );
};

export default AboutPage;
