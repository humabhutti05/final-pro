import React from 'react'
import Contact from './Contact'
import { Container } from 'react-bootstrap'
import './SignUp.css'

export default function Login() {
  return (
    <div className='signUp-page' style={{backgroundColor: "#000d1a"}}>
      <Container>
      <div className="signUp-box">
    <form>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required="" />
        <label>Password</label>
      </div>
      <center>
        <a href="#">
          SEND
          <span />
        </a>
      </center>
      <p className='text-white'>
       Already have an account?<a href="/login"> 
       Login now</a>
      </p>
    </form>
  </div>
      </Container>
    </div>
  )
}




