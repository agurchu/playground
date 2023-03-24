import Counter from "./counter";
import React, { Component } from "react";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    this.state.counters.value = 0;
    const reset = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: reset });
  };

  handleIncrement = (product) => {
    // this.setState({ value: product.value++ });
    const products = [...this.state.counters];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    this.setState({ counters: products });
  };
  handleDecrement = (product) => {
    if (product.value === 0) {
      return;
    }
    this.setState({ value: product.value-- });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
