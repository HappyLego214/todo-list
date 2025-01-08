import { useState } from "react";
import { TaskCategoryProps } from "./Interfaces";
import { FaArchive } from "react-icons/fa";

const TaskCategory: React.FC<TaskCategoryProps> = ({
  category,
  todos,
  addToDo,
  removeToDo,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToDo(inputValue, category.status);
    setInputValue("");
  };

  return (
    <div className="task-category">
      <div className="category-name">{category.name}</div>
      <div className="category-cards">
        {todos.map((todo, index) => (
          <div className="todo-card" key={index}>
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
        ))}
      </div>
      <div className="category-add">
        <form onSubmit={handleFormSubmit}>
          <input
            name="task-name"
            placeholder="Enter New Task"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default TaskCategory;
