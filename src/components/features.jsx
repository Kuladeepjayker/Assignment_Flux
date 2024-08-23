import { useState, useEffect } from 'react';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StarBox from './starbox';
import StarBoxText from './starboxText';
import BenefitsGrid from './benefitGrid';
import '../styles/features.css';

function MVPSubscription() {
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
      <section className="mvp-subscription-section">
        <Container>
          <Row className="custom-row">
            <Col md={6} className="custom-col">
              <StarBox />
              <Col md={6} className="custom-col">
                <BenefitsGrid />
              </Col>
              <StarBoxText />
              <div className='benefit-btn'>
                <Button variant="danger" className="cta-button">Get started &rarr;</Button>
                <h6 className='cta-text'>Marcus MVP is only available for use in out mobile app</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      ):(
      <section className="mvp-subscription-section">
        <Container>
          <Row className="custom-row">
            <Col md={6} className="custom-col">
              <StarBox />
              <hr />
              <StarBoxText />
              <div className='benefit-btn'>
                <Button variant="danger" className="cta-button">Get started &rarr;</Button>
                <Button variant="link" className="learn-more">Learn more</Button>
              </div>
            </Col>
            <Col md={6} className="custom-col">
              <BenefitsGrid />
            </Col>
          </Row>
        </Container>
      </section>
    )}
    </>
  );
}

export default MVPSubscription;
