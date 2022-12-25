import React from 'react';
import GoToBtn from '../../common/GoToBtn';
import Navigation from '../../common/Navigation';
import Overlay from '../../common/Overlay';

const Main = () => {
  return (
    <div className="header-body">
      <div className="container">
        <h6 id="header-body__h6">home office forniture</h6>
        <h1 id="header-body__h1">Stay productive and get more work done!</h1>
        <GoToBtn str="Shop Collection" style="btn-filled" />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header id="home-header">
      <Overlay backgroundColor="var(--primary-color)" opacity=".48" />
      <div className="header-wrapper">
        <Navigation theme="light" />
        <Main />
      </div>
    </header>
  );
};

export default Header;
