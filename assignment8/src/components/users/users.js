import React from "react";
import './users.css'
import { useState } from "react";
function Users(props){
    let a=[10,20,30,40]
    return(
        <div>
            <p className="totalCount">Total users registered = {props.total}</p>
            <table className="RegisteredUsers">
                <thead>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        props.data.map(user=><tr><td>{user.Name}</td><td>{user.phone}</td><td>{user.mailid}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users;