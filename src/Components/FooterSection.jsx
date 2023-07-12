import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


const FooterSection = () => {
  return (
            <footer style={{backgroundColor: "black" , color: "white" , padding: "20px"}}>
           <Container>
        <Row>
          <Col sm={4}>
            <h5 style={{fontFamily: "Georgia" , color: "white" , padding: "20px"}}>
            <Link to="/">YGW$</Link>
              
              </h5>
                 <ul>
              <li>
                <Link to="/about">About Us</Link>
                </li>
              <li>
                <Link to="/privacyPolicy">Privacy Policy</Link>
                </li>
              <li>
                <Link to="/cookiesPolicy">Cookies Policy</Link>
                </li>
</ul>
          </Col>
          <Col sm={4}  style={{fontFamily: "Georgia" , color: "white" , padding: "70px"}}>
           
            <ul>
              <li>
                <Link to="/contact">Contact Us</Link>
                </li>
              <li>
                <Link to="/help">Help/FAQ</Link>
                </li>
              <li>
                <Link pat to="/terms">Terms and Conditions</Link>
                </li>
            </ul>
          </Col>
          <Col sm={4} style={{width: "30px"}}>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5RAA56lbSzgBKFbDZeqflinE0kOPiu9bMA&usqp=CAU" alt="Footer Image" />
          </Col>
        </Row>
      </Container>
   <hr />
 

 <Row>
 <Col xs><em style={{color: "#A9A9A9"}}>All right rest in peace</em></Col>
        <Col>
        <FaTwitter size={24} color="#00acee" />
        </Col>
        <Col>
        <FaFacebook size={24} color="#3b5998" />
        </Col>
        <Col>
        <FaInstagram size={24} color="#e4405f" />
        </Col>
      </Row>
    </footer>
  );
};

export default FooterSection;