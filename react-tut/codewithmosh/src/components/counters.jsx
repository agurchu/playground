import Counter from "./counter";
import React, { Component } from "react";

// stateless functinal component
const Counters = (props) => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
