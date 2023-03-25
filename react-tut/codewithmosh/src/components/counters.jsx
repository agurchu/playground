import Counter from "./counter";
import React from "react";

const Counters = (props) => {
  const { counters, onReset, onIncrement, onDecrement, onDelete } = props;
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
