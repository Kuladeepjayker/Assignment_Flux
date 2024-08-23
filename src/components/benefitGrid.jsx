import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/benefitGrid.css';

const benefitGrid = () => {
  return (
    <div className="benefits-grid">
      <Card className="benefit-card">
        <Card.Img className="benfit-img" variant="top" src="Assets/creditPerMonth.svg" alt="Card image" />
        <Card.Body>
          <Card.Title>1 credit per month</Card.Title>
          <Card.Text className="benfit-text">One 2D standard movie per month</Card.Text>
        </Card.Body>
      </Card>
      <Card className="benefit-card">
        <Card.Img className="benfit-img" variant="top" src="Assets/rolloverOfUnusedCredits.svg" alt="Card image" />
        <Card.Body>
          <Card.Title>Free rollover of unused credits</Card.Title>
          <Card.Text className="benfit-text">Unused credits will be combined the following month</Card.Text>
        </Card.Body>
      </Card>
      <Card className="benefit-card">
        <Card.Img className="benfit-img" variant="top" src="Assets/MMRPerks.svg" alt="Card image" />
        <Card.Body>
          <Card.Title>All MMR perks included</Card.Title>
          <Card.Text className="benfit-text">+ benefits</Card.Text>
        </Card.Body>
      </Card>
      <Card className="benefit-card">
        <Card.Img className="benfit-img" variant="top" src="Assets/100Flexible.svg" alt="Card image" />
        <Card.Body>
          <Card.Title>100% Flexible</Card.Title>
          <Card.Text className="benfit-text">Cancel anytime</Card.Text>
        </Card.Body>
      </Card>
      <Card className="benefit-card">
        <Card.Img className="benfit-img" variant="top" src="Assets/discountOnFoodAndBeverages.svg" alt="Card image" />
        <Card.Body>
          <Card.Title>20% Discount on all Food and Beverages</Card.Title>
          <Card.Text className="benfit-text">Excluding alcohol</Card.Text>
        </Card.Body>
      </Card>
      <Card className="benefit-card">
        <Card.Img className="benfit-img" variant="top" src="Assets/convenienceFee.svg" alt="Card image" />
        <Card.Body>
          <Card.Title>0 Convenience Fees</Card.Title>
          <Card.Text className="benfit-text">Waived on all days on any tickets purchase</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default benefitGrid;
