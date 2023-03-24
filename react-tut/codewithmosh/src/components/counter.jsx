import React, { Component } from "react";

class Counter extends Component {
  // any name
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>
            {tag}
          </li> /* whenever use map instert key to make the list unique */
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && <p>"Please create a new tag</p>}
        {this.renderTags()}
      </div>
    ); // this is jsx expression
  }
}

export default Counter;
