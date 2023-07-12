// import React from 'react'
// import GameList from '../pages/GameList'
// import { Container, Row } from 'react-bootstrap'

// export default function HeaderSection() {
//     return (
//         <>
           
// <div>
//     <Container>

// <div>
//     <Row>
//         <Col>
        
//         </Col>
//         <Col>
        
//         </Col>
//     </Row>
// </div>

//     </Container>
// </div>

//         </>
//     )
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

const HeaderSection = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('https://www.freetogame.com')
      .then(response => setGames(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <h1>Game Store</h1>
      <Row>
        {games.map(game => (
          <Col key={game.id} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={game.thumbnail} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.short_description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Genre: {game.genre}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HeaderSection;
