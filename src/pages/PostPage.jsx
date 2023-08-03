// import React from 'react'
// import { useParams } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// export default function PostPage() {

// const  {postName} = useParams

//   return (
//     <div className='container'>
//         <div className="my-5">
//             <h1>{postName.toUpperCase()}</h1>
//             <p className="text-info"></p>
//         </div>


//         <div className="row">
//             <div className="col-md-6">

//             <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//             </div>
//         </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Posts</h1>
      {posts.map((post) => (
        <Card key={post.id} className="my-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>User ID: {post.userId}</ListGroup.Item>
            <ListGroup.Item>Post ID: {post.id}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </Container>
  );
};

export default PostPage;



