import React from 'react'
import './all.css'
function Login() {
  return (
    <div>
        <h2>Login</h2>
        <p>Once again Welcome to your account , please fill in the form to continue</p>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
                <form className='loginForm'>
                    <label className='signUpLabel'>UserName</label><input  className='signUpLabel' type='text'/><br></br>
                    <label  className='signUpLabel'>Password</label><input  className='signUpLabel' type='password'/><br/>
                    <button className='btn btn-danger signUpLabel'>Login</button>
                </form>
                <a href=''>forgot username/password</a>
            </div>
        </div>
    </div>
  )
}

export default Login