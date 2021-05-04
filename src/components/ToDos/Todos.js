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

  createToDo = () => {
    this.setState(prevState => ({
      newTodo: '',
      toDos: [...prevState.toDos, {task: prevState.newTodo, done: false}],
    }))
  }

  markComplete = (todo) => {
    this.setState(prevState => ({
      toDos: prevState.toDos.map(item => {
        if (item === todo) item.done = !item.done
        return item
      })
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
          >create</button>
        {this.state.toDos.map((task, idx) => (
          <Todo task={task} key={idx} markComplete={this.markComplete}/>
          ))
        }
      </div>
    )
  }
}

export default Todos;