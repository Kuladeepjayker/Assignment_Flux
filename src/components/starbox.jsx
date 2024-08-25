import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import '../styles/starbox.css';

function Starbox() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className='starBox1'>
          <div className='starBox-card1'>
            <Card.Img className="starBox-img1 star-left1" src="Assets/teenyicons_star-solid.svg" alt="starBox image" />
            <div className='starBox-text'>
              <h2>Reel Deal Monthly Movies</h2>
              <h5 className='starBox-tag1'>Your flexible monthly menbership to the latest movies</h5>
            </div>
            <Card.Img className="starBox-img1 star-left1" src="Assets/teenyicons_star-solid-1.svg" alt="starBox image" />
          </div>
        </div>
        ) : (
        <div className='starBox'>
          <div className='starBox-card'>
            <Card.Img className="starBox-img star-left" src="Assets/teenyicons_star-solid.svg" alt="starBox image" />
            <Card.Img className="starBox-img star-center" src="Assets/teenyicons_star-solid-2.svg" alt="starBox image" />
            <Card.Img className="starBox-img star-left" src="Assets/teenyicons_star-solid-1.svg" alt="starBox image" />
          </div>
          <div className='starBox-text'>
            <h2>Reel Deal Monthly Movies</h2>
              <p>Your flexible monthly membership to the latest movies</p>
            </div>
        </div>
      )}
    </>
  );
}

export default Starbox;
