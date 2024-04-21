import React, { useState, useEffect } from 'react';
import Police from '../img/police.gif';
import StaticImage from '../img/static3-image.jpg';

export default function Section5() {
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
        <img className='gif1' src={Police} alt="GIF" />
      ) : (
        <img className='static-image' src={StaticImage} alt="Img-fixe" />
      )}
    </div>
  );
}
