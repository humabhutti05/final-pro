import React, { useState, useEffect } from 'react';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Random Quotes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
              <blockquote>{quote.quote}</blockquote>
              <p>- {quote.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuotesPage;


