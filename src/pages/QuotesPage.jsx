// import React, { useState, useEffect } from 'react';
// import { Container, Card } from 'react-bootstrap';

// const QuotesPage = () => {
//   const [quotes, setQuotes] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/quotes')
//       .then((response) => response.json())
//       .then((data) => setQuotes(data.results))
//       .catch((error) => console.error('Error fetching quotes:', error));
//   }, []);

//   return (
//     <Container>
//       <h1 className="mt-4">Quotes</h1>
//       {quotes.map((quote) => (
//         <Card key={quote._id} className="my-3">
//           <Card.Body>
//             <Card.Title>{quote.content}</Card.Title>
//             <Card.Text>- {quote.author}</Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </Container>
//   );
// };

// export default QuotesPage;



// import React, { useState, useEffect } from 'react';
// import { Container, Card, ListGroup } from 'react-bootstrap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const PostPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch posts
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.error('Error fetching posts:', error));

//     // Fetch users
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error('Error fetching users:', error));

//     // Initialize AOS
//     AOS.init({ duration: 800 }); // You can adjust the animation duration
//   }, []);

//   // Function to find author by user ID
//   const findAuthor = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : 'Unknown Author';
//   };

//   // Update posts and authors
//   const updatedPosts = posts.map((post) => ({
//     ...post,
  
//     userId: 6 // Change the user ID to match a different author
//   }));

//   return (
//     <div style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
//       <Container style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
//         <h1 className="mt-4" style={{ fontFamily: 'math', textAlign: 'center', color: 'white' }}>
//           Explore Knowledge: Thoughtful Posts
//         </h1>
//         {updatedPosts.map((post) => (
//           <Card
//             key={post.id}
//             className="my-3"
//             data-aos="fade-up" // Add the AOS animation attribute
//             style={{
//               backgroundColor: '#333', // Change the card background color
//               color: 'white', // Change the font color
//               fontFamily: 'Arial, sans-serif', // Change the font family
//             }}
//           >
//             <Card.Body>
//               <Card.Title>
//                 {
                  
//                 }
//               </Card.Title>
//               <Card.Text>{post.body}</Card.Text>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
            
//               <ListGroup.Item>Author: {findAuthor(post.userId)}</ListGroup.Item>
//               <ListGroup.Item>Post ID: {post.id}</ListGroup.Item>
//             </ListGroup>
//           </Card>
//         ))}
//       </Container>
//     </div>
//   );
// };

// export default PostPage;


import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const QuotesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch book categories
    fetch('https://www.googleapis.com/books/v1/volumes?q=programming')
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          const uniqueCategories = Array.from(
            new Set(data.items.map((book) => book.volumeInfo.categories).flat())
          );
          setCategories(uniqueCategories);
        }
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
      <Container>
        <h1 className="mt-4" style={{ fontFamily: 'math', textAlign: 'center', color: 'white' }}>
          Book Categories
        </h1>
        <Row>
          {categories.map((category) => (
            <Col key={category} md={4} className="mb-4">
              <Card
                style={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                <Card.Body>
                  <Card.Title>{category}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default QuotesPage;



