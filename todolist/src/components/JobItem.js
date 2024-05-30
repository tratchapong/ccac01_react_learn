import React from 'react'

function JobItem(props) {
  return (
    <div className='job-item'>
      <div className="job-title">{props.todo.todo}</div>
      <a>Edit</a>
      <a>Del</a>
    </div>
  )
}

export default JobItem