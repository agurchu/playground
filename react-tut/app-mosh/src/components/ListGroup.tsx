import { useState } from "react";

const ListGroup = () => {
  let items = ["Polokwane", "BGF", "Joburg", "Cape Town", "Durban"];
  //   let selectedIndex = 0;

  //Hook
  const [selectedIndex, setSelectedIdex] = useState(-1);
  // state

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => setSelectedIdex(index)}
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
