import React, { Component } from "react";

class Counter extends Component {
  // any name
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </div>
    ); // this is jsx expression
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
