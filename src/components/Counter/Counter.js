import React from 'react';

class Counter extends React.Component {
  state = {
    number: 0,
  }

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p className="number">{this.state.number}</p>
      </div>
    )
  }
  
}

export default Counter;