import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div style={{border:"2px solid black",backgroundColor:"green",padding:"20px",margin:"30px"}}>
        <p>Welcome to my Application You need to be verified by my DataBase First,So Please comple your Login</p>
        <h3>Does not Have an account</h3>
        <Link className='text-warning' to="SignIn">Sign In today</Link>
        <h3>Already Has an account</h3>
        <Link className='text-danger' to="Login">Login</Link>
    </div>
  )
}

export default Home