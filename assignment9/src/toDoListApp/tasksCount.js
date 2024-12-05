import React from 'react'
import './toDoListApp.css'

function tasksCount(props) {
  return (
    <div className='addTaskDiv'>
      <h3 className='text-danger'>Task Count</h3>
      <h2 className='text-warning'>{props.data.length}</h2>
    </div>
  )
}

export default tasksCount