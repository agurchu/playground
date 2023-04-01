import React from "react";

const Modal = ({ onCancel, onCofirm }) => {
  const handleConfirm = () => {
    onCancel();
    onCofirm();
  };

  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn " onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
