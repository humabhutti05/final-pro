import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(`https://www.freetogame.com/api/game?id=${id}`);
        setGame(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={game.thumbnail} />
        <Card.Body>
          <Card.Title>Rating: {game.rating}</Card.Title>
          <Card.Text>{game.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GameDetails;
