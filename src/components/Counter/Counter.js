import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 0,
    }
  }

  add = () => {
    this.setState( {number: this.state.number + 1})
  }

  subtract = () => {
    this.setState({number: this.state.number - 1})
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