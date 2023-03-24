import React, { Component } from "react";

class Counter extends Component {
  // any name
  state = {
    count: 0,
  };

  handleIncrement() {
    console.log("increment clicked");
  }

  render() {
    return (
      <div>
        <span className={`badge ${this.getBadgeClasses()} m-2`}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </div>
    ); // this is jsx expression
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }
}

export default Counter;
