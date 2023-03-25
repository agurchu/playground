import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button onClick={onClick} className="btn-close"></button>
    </div>
  );
};

export default Alert;
