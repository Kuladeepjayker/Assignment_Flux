// components/starboxText.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import '../styles/features.css';
import '../styles/starboxText.css';

const starboxText = () => {
  return (
    <div className='starBox-text2'>
      <h4>What is MVP Subscription?</h4>
      <Row className='feature-text'>
        <Col md={1} className="circle-column">
          <div className="circle-wrapper">
            <div className="circle-number">1</div>
          </div>
          <div className="circle-wrapper">
            <div className="circle-number">2</div>
          </div>
          <div className="circle">
            <div className="circle-number">3</div>
          </div>
        </Col>
        <Col md={8} className='circle-text'>
          <ul>
            <li>MVP Subscription provides the member 1 movie credit per month</li>
            <li>They can avail it at any Marcus theatre or Movie Tavern</li>
            <li>Members earn 100 points and get a $5 reward redeemable on food & beverages + many more benefits</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default starboxText;
