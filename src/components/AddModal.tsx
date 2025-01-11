import React from "react";
import { AddModalProps } from "./Interfaces";

const AddModal: React.FC<AddModalProps> = ({ setModal }) => {
  function handleOverlayClick() {
    setModal(false);
  }

  function handleContentCLick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentCLick}></div>
    </div>
  );
};

export default AddModal;
