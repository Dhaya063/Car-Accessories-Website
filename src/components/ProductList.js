// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
          </Link>
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
 
export default ProductList;
