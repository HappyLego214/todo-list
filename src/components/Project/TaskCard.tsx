import { FaArchive } from "react-icons/fa";
import { TaskCardProps } from "../Interfaces";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { format } from "date-fns";

const today = new Date();

const TaskCard: React.FC<TaskCardProps> = ({
  updateToDo,
  removeToDo,
  index,
  todo,
}) => {
  const [inputTodo, setToDo] = useState(todo);

  function handleStatusChange() {
    const updatedToDo = {
      ...inputTodo,
      status: inputTodo.status === false ? true : false,
    };
    setToDo(updatedToDo);
    updateToDo(updatedToDo);
  }

  function handleRemoveToDo() {
    removeToDo(todo.id);
  }

  return (
    <div className="todo-card" key={index}>
      <div className="todo-container">
        <div className="todo-checkmark">
          <div onClick={handleStatusChange}>
            {todo.status == false ? (
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
    </div>
  );
};

export default TaskCard;
