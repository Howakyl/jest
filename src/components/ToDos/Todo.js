import React from 'react';

const Todo = ({ task }) => {
  return (
    <div>
      <div className="task-name">{task.task}</div>
    </div>
  )
}

export default Todo;