// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/pages/HomePage.css';

const HomePage = ({ products, addToCart }) => {
  return (
    <div className="home-page">
      <h1>Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
