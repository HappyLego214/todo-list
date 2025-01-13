import { FaXmark } from "react-icons/fa6";
import { EditModalProps } from "../Interfaces";
import { FaArchive } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import { format } from "date-fns";
import { useEffect } from "react";

const EditModal: React.FC<EditModalProps> = ({
  todo,
  setEditModal,
  handleRemoveToDo,
  handleStatusChange,
  handleNoteChange,
  textAreaRef,
}) => {
  function handleOverlayClick() {
    setEditModal(false);
  }

  function handleContentCLick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  useEffect(() => {
    if (textAreaRef.current) {
      handleNoteChange();
    }
  }, []);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content modal-edit" onClick={handleContentCLick}>
        <div className="modal-container modal-edit">
          <div className="modal-edit-top">
            <h5>{todo.name}</h5>
            <div className="modal-options">
              {todo.status == false ? (
                <p onClick={handleStatusChange}>Mark as Complete</p>
              ) : (
                <div className="modal-completed">
                  <IoCheckmarkOutline />
                  <p onClick={handleStatusChange}>Completed</p>
                </div>
              )}

              <FaArchive
                className="modal-archive"
                onClick={handleRemoveToDo}
              ></FaArchive>
              <FaXmark className="modal-exit" onClick={handleOverlayClick} />
            </div>
          </div>
          <div className="modal-center">
            <div className="modal-notes">
              <div className="notes-top">
                <p>Notes</p>
                <p className="modal-due">{format(todo.due, "LLLL d, yyyy")}</p>
              </div>
              <textarea
                ref={textAreaRef}
                placeholder="Place your notes here"
                onInput={handleNoteChange}
                defaultValue={todo.notes}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
