import React, { Component } from "react";

class Counter extends Component {
  // any name
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span className={`badge ${this.getBadgeClasses()} m-2`}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement("product")}
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
          onClick={() => this.handleDecrement("product")}
          className={"m-2 btn btn-warning btn-sm "}
        >
          Decrement
        </button>
      </div>
    ); // this is jsx expression
  }

  formatCount() {
    // return this.state.value === 0 ? "Zero" : this.state.value;
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
    // return value === 0 ? <h1>Zero</h1> : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
