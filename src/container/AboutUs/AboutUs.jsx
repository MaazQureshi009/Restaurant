import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app_aboutus app__bg flex__center section__padding' id='about'>
    <div className="app_aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app_aboutus-content flex__center">
      <div className="app_aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi earum magni atque sed, ex aliquam natus commodi cumque debitis repellat aspernatur asperiores magnam, voluptates non expedita numquam? Eum, placeat asperiores!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div> 

      <div className="app_aboutus-content_knife flex-center">
        <img src={images.knife} alt="knife_image" />
      </div>
      
      <div className="app_aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi earum magni atque sed, ex aliquam natus commodi cumque debitis repellat aspernatur asperiores magnam, voluptates non expedita numquam? Eum, placeat asperiores!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
