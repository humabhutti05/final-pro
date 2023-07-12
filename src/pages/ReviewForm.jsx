import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';

const ReviewForm = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://www.freetogame.com/api/reviews')
      .then(response => setReviews(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <h1>Reviews</h1>
      {reviews.map(review => (
        <Card key={review.id}>
          <Card.Body>
            <Card.Title>{review.title}</Card.Title>
            <Card.Text>{review.text}</Card.Text>
            <Card.Footer>
              <small className="text-muted">Rating: {review.rating}</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ReviewForm;
