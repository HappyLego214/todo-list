import React from "react";
import { AddModalProps } from "./Interfaces";

const AddModal: React.FC<AddModalProps> = ({ setModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content"></div>
    </div>
  );
};

export default AddModal;
