import React, { useState } from "react";
import { AddModalProps } from "./Interfaces";
import { FaXmark } from "react-icons/fa6";

const AddModal: React.FC<AddModalProps> = ({ setModal, addProject }) => {
  const [inputValue, setInputValue] = useState("");

  function handleOverlayClick() {
    setModal(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addProject(inputValue, []);
    setInputValue("");
    setModal(false);
  }

  function handleContentCLick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentCLick}>
        <div className="modal-container">
          <div className="modal-top">
            <h4>Add New Project</h4>
            <div className="modal-exit">
              <FaXmark />
            </div>
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder="Enter New Project"
              onChange={handleInputChange}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
