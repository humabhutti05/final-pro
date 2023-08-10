// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import ReactStars from 'react-stars'


// export default function ProductPage() {

//     const { productID } = useParams()
//     const [product, setProduct] = useState({})
//     const [review, setReview] = useState("")
//     const [ratingStar, setRatingStar] = useState(0)
//     const [productQuantity, setProductQuantity] = useState(1)

//     const ratingChanged = (newRating) => {
//         setRatingStar(newRating)
//     }

//     const submitReview = () => {
//         const payload = {
//             productID: productID,
//             review: review,
//             rating: ratingStar
//         }
//         console.log(payload)




//         setReview('')
//         setRatingStar(0)

//     }

//     const addToCart = () => {

//         const payload = {
//             ...product,
//             productQuantity,
//             totalPrice: product.price * productQuantity
//         }

//         console.log(payload)


//     }

//     useEffect(() => {
//         axios.get(`https://dummyjson.com/products/${productID}`).then(json => setProduct(json.data))

//     }, [])


//     return (
//         <div className="container">
//             <div className="text-center my-5">
//                 <h1>{product.title} - {product.price}$</h1>
//                 <p className="text-secondary">{product.description}</p>
//                 <div className='d-flex justify-content-center'>
//                     <ReactStars
//                         count={5}
//                         size={24}
//                         edit={false}
//                         value={product.rating}
//                         color2={'#ffd700'}
//                     />
//                 </div>

//                 <div className="my-3">
//                     <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setProductQuantity(productQuantity - 1)}>-</button>
//                     {productQuantity}
//                     <button className="btn btn-dark mx-3" onClick={() => setProductQuantity(productQuantity + 1)}>+</button>
//                 </div>


//                 <button className='btn btn-dark' onClick={addToCart}>Add to Cart</button>
//             </div>

//             <div className="row">
//                 <div className="col-md-6">

//                     {
//                         product?.images?.length > 0 && <ImageSection images={product.images} />
//                     }

//                 </div>


//                 <div className="col-md-6">

//                     <div className="container">
//                         <div className='mb-5'>
//                             <h2 className="text-center">Reviews Us</h2>
//                             <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.</p>
//                         </div>



//                         <div>


//                             <div className="form-floating">
//                                 <textarea
//                                     className="form-control"
//                                     placeholder="Leave a comment here"
//                                     id="floatingTextarea2"
//                                     style={{ height: 100 }}
//                                     defaultValue={review}
//                                     onChange={(e) => setReview(e.target.value)}
//                                 />
//                                 <label htmlFor="floatingTextarea2">Comments</label>
//                             </div>

//                             <div className='mt-3'>

//                                 Rate Us :
//                                 <div className="d-flex align-items-center">
//                                     <ReactStars
//                                         count={5}
//                                         size={24}
//                                         value={ratingStar}
//                                         onChange={ratingChanged}
//                                         color2={'#ffd700'}
//                                     />
//                                     <span className='ms-3'>({ratingStar})</span>
//                                 </div>
//                             </div>
//                             <button className='my-3 btn btn-dark' onClick={submitReview}>Submit review</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
// import React from 'react'

// export default function ProductPage() {
//   return (
//     <div>ProductPage</div>
//   )
// }





import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch book products
    fetch('https://www.googleapis.com/books/v1/volumes?q=programming')
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setBooks(data.items);
        }
      })
      .catch((error) => console.error('Error fetching books:', error));

    // Initialize AOS
    AOS.init({ duration: 800 }); // You can adjust the animation duration
  }, []);

  return (
    <div style={{ backgroundColor: '#000d1a', padding: '20px', minHeight: '100vh' }}>
      <Container>
        <h1 className="mt-4" style={{ fontFamily: 'math', textAlign: 'center', color: 'white' }}>
          Book Products
        </h1>
        <Row>
          {books.map((book) => (
            <Col key={book.id} md={4} className="mb-4" data-aos="fade-up">
              <Card
                style={{
                  backgroundColor: '#333',
                  color: 'white',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                <Card.Body>
               
                  <Card.Title>{book.volumeInfo.title}</Card.Title>
                  <Card.Text>{book.volumeInfo.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BooksPage;
