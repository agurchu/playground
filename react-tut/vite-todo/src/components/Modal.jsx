import React from "react";

const Modal = ({ onClick }) => {
  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={onClick}>
        Cancel
      </button>
      <button className="btn " onClick={onClick}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
