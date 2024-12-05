import React from 'react'
import { useState } from 'react'
import './all.css'
import { hashSync } from 'bcryptjs'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    let navigate=useNavigate();
    let [FirstName,changeFirstName]=useState()
    let [LastName,changeLastName]=useState()
    let [Roolno,changeRoolno]=useState()
    let [Age,changeAge]=useState()
    let [Email,changeEmail]=useState()
    let [password,changePassword]=useState()
    function changeFirstNamefun(event){changeFirstName(event.target.value);console.log(event.target.value)}
    function changeLastNamefun(event){changeLastName(event.target.value)}
    function changeRoolnofun(event){changeRoolno(event.target.value)}
    function changeAgefun(event){changeAge(event.target.value)}
    function changeEmailfun(event){changeEmail(event.target.value)}
    function changePasswordfun(event){changePassword(event.target.value)}
    function addUser(event){event.preventDefault();
        let obj={First_Name:FirstName,Last_name:LastName,Rool_no:Roolno,age:Age,email:Email,Password:hashSync(password)};
        console.log(obj);

        fetch("http://localhost:4003/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
        }).then(res=>console.log(res))
        console.log("data written successfully")
        alert("your registration is successful");
        navigate("/Products");
    }

  return (
    <div>
        <h1>Sign In</h1>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
                <form className='SignInForm'>
                    <label>First Name</label><input type='text' onChange={changeFirstNamefun}/><br/>
                    <label>Last Name</label><input type='text' onChange={changeLastNamefun}/><br/>
                    <label>Roolno</label><input type='text' onChange={changeRoolnofun}/><br/>
                    <label>Age</label><input type='number' onChange={changeAgefun}/><br/>
                    <label>Email</label><input type='text' onChange={changeEmailfun}/><br/>
                    <label>Set a Strong password</label>
                    <label>password</label><input type='text' onChange={changePasswordfun}/><br/>
                    <button className="signInSubmitButton" onClick={addUser}>Create Account</button>
                </form>
                <Link to="/Login">already has account, Login</Link>
            </div>
        </div>
    </div>
  )
}

export default SignIn