import React from 'react';
import '../styles/components/Cart.css';

const Cart = ({ cart, handleCheckout, getTotalPrice, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice()}</p>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
