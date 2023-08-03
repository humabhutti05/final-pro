// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';

// const GameList = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const response = await axios.get('https://www.freetogame.com/api/games');
//         setGames(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchGames();
//   }, []);

//   return (
//     <div>
//       <h1>Game List</h1>
//       {games.map((game) => (
//         <Card key={game.id} style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={game.thumbnail} />
//           <Card.Body>
//             <Card.Title>{game.title}</Card.Title>
//             <Card.Text>{game.short_description}</Card.Text>
//             <Button variant="primary">View Details</Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default GameList;


import React, { useState, useEffect } from 'react';

function GameList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  // Render your React component with the fetched data
}

export default GameList;
