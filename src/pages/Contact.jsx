import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { BsFillEnvelopeFill } from 'react-icons/bs';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{backgroundColor: "#000d1a" , color: "white"}}>
    <Container>
      <h1 style={{textAlign: "center" , fontFamily: "sans-serif" , padding: "20px" }}>Contact Us</h1>
      
      <Row>
        <Col className='py-5 gap-2'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

<div className="d-grid gap-2 py-2">
        <Button variant="primary">
       <BsFillEnvelopeFill /> Send Message  
    </Button>
        </div>
      </Form>
      </Col>

      <Col className='py-5'>
     <h2>Note</h2>
     <p>Please note we can't promise to reply to all emails we receive, but we definitely read it all.</p>
     <br/>
     <h2>Issues</h2>
     <p>Facing any kind of problem, please contact us here instead.</p>
     <br />
     <h2>Email</h2>
     <p>contact@YGW$.com</p>
      </Col>
      </Row>



    </Container>
    </div>
  );
};

export default Contact;