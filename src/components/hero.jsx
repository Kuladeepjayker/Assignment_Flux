import { useState, useEffect } from 'react';
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../styles/hero.css';

function Hero() {
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
      <Container fluid className="hero-section text-center">
      {/* Carousel Component */}
      <Carousel>
        <Carousel.Item>
          <img
            className="caroisel-img"
            src="/Assets/Background.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>MVP SUBSCRIPTION</h5>
            <p>Your go to Movie Membership Program</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caroisel-img"
            src="/Assets/waving.svg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="caroisel-img"
            src="/Assets/Background.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>MVP SUBSCRIPTION</h5>
            <p>Your go to Movie Membership Program</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    ) : (
      <Container fluid className="hero-section text-center">
      <h1 className="display-1">MVP SUBSCRIPTION</h1>
      <p className="lead">Your go to Movie Membership Program</p>
    </Container>
    )}
    </>
  );
}

export default Hero;
