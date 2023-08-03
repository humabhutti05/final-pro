import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Quotes</h1>
      {quotes.map((quote, index) => (
        <Card key={index} className="my-3">
          <Card.Body>
            <Card.Text>"{quote}"</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default QuotesPage;
