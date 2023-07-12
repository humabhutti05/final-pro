import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <div style={{backgroundColor: "#000d1a" , color: "white" , padding: "60px"}}>
    <Container>
      <Row>
        <Col>
          <h1 style={{textAlign: "center" , fontFamily: "sans-serif"}}>Privacy Policy</h1>
          <p>
            This Privacy Policy governs the manner in which our games app collects, uses, maintains, and discloses information collected from users (each, a "User") of the app.
          </p>
          <p>
            <strong>1: Information Collection and Use:</strong>
          </p>
          <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users interact with the app, register on the app, and in connection with other activities, services, features, or resources we make available on our app. Users may be asked for, as appropriate, name, email address. Users may, however, visit our app anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain app-related activities.
          </p>
          <p>
            <strong>2: Non-Personal Identification Information:</strong>
          </p>
          <p>
            We may collect non-personal identification information about Users whenever they interact with our app. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our app, such as the operating system and the Internet service providers utilized and other similar information.
          </p>
          <p>
            <strong>3: Web Browser Cookies:</strong>
          </p>
          <p>
            Our app may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the app may not function properly.
          </p>
          <p>
            <strong>4: Changes to This Privacy Policy:</strong>
          </p>
          <p>
            We have the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
          </p>
          <p>
            <strong>5: Your Acceptance of These Terms:</strong>
          </p>
          <p>
            By using this app, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our app. Your continued use of the app following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>
          <p>
            <em>This Privacy Policy was last updated on July 12, 2023.</em>
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default PrivacyPolicy;
