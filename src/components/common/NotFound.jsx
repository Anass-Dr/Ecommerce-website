import React from 'react';
import './NotFound.css';

function NotFound({ f }) {
  return (
    <div id="not-found">
      <i className="fa-regular fa-window-maximize"></i>
      <span>No products were found matching your selection.</span>
      <i onClick={f} className="fa-solid fa-xmark"></i>
    </div>
  );
}

export default NotFound;
