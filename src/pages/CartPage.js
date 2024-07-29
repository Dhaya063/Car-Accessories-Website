// // src/pages/CartPage.js
// import React from 'react';
// import '../styles/pages/CartPage.css';

// const CartPage = ({ cart, handleCheckout, getTotalPrice, removeFromCart }) => {

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h2>{item.name}</h2>
//                 <p>${item.price.toFixed(2)}</p>
//                 <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total">
//             <h2>Total: ${getTotalPrice()}</h2>
//           </div>
//           <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;



import React from 'react';
import '../styles/pages/CartPage.css';

const CartPage = ({ cart, handleCheckout, getTotalPrice, removeFromCart }) => {

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${getTotalPrice()}</h2>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
