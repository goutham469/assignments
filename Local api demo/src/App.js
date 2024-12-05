import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { hashSync } from 'bcryptjs';

function App() {
  let [name,changeName]=useState()
  let [email,changeEmail]=useState()
  let [num,changeNum]=useState()
  function changeNamefun(event){changeName(event.target.value)}
  function changeEmailfun(event){changeEmail(event.target.value)}
  function changeNumfun(event){changeNum(event.target.value)}
  function add(event){
    event.preventDefault();
    let obj={
      Name:name,
      Email:email,
      Pno:num
    };
    obj.Name=hashSync(obj.Name,2);
    fetch("http://localhost:4000/users",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj)
  }).then(res=>console.log(res))
}
  return (
    <div className="App">
      <h1>Local api demo</h1>
      <form>
        <label>name</label><input type='text' onChange={changeNamefun}/><br/>
        <label>email</label><input type='email' onChange={changeNamefun}/><br/>
        <label>phno</label><input type='number' onChange={changeNumfun}/><br/>
        <label>age</label><input type='number'/><br/>
        <button onClick={add} className="btn btn-success">Add user</button>
      </form>
    </div>
  );
}

export default App;
