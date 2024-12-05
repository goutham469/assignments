import React from 'react'
import { useNavigate } from 'react-router-dom'
import { compareSync } from 'bcryptjs'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
    let navigate = useNavigate()
    let [FirstName,changeFirstName]=useState()
    let [password,changePassword]=useState()
    function changeFirstNamefun(event){changeFirstName(event.target.value);console.log(event.target.value)}
    function changePasswordfun(event){changePassword(event.target.value)}
    function login(event){event.preventDefault();
    let obj={Name1:FirstName,pass:password};
    fetch(`http://localhost:4003/users/?First_Name=${obj.Name1}`).then(dataArray=>dataArray.json()).then(data=>{
        console.log(data);
        if(data.length==0){alert("user not exist")}
        else{
            let result = compareSync(obj.pass,data[0].Password);
            if(result==true){alert("hey you got it");alert("welcome once again");navigate(`/Products/${data[0].First_Name}`,{state:data[0]});   }
            else{alert("you entered wrong password")}
        }
    })
    }
  return (
    <div>
        <h2 className='text-warning'>Login</h2>
        <p> i am happy you had an account</p>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-4'>
                <form className='SignInForm'>
                    <label>First Name</label><input type="text" onChange={changeFirstNamefun}></input><br></br>
                    <label>Password</label><input type='password'  onChange={changePasswordfun}/><br/>
                    <button className='signInSubmitButton' onClick={login}>Login</button>
                </form>
                <Link to="/SignIn">did not had account,Create new</Link>
            </div>
        </div>
    </div>
  )
}

export default Login