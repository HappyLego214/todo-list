import { FaArchive } from "react-icons/fa";
import { TaskCardProps } from "../Interfaces";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import { format } from "date-fns";
import EditModal from "../modals/EditModal";

const today = new Date();

const TaskCard: React.FC<TaskCardProps> = ({
  updateToDo,
  removeToDo,
  index,
  todo,
}) => {
  const [inputTodo, setToDo] = useState(todo);
  const [editModal, setEditModal] = useState(false);

  function handleStatusChange(e: React.MouseEvent) {
    e.stopPropagation();

    const updatedToDo = {
      ...inputTodo,
      status: inputTodo.status === false ? true : false,
    };
    setToDo(updatedToDo);
    updateToDo(updatedToDo);
  }

  function handleModalClick() {
    setEditModal(true);
  }

  function handleRemoveToDo(e: React.MouseEvent) {
    e.stopPropagation();
    removeToDo(todo.id);
  }

  return (
    <div className="todo-card" key={index}>
      <div className="todo-container" onClick={handleModalClick}>
        <div className="todo-checkmark">
          <div onClick={handleStatusChange}>
            {todo.status == false ? <FaRegCircle /> : <FaRegCheckCircle />}
          </div>
        </div>
        <div className="todo-details">
          <div className="todo-top">
            <div>{todo.name}</div>
            <div>
              <FaArchive onClick={handleRemoveToDo}></FaArchive>
            </div>
          </div>
          <div className="todo-bot">
            {todo.due == today ? (
              <p>Today</p>
            ) : (
              <p>{format(todo.due, "LLLL d, yyyy")}</p>
            )}
          </div>
        </div>
      </div>
      {editModal == true ? (
        <EditModal
          setEditModal={setEditModal}
          handleRemoveToDo={handleRemoveToDo}
          handleStatusChange={handleStatusChange}
          todo={todo}
        ></EditModal>
      ) : null}
    </div>
  );
};

export default TaskCard;
