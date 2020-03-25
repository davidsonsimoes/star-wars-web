import React from 'react'
import logo from './logo.png';
import logo_mobile from './logo_mobile.png';
import './style.scss';

const Header = () => {
    const media = window.matchMedia("(min-width: 768px)").matches;
    console.log('media', media)
  return (
    <div className="header">
        {media ? <img className="logo" src={logo} alt="Star Wars Logo" /> : <img className="logo-mobile" src={logo_mobile} alt="Star Wars Logo" /> }
    </div>
  )
}

export default Header;