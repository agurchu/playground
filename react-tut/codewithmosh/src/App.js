import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
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
    const products = [...this.state.counters];
    const index = products.indexOf(product);
    if (product.value === 0) {
      return;
    }
    products[index] = { ...product };
    products[index].value--;
    this.setState({ counters: products });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
