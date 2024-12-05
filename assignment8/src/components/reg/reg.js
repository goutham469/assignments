import React from "react";
import './reg.css'
import Users from "../users/users";
import { useState } from "react";
function Reg(){
    let [name,changeName] = useState()
    let [ph,changePh]=useState()
    let [email,changeEmail]=useState()
    let [users,changeUsers]=useState([])
    let [Total,changeTotal]=useState(0);
    function changeNameFun(event){console.log("change name called");changeName(event.target.value)}
    function changePhFun(event){console.log("change phone number called");changePh(event.target.value)}
    function changeEmailFun(event){console.log("change email called");changeEmail(event.target.value)}
    function addUser(event){console.log("add user called");event.preventDefault();changeUsersFun();}
    function changeUsersFun(){
        let obj={Name:name,phone:ph,mailid:email};changeUsers(users=>[...users,obj]);changeTotal(Total+1);
    }
    return(
        <div>
            <form className="FOrm">
                <label>name</label><input onChange={changeNameFun} type="name"/><br/>
                <label>number</label><input onChange={changePhFun} type="number"/><br/>
                <label>email</label><input onChange={changeEmailFun} type="email"/><br/>
                <button onClick={addUser} className="SubmitButton">Add User</button>
            </form>
            <center><Users data={users} total={Total}/></center>
        </div>
    )
}
export default Reg; 