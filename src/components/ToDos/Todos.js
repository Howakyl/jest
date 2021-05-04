import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      toDos: this.props.tasks
    }
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    });
    console.log(this.state.newTodo)
  };

  createToDo = (e) => {
    this.setState(prevState => ({
      newTodo: '',
      toDos: [...prevState.toDos, {task: prevState.newTodo, done: false}],
    }))
  }

  render () {
    return (
      <div>
        <input 
          type="text"
          onChange={this.handleChange}
          />
          <button
            onClick={this.createToDo} className="new-todo"
          >create new To Do</button>
        {this.state.toDos.map((task, idx) => (
          <Todo task={task} key={idx} />
          ))
        }
      </div>
    )
  }
}

export default Todos;