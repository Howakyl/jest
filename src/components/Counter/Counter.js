import React from 'react';

class Counter extends React.Component {
  state = {
    number: 0,
  }

  add = () => {
    this.setState( prevState => { prevState.number ++ })
  }

  subtract = () => {
    this.setState(prevState => { prevState.number -- })
  }

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p className="number">{this.state.number}</p>
        <div>
          <button 
            className="plus"
            onClick={this.add}
            >
              +
            </button>
          <button
            className="minus"
            onClick={this.subtract}
          >
            -
          </button>
        </div>
      </div>
    )
  }
  
}

export default Counter;