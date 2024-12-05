import React from 'react'
import './toDoListApp.css'

function tasksList(props) {
  return (
    <div className='addTaskDiv'>
      <h3 className='text-danger' >Tasks List</h3>
      {
        props.data.map(task=><p className='taskItem'>{task}</p>)
      }
      
    </div>
  )
}

export default tasksList