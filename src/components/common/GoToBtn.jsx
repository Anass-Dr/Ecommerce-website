import React from 'react';

const GoToBtn = (props) => {
  const { str, style } = props;

  return (
    <a className={`btn ${style}`} href="#">
      <span>{str}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
        <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
      </svg>
    </a>
  );
};

export default GoToBtn;
