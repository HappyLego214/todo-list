import { EditModalProps } from "../Interfaces";

const EditModal: React.FC<EditModalProps> = ({ setEditModal }) => {
  function handleOverlayClick() {
    setEditModal(false);
  }

  function handleContentCLick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentCLick}>
        Test
      </div>
    </div>
  );
};

export default EditModal;
