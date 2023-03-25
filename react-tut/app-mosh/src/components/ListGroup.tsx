import { useState } from "react";

interface interProps {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: interProps) => {
  //   let selectedIndex = 0;

  //Hook
  const [selectedIndex, setSelectedIdex] = useState(-1);
  // statevariable, update function

  return (
    <>
      <h1>{heading}</h1>
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
