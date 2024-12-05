import React from 'react'
import './toDoListApp.css'
import { useState } from 'react'

function AddTask(props) {
  let [task,changeTask]=useState();
  function changeTaskfun(event){console.log("task changed");changeTask(event.target.value);console.log(task)}
  function addTaskBtn(event){console.log("add task btn called");event.preventDefault();props.data(tasks=>[...tasks,task]);}
  return (
    <div className='addTaskDiv'>
      <h3 className='text-danger'>add Task</h3>
      <span>
        <p>write the tasks you need to add</p>
        <form>
          <label className='label1'>task </label><input className='label1 input1' type='text' onChange={changeTaskfun}/><br/> 
          <button className='btn btn-success p-3' onClick={addTaskBtn}>Add</button>
        </form>
      </span>
    </div>
  )
}

export default AddTask