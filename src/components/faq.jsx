import React, { useState } from 'react';
import '../styles/faq.css';
import { BsChevronDown } from 'react-icons/bs';

const FAQuestions = ({ Faq = [] }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="custom-accordion">
      <h2>Frequently Asked Questions</h2>
      {Faq.length > 0 ? (
        Faq.map((faq, index) => (
          <div key={faq.id} className="accordion-item">
            <div
              className={`accordion-header ${activeKey === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              <BsChevronDown className={`accordion-icon ${activeKey === index ? 'deg' : 'rotate'}`} /> &nbsp; &nbsp;
              <span>{faq.question}</span>
            </div>
            {activeKey === index && (
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            )}
            <hr />
          </div>
        ))
      ) : (
        <p>No FAQs available.</p>
      )}
    </div>
  );
};

export default FAQuestions;
