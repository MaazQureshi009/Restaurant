import React from 'react';
import './ScrollToTop.css';
// import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
  return (
    <div className='app__scroll'>
        <button onClick={scrollToTop} className='app__scroll-arrow'>
            &#8679;
        </button>
    </div>
  )
}

export default ScrollToTop