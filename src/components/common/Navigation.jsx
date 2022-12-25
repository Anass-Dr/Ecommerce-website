import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { cartContext } from '../context/CartContext';
import './Navigation.css';

const ListItem = ({ path, title }) => {
  return (
    <li className="nav-item">
      <Link to={path}>{title}</Link>
    </li>
  );
};

const List = ({ children }) => {
  return <ul className="nav-list">{children}</ul>;
};

function Navigation({ theme }) {
  const { cartProducts: products, handleCart } = useContext(cartContext);

  return (
    <nav
      className={`navbar ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}
    >
      <div className="nav-logo">
        <Logo type={theme} />
      </div>
      <List>
        <ListItem path="/store" title="Store" />
        <ListItem path="/office-setups" title="Office" />
        <ListItem path="/home-office-setups" title="Home Office" />
      </List>
      <List>
        <ListItem path="/about" title="About" />
        <ListItem path="/contact" title="Contact" />
        <div className="nav-search">
          <input type="text" placeholder="Search products..." />
          <button>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <button onClick={handleCart} className="nav-shopping">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="nav-shopping-items">{products.length}</span>
        </button>
        <Link className="nav-user" to="/user">
          <i className="fa-solid fa-user"></i>
        </Link>
      </List>
    </nav>
  );
}

export default Navigation;
