import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { cartContext } from '../context/CartContext';
import './Navigation.css';

const ListItem = ({ path, title, reload = false }) => {
  return (
    <li className="nav-item">
      {reload ? (
        <Link to={path} reloadDocument>
          {title}
        </Link>
      ) : (
        <Link to={path}>{title}</Link>
      )}
    </li>
  );
};

const List = ({ children }) => {
  return <ul className="nav-list">{children}</ul>;
};

function Navigation({ theme }) {
  const { cartProducts: products, handleCart } = useContext(cartContext);
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchRef.current.value;
    return navigate('/shop', {
      state: { type: 'title', query },
    });
  };

  return (
    <nav
      className={`navbar ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}
    >
      <div className="nav-logo">
        <Logo type={theme} />
      </div>
      <List>
        <ListItem path="/shop" title="Store" reload={true} />
        <ListItem path="/office-setups" title="Office" />
        <ListItem path="/home-office-setups" title="Home Office" />
      </List>
      <List>
        <ListItem path="/about" title="About" />
        <ListItem path="/contact" title="Contact" />
        <div className="nav-search">
          <input
            onKeyDown={(e) => (e.code === 'Enter' ? handleSearch() : null)}
            ref={searchRef}
            type="text"
            placeholder="Search products..."
          />
          <button onClick={handleSearch}>
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
