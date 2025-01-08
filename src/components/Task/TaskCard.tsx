import { FaArchive } from "react-icons/fa";
import { TaskCardProps } from "../Interfaces";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

const TaskCard: React.FC<TaskCardProps> = ({ removeToDo, index, todo }) => {
  const [inputCheck, setCheck] = useState(0);

  return (
    <div className="todo-card" key={index}>
      <div className="todo-container">
        <div className="todo-checkmark">
          {todo.status == 0 ? (
            <MdOutlineRadioButtonUnchecked />
          ) : (
            <FaRegCheckCircle />
          )}
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
