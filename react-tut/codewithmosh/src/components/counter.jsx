import React, { Component } from "react";

class Counter extends Component {
  // any name
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={`badge ${this.getBadgeClasses()} m-2`}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increament</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>
              {tag}
            </li> /* whenever use map instert key to make the list unique */
          ))}
        </ul>
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
