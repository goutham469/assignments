import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <p>Welcome to my Application You need to be verified by my DataBase First,So Please comple your Login</p>
        <h3>Does not Have an account</h3>
        <Link className='text-warning' to="SignIn">Sign In today</Link>
        <h3>Already Has an account</h3>
        <Link className='text-danger' to="Login">Login</Link>
    </div>
  )
}

export default Home