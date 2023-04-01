import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ title, onConfirm }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen && (
        <Modal onCancel={handleCloseModal} onCofirm={onConfirm} />
      )}
      {modalIsOpen && <Backdrop onCancel={handleCloseModal} />}
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
