import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';
import { BsChevronDown } from "react-icons/bs";
import { Card } from 'react-bootstrap';
import '../styles/header.css';

function Header() {
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
      <div className="header-container-mobile">
        <Card.Img className="header-top-mobile" variant="top" src="Assets/Home.svg" alt="Card image" />
      </div>
      ) : (
        <div className="header-container">
          <div className="header-top">
            <div className="nav-items">
              <h5>PLACEHOLDER TITLE</h5><BsChevronDown />
              <h5>PLACEHOLDER TITLE</h5><BsChevronDown />
              <h5>PLACEHOLDER TITLE</h5><BsChevronDown />
            </div> &nbsp; &nbsp;
            <Button variant="outline-light" className="custom-signin-button">
              <FaRegUser className="me-2" />SIGN IN
            </Button>
          </div>
          <hr className="navbar-divider" />
          <div className="header-bottom">
            <h6>Placeholder title</h6>
            <h6>Placeholder title</h6>
            <h6>Placeholder title</h6>
            <h6>Placeholder title</h6>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
