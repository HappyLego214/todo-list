import { useState } from "react";
import { TaskCategoryProps } from "../Interfaces";
import TaskCard from "./TaskCard";

const TaskCategory: React.FC<TaskCategoryProps> = ({
  category,
  todos,
  addToDo,
  updateToDo,
  removeToDo,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToDo(inputValue, category);
    setInputValue("");
  };

  return (
    <div className="task-category">
      <div className="category-name">{category}</div>
      <div className="category-cards">
        {todos.map((todo, index) => (
          <TaskCard
            todo={todo}
            index={index}
            key={index}
            updateToDo={updateToDo}
            removeToDo={removeToDo}
          ></TaskCard>
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
