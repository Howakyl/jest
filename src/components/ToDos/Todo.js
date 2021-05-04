import React from 'react';

const Todo = ({ task, markComplete }) => {
  return (
    <div className="todo-container">
      <button className='mark-done' onClick={e => markComplete(task)}>Completed</button>
      <div className={`task-name ${task.done ? 'checked': 'unchecked'}`}>{task.task}</div>
    </div>
  )
}

export default Todo;