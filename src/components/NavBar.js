
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../styles/components/NavBar.css';
// import Logo from './Logo';

// const NavBar = ({ cart }) => {
//   const location = useLocation();

//   const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <nav className="navbar">
//       <Logo />
//       <div className="navbar-links">
//         <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
//         <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
//         <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
//         <div className="cart-container">
//           <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}>
//             Cart
//           </Link>
//           {cart.length > 0 && (
//             <span className="cart-count">{getTotalItems()}</span>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;




import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/NavBar.css';
import Logo from './Logo';

const NavBar = ({ cart }) => {
  const location = useLocation();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
        {/* <Link to="/register" className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link> */}
        <div className="cart-container">
          <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}>
            Cart
          </Link>
          {cart.length > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
