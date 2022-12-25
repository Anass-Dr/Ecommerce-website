import React from 'react';
import GoToBtn from './GoToBtn';
import './CustomSetup.css';
import Overlay from './Overlay';

function CustomSetup() {
  return (
    <section className="custom-setup">
      <Overlay backgroundColor="var(--primary-color)" opacity=".56" />
      <div className="container">
        <h6>custom setups</h6>
        <h1>Let’s build your dream working space</h1>
        <GoToBtn str="Shop Now" style="btn-filled" />
      </div>
    </section>
  );
}

export default CustomSetup;
