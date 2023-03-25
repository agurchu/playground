import { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["Polokwane", "BGF", "Joburg", "Cape Town", "Durban"];

  // event Handler function
  const handleClick = (event: MouseEvent) => console.log(event.);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li onClick={handleClick} key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
