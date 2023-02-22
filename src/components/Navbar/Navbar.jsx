import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
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
          <li className='p__opensans'><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
          <li className='p__opensans'><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
          <li className='p__opensans'><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
          <li className='p__opensans'><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          <li className='p__opensans'><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
        </ul>

      </div>
      )}
    </div>

  </nav>
  )
  }

export default Navbar;
