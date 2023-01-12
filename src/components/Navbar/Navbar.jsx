import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className='p__opensans'><a href="#home"></a>Home</li>
      <li className='p__opensans'><a href="#about"></a>About</li>
      <li className='p__opensans'><a href="#menu"></a>Menu</li>
      <li className='p__opensans'><a href="#contact"></a>Contact</li>
      <li className='p__opensans'><a href="#awards"></a>Awards</li>
    </ul>
    <div className="app_navbar-login">
      <a href="#login" className='p__opensans'>Login</a>
      <div/>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>

    <div className="app_navbar-smallscreen">

      <GiHamburgerMenu color='#fff' fontSize={27} className='burger' onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className='app_navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setToggleMenu(false)} />

        <ul className='app_navbar-smallscreen-links'>
          <li className='p__opensans'><a href="#home"></a>Home</li>
          <li className='p__opensans'><a href="#about"></a>About</li>
          <li className='p__opensans'><a href="#menu"></a>Menu</li>
          <li className='p__opensans'><a href="#contact"></a>Contact</li>
          <li className='p__opensans'><a href="#awards"></a>Awards</li>
        </ul>

      </div>
      )}
    </div>

  </nav>
  )
  }

export default Navbar;
