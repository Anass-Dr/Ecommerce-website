import React from 'react';
import { logoLight, logoDark } from '../';
import { Link } from 'react-router-dom';

function Logo({ type }) {
  return (
    <Link to='/'>
      <img src={type === 'light' ? logoLight : logoDark} alt='Logo-img' />
    </Link>
  );
}

export default Logo;
