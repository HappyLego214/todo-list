import { FaArchive } from "react-icons/fa";
import { TaskCardProps } from "../Interfaces";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

const TaskCard: React.FC<TaskCardProps> = ({
  updateToDo,
  removeToDo,
  index,
  todo,
}) => {
  const [inputTodo, setToDo] = useState(todo);

  const handleStatusChange = () => {
    const updatedToDo = {
      ...inputTodo,
      status: inputTodo.status === 0 ? 1 : 0,
    };
    setToDo(updatedToDo);
    updateToDo(updatedToDo);
  };

  return (
    <div className="todo-card" key={index}>
      <div className="todo-container">
        <div className="todo-checkmark">
          <div onClick={handleStatusChange}>
            {todo.status == 0 ? (
              <MdOutlineRadioButtonUnchecked />
            ) : (
              <FaRegCheckCircle />
            )}
          </div>
        </div>
        <div className="todo-details">
          <div className="todo-top">
            <div>{todo.name}</div>
            <div>
              <FaArchive
                onClick={() => {
                  removeToDo(todo.id);
                }}
              ></FaArchive>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
