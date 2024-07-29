import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Footer from './components/Footer';
import products from './components/Products';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert(`Total Price: $${getTotalPrice()}`);
    setCart([]);
  };

  const handleLogin = (credentials) => {
    console.log('Logged in with:', credentials);
  };
  
  const handleLogout = () => {
    console.log('Logged out');
  };
  
  const handleRegister = (userData) => {
    console.log('Registered with:', userData);
  };
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar cart={cart} />
          <Routes>
            <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} handleCheckout={handleCheckout} getTotalPrice={getTotalPrice} removeFromCart={removeFromCart} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:id" element={<ProductDetailPage products={products} addToCart={addToCart} />} />
            <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
            <Route path="/logout" element={<LogoutPage handleLogout={handleLogout} />} />
            <Route path="/register" element={<RegisterPage handleRegister={handleRegister} />} />
          </Routes>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
