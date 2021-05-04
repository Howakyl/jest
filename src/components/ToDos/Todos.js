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


  render () {
    return (
      <div>
        <input 
          type="text"
          onChange={this.handleChange}
          />
        {this.state.toDos.map((task, idx) => (
          <Todo task={task} key={idx} />
          ))
        }
      </div>
    )
  }
}

export default Todos;