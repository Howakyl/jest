import React from 'react';

const Todo = ({ task, markComplete }) => {
  return (
    <div>
      <button className='mark-done' onClick={e => markComplete(task)}>Completed</button>
      <div className="task-name" done={markComplete}>{task.task}</div>
    </div>
  )
}

export default Todo;