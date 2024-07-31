// // src/pages/HomePage.js
// import React from 'react';
// import ProductList from '../components/ProductList';
// import '../styles/pages/HomePage.css';
// import Banner from '../components/Banner';
// import Search from '../components/Search';

// const HomePage = ({ products, addToCart }) => {
  
//   return (
//     <div className="home-page">
//       <Banner/>
//       <Search/>
//       <h1> Feautured Products</h1>
//       <ProductList products={products} addToCart={addToCart} />
//     </div>
//   );
// };

// export default HomePage;

// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/pages/HomePage.css';
import Banner from '../components/Banner';
import Search from '../components/Search';

const HomePage = ({ products, addToCart, onSearch }) => {
  return (
    <div className="home-page">
      <Banner />
      <Search onSearch={onSearch} />
      <h1>Featured Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
