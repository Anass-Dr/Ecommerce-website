import React from 'react';
import Overlay from '../../common/Overlay';
import Navigation from '../../common/Navigation';

const Header = function ({ title, img }) {
  return (
    <header style={{ backgroundImage: `url(${img})` }} id="setup-header">
      <Overlay backgroundColor="var(--primary-color)" opacity=".48" />
      <div id="header-nav">
        <Navigation theme="light" />
      </div>
      <div className="header-wrapper">
        <div className="header-content">
          <h1>{title}</h1>
          <hr />
          <p className="setups__p">
            Porta tellus suscipit eget arcu eu nec quis scelerisque nam vitae,
            turpis integer iaculis tristique vivamus mattis egestas.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
