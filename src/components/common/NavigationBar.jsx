import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { navbarContext } from '../context/NavbarContext';
import './NavigationBar.css';

function NavigationBar() {
  const { isActive, handleNav } = React.useContext(navbarContext);

  return ReactDom.createPortal(
    <div id="navbar" className={isActive ? '' : 'nav-hidden'}>
      <div id="navbar_close">
        <i onClick={handleNav} className="fa-solid fa-xmark"></i>
      </div>
      <ul id="navbar_urls">
        <li onClick={handleNav}>
          <a href="#">
            <i className="fa-solid fa-user"></i>
          </a>
        </li>
        <li onClick={handleNav}>
          <Link to="/shop">Store</Link>
        </li>
        <li onClick={handleNav}>
          <Link to="/office-setups">Office</Link>
        </li>
        <li onClick={handleNav}>
          <Link to="/home-office-setups">Home Office</Link>
        </li>
        <li onClick={handleNav}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={handleNav}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>,
    document.getElementById('portals')
  );
}

export default NavigationBar;
