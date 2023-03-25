const ListGroup = () => {
  const items = ["Polokwane", "BGF", "Joburg", "Cape Town", "Durban"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
