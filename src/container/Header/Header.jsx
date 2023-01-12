import React from 'react';
import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app_header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app_header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet officia ex sequi voluptate quasi eum nisi nesciunt, sunt inventore perspiciatis dignissimos temporibus ea iure error ipsum neque. Amet, dolorum!
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;