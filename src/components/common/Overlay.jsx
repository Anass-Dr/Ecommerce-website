import React from 'react';
import './Overlay.css';

function Overlay(props) {
  const { backgroundColor, opacity, onClick } = props;
  const zIndex = props.zIndex || 1;
  const styles = {
    backgroundColor: backgroundColor,
    opacity: opacity,
    zIndex: zIndex,
  };

  return <div onClick={onClick} className="overlay" style={styles}></div>;
}

export default Overlay;
