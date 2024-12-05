import React from 'react'
import './all.css'
function SignUp() {
  return (
    <div>
        <h3>SignUp</h3>
        <p>you choosed the best solution for your problem,please signup to do more with us</p>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
                <form className='signUpForm'>
                    <label className='signUpLabel'>Name</label><input type='text'/><br/>
                    <label className='signUpLabel'>Phone</label><input type='number'/><br/>
                    <label className='signUpLabel'>Email</label><input type='email'/><br/>
                    <label className='signUpLabel'>Date of birth</label><input type='date'/><br/>
                    <label className='signUpLabel'>set a strong password</label>
                    <br/>
                    <input type='password'/><br/>
                    <button className='signUpLabel btn btn-success'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp