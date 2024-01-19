import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task,toggleComplete}) => {
  return (
    <div className='todo'>
      <p onClick={()=>{toggleComplete(task.id)}} className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}</p>
      <div className='icons'>
        <FontAwesomeIcon className='icons' icon={faPenToSquare}></FontAwesomeIcon>
        <FontAwesomeIcon className='icons' icon={faTrash}></FontAwesomeIcon>
      </div>
    </div>
  )
}
