import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDelete = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen && <Modal onClick={() => setModalIsOpen(false)} />}
      {modalIsOpen && <Backdrop onClick={() => setModalIsOpen(false)} />}
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
