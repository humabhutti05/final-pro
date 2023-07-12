import React from 'react'
import Contact from './Contact'
import { Container } from 'react-bootstrap'
import './Login.css'

export default function Login() {
  return (
    <div className='login-page' style={{backgroundColor: "#000d1a"}}>
      <Container>
      <div className="login-box">
    <form>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Username</label>
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
        Don't have an account?<a href="/signUp"> Sign up now</a>
      </p>
    </form>
  </div>
      </Container>
    </div>
  )
}




