// // // // import React from 'react'
// // // // import GameList from '../pages/GameList'
// // // // import { Container, Row } from 'react-bootstrap'

// // // // export default function HeaderSection() {
// // // //     return (
// // // //         <>
           
// // // // <div>
// // // //     <Container>

// // // // <div>
// // // //     <Row>
// // // //         <Col>
        
// // // //         </Col>
// // // //         <Col>
        
// // // //         </Col>
// // // //     </Row>
// // // // </div>

// // // //     </Container>
// // // // </div>

// // // //         </>
// // // //     )
// // // // }


// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { Card, Container, Row, Col } from 'react-bootstrap';

// // // const HeaderSection = () => {
// // //   const [games, setGames] = useState([]);

// // //   useEffect(() => {
// // //     axios.get('https://www.freetogame.com/api/game?id=${id}')
// // //       .then(response => setGames(response.data))
// // //       .catch(error => console.error(error));//////////////
// // //   }, []);

// // //   return (
// // //     <Container>
// // //       <h1>Game Store</h1>
// // //       <Row>
// // //         {games.map(game => (
// // //           <Col key={game.id} sm={6} md={4} lg={3}>
// // //             <Card>
// // //               <Card.Img variant="top" src={game.thumbnail} />
// // //               <Card.Body>
// // //                 <Card.Title>{game.title}</Card.Title>
// // //                 <Card.Text>{game.short_description}</Card.Text>
// // //               </Card.Body>
// // //               <Card.Footer>
// // //                 <small className="text-muted">Genre: {game.genre}</small>
// // //               </Card.Footer>
// // //             </Card>
// // //           </Col>
// // //         ))}
// // //       </Row>
// // //     </Container>
// // //   );
// // // };

// // // export default HeaderSection;



// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { Card, Container, Row, Col } from 'react-bootstrap';

// // // const HeaderSection = () => {
// // //   const [games, setGames] = useState([]);

// // //   useEffect(() => {
// // //     axios.get('https://www.freetogame.com/api/games')
// // //       .then(response => setGames(response.data))
// // //       .catch(error => console.error(error));
// // //   }, []);

// // //   return (
// // //     <Container>
// // //       <h1>Game Store</h1>
// // //       <Row>
// // //         {games.map(game => (
// // //           <Col key={game.id} sm={6} md={4} lg={3}>
// // //             <Card>
// // //               <Card.Img variant="top" src={game.thumbnail} />
// // //               <Card.Body>
// // //                 <Card.Title>{game.title}</Card.Title>
// // //                 <Card.Text>{game.short_description}</Card.Text>
// // //               </Card.Body>
// // //               <Card.Footer>
// // //                 <small className="text-muted">Genre: {game.genre}</small>
// // //               </Card.Footer>
// // //             </Card>
// // //           </Col>
// // //         ))}
// // //       </Row>
// // //     </Container>
// // //   );
// // // };

// // // export default HeaderSection;



// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // function HeaderSection() {
// // //   const [posts, setPosts] = useState([]);
// // //   const [comments, setComments] = useState([]);

// // //   useEffect(() => {
// // //     axios.get('https://jsonplaceholder.typicode.com/posts')
// // //       .then(response => setPosts(response.data))
// // //       .catch(error => console.error(error));

// // //     axios.get('https://jsonplaceholder.typicode.com/comments')
// // //       .then(response => setComments(response.data))
// // //       .catch(error => console.error(error));
// // //   }, []);

// // //   // Render your React component with the fetched data
// // // }

// // // export default HeaderSection;



// // import React from 'react'

// // export default function HeaderSection() {
// //     return (
// //         <>
// //             <div className="bg-dark">
// //                 <div style={{ width: '95vw', height: '100vh' }} className="d-flex justify-content-center align-items-center">
// //                     <div>
// //                         <img className='img-fluid' src="https://cdn.dribbble.com/users/3754218/screenshots/16204871/media/db5945b3b9afa92d3c6dd6828eb89973.png?resize=400x0" alt="" srcset="" />
// //                     </div>
// //                     <div className="container">
// //                         <h1 className="text-white">
// //                             Lorem ipsum dolor sit.
// //                         </h1>
// //                         <p className="text-secondary">him hee she </p>
// //                     </div>

// //                 </div>
// //             </div>
// //         </>
// //     )
// // }


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const HeaderSection = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos?_limit=60')
//       .then((response) => response.json())
//       .then((data) => setPhotos(data))
//       .catch((error) => console.error('Error fetching photos:', error));
//   }, []);

//   return (
//     <Container>
//       <h3 className="mt-4">Hi!Welcome to YGW$</h3>
//       <Row>
//         {photos.map((photo) => (
//           <Col key={photo.id} xs={12} sm={6} md={4} className="my-3">
//             <Card>
//               <Card.Img variant="top" src={photo.url} alt={photo.title} />
//               <Card.Body>
//                 <Card.Title>{photo.title}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default HeaderSection;



import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderSection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=reactjs&_limit=19')
      .then((response) => response.json())
      .then((data) => setBooks(data.items))
      .catch((error) => console.error('Error fetching books:', error));

    // Initialize AOS library
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
    <Container>
      <h1 className="mt-4">Featured Books</h1>
      <Row>
        {books.map((book) => (
          <Col key={book.id} xs={10} sm={4} md={4} className="my-3" data-aos="zoom-in-right" >
            <Card style={{margin:"50px"}}>
              {book.volumeInfo.imageLinks && (
                <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              )}
              <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Text>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</Card.Text>
                <Card.Text>{book.volumeInfo.publishedDate}</Card.Text>
                <Link to={`/book/${book.id}`} className="btn btn-primary">
                  View
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default HeaderSection;
