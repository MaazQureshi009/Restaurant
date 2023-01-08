import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutLineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => (
  <nav className='app_navbar'>
    <div className='app_navbar_logo'>
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className='p_opensans'><a href="#home"></a>Home</li>
      <li className='p_opensans'><a href="#about"></a>About</li>
      <li className='p_opensans'><a href="#menu"></a>Menu</li>
      <li className='p_opensans'><a href="#contact"></a>Contact</li>
      <li className='p_opensans'><a href="#awards"></a>Awards</li>
    </ul>
  </nav>
);

export default Navbar;
