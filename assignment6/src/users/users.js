import './users.css'
import 'bootstrap/dist/css/bootstrap.css';
import Child from './child/child';
import { useState } from 'react';
import { useEffect } from 'react';
function Users(){
    let [data,setData] = useState([])

    useEffect(()=>{
        fetch(" https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(data=>setData(data));
    },[])
    let [a,changea]=useState(0)
    function update(){changea(a+1)}
    return(
        <div className='row'>
            <div className='col-lg-5'></div>
            <Child className="col-lg-1" num={a}/>
            <div className='UsersDiv row'>
            
            {
                data.map(user=><div className='UserCard col-lg-3'><h3>Id : {user.id}</h3><p>name:{user.name}</p><p>user name:{user.username}</p><p>email : {user.email}</p><button onClick={update}>Add</button></div>)
            }
            </div>
        </div>
    )
}

export default Users;