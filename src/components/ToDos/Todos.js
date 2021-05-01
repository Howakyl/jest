import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div>
        {this.props.tasks.map((task, idx) => (
          <Todo task={task} key={idx} />
          ))
        }
      </div>
    )
  }
}

export default Todos;