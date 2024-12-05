import React from 'react'
import AddTask from './addTask'
import TasksList from './tasksList'
import TasksCount from './tasksCount'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function ManageTask() {
  let [tasks,changeTasks]=useState([]);
  return (
    <div className='mainDiv'>
      <h1>manageTask</h1>
      <div className='row'>
        <div className='col-lg-4'><AddTask data={changeTasks}/></div>
        <div className='col-lg-4'><TasksList data={tasks}/></div>
        <div className='col-lg-4'><TasksCount data={tasks}/></div>
      </div>
    </div>
    
  )
}

export default ManageTask;