

// import React, { useState, useEffect } from 'react';
// import { Container, Card, ListGroup } from 'react-bootstrap';

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
//   }, []);

//   // Function to find author by user ID
//   const findAuthor = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : 'Unknown Author';
//   };

//   return (
//     <div  style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
//     <Container style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
//       <h1 className="mt-4" style={{ fontFamily: "math", textAlign: "center" , color: "white"}}>Explore Knowledge: Thoughtful Posts</h1>
//       {posts.map((post) => (
//         <Card key={post.id} className="my-3">
//           <Card.Body>
//             <Card.Title>{post.title}</Card.Title>
//             <Card.Text>{post.body}</Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item>Author: {findAuthor(post.userId)}</ListGroup.Item>
//             <ListGroup.Item>Post ID: {post.id}</ListGroup.Item>
//           </ListGroup>
//         </Card>
//       ))}
//     </Container>
//     </div>
//   );
// };

// export default PostPage;

import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));

    // Fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));

    // Initialize AOS
    AOS.init({ duration: 800 }); // You can adjust the animation duration
  }, []);

  // Function to find author by user ID
  const findAuthor = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown Author';
  };

  // Update posts and authors
  const updatedPosts = posts.map((post) => ({
    ...post,
  
    userId: 6 // Change the user ID to match a different author
  }));

  return (
    <div style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
      <Container style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
        <h1 className="mt-4" style={{ fontFamily: 'math', textAlign: 'center', color: 'white' }}>
          Explore Knowledge: Thoughtful Posts
        </h1>
        {updatedPosts.map((post) => (
          <Card
            key={post.id}
            className="my-3"
            data-aos="fade-up" // Add the AOS animation attribute
            style={{
              backgroundColor: '#333', // Change the card background color
              color: 'white', // Change the font color
              fontFamily: 'Arial, sans-serif', // Change the font family
            }}
          >
            <Card.Body>
              <Card.Title>
                {
                  
                }
              </Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            
              <ListGroup.Item>Author: {findAuthor(post.userId)}</ListGroup.Item>
              <ListGroup.Item>Post ID: {post.id}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default PostPage;


