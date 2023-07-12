import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Page404 = () => {
  return (
    <div style={{backgroundColor: "#000d1a" , color: "white" , padding: "60px"}}>
    <Container  style={{textAlign: "center" , fontFamily: "sans-serif" , padding: "60px"}}>
        <div>
      <Row>
        <Col className='py-5'>
          <h1>Oops! Page not found</h1>
          <p style={{padding:"20px" , color: "whitesmoke"}}>The requested URL/a_cool website was not found on this server.
         <p> That's all we know.</p>
          </p>
          <li>Something want wrong ! back to the <a href='/'>Home page</a></li>
        </Col>
         <Col>
          <Image style={{alignItems: "center"}} src="https://rpg-zone.ru/style_images/broken-robot.png" fluid />
        </Col>
      </Row>
      </div>
    </Container>
    </div>
  );
};

export default Page404;





// import React, { useEffect } from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const Page404 = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div style={{ backgroundColor: "#000d1a", color: "white", padding: "60px" }}>
//       <Container style={{ textAlign: "center", fontFamily: "sans-serif", padding: "60px" }}>
//         <div>
//           <Row>
//             <Col className='py-5' data-aos="fade-up">
//               <h1>Oops! Page not found</h1>
//               <p style={{ padding: "20px", color: "whitesmoke" }}>
//                 The requested URL/a_cool website was not found on this server.
//                 <p> That's all we know.</p>
//               </p>
//               <li data-aos="fade-up">Something went wrong! Back to the <a href='/'>Home page</a></li>
//             </Col>
//             <Col data-aos="fade-up">
//               <Image style={{ alignItems: "center" }} src="https://rpg-zone.ru/style_images/broken-robot.png" fluid />
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Page404;
