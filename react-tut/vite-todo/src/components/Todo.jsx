import React from "react";

const Todo = ({ title }) => {
  const handleDelete = () => {
    console.log("clicked " + title);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
