import React from 'react';
import { Container } from 'react-bootstrap';

const Terms = () => {
  return (
    <div  style={{backgroundColor: "#000d1a", color:"white"}}>
    <Container>
      <div className='container align-items-center py-5'>
      <h1  style={{textAlign: "center" , fontFamily: "sans-serif"}}>Terms and Conditions</h1>
      <p>Welcome to our gaming app! These terms and conditions outline the rules and regulations for the use of our app.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By using our app, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you must not use our app.</p>

      <h2>2. Age Restriction</h2>
      <p>You must be at least 13 years old to use our app. If you are under 13 years old, please do not use our app.</p>

      <h2>3. User Accounts</h2>
      <p>To access certain features of our app, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must not share your account credentials with any third party.</p>

      <h2>4. Intellectual Property</h2>
      <p>All intellectual property rights in our app and its contents belong to us. You must not reproduce, distribute, modify, or create derivative works of any part of our app without our prior written consent.</p>

      <h2>5. Disclaimer of Warranties</h2>
      <p>Our app is provided on an "as is" and "as available" basis. We make no warranties or representations, express or implied, regarding the operation or availability of our app, or the accuracy, completeness, or reliability of any content.</p>

      <h2>6. Limitation of Liability</h2>
      <p>In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our app.</p>

      <h2>7. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country], and you submit to the exclusive jurisdiction of the courts located in [Your Country] for the resolution of any disputes.</p>

      <h2>8. Changes to Terms and Conditions</h2>
      <p>We reserve the right to modify these terms and conditions at any time without prior notice. By continuing to use our app after any changes, you agree to be bound by the revised terms and conditions.</p>

      <p>If you have any questions or concerns about these terms and conditions, please contact us at [Contact Email].</p>
      </div>
    </Container>

    </div>
  );
}

export default Terms;
