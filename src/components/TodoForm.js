import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [task, setTask] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(task)
    setTask('')
  }
  return (
    <form className='TodoForm' onSubmit={submitHandler}>
      <input type='text' className='todo_input' value={task} placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}>
      </input>
      <button type='submit' className='todo_btn'>+</button>
      
    </form>
  )
}
