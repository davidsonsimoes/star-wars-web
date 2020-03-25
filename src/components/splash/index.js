import React from 'react';
import logo from './background.jpg';
import loading from './loading.svg';
import './style.scss';

export const Splash = () => {
  return (
    <div className="splash-container">
      <img src={loading} className="splash-loading" alt="Loading..." />
      <img src={logo} className="splash-image" alt="background" />
    </div>
  );
}

export default Splash;
