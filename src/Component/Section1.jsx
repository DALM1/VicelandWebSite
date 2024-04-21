import React, { useState, useEffect } from 'react';
import Rockstar from '../img/rockstar.gif';
import StaticImage from '../img/static-image.jpg';

export default function Section3() {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section3');
      if (section) {
        const bounding = section.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (bounding.top < windowHeight / 2 && bounding.bottom > 0) {
          setShowGif(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowGif(false);
    }, 1270);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="section3">
      {showGif ? (
        <img className='gif1' src={Rockstar} alt="GIF" />
      ) : (
        <img className='static-image' src={StaticImage} alt="Img-fixe" />
      )}
    </div>
  );
}
