import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span className={`badge ${this.getBadgeClasses()} m-2`}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className={"m-2 btn btn-warning btn-sm "}
        >
          Decrement
        </button>
      </div>
    ); // this is jsx expression
  }

  formatCount() {
    // return this.state.value === 0 ? "Zero" : this.state.value;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    // return value === 0 ? <h1>Zero</h1> : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
