import React from 'react';
import './Alert.css';

function Alert({ msg, f = null }) {
  return (
    <div id="not-found">
      <i className="fa-regular fa-window-maximize"></i>
      <span>{msg}</span>
      {f && <i onClick={f} className="fa-solid fa-xmark"></i>}
    </div>
  );
}

export default Alert;
