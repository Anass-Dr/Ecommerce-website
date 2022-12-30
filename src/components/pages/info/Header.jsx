import React from 'react';
import Navigation from '../../common/Navigation';
import Overlay from '../../common/Overlay';
import './Header.css';

function Header({ title, imgSrc }) {
  return (
    <header style={{ backgroundImage: imgSrc }} id="about-header">
      <Overlay backgroundColor="var(--primary-color)" opacity=".48" />
      <div className="header-wrapper">
        <Navigation theme="light" />
        <div className="container row">
          <h1>{title}</h1>
          <div>
            <hr />
            <p>
              Porta tellus suscipit eget arcu eu nec quis scelerisque nam vitae,
              turpis integer iaculis tristique vivamus mattis egestas.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
