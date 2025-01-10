import { ToDoBodyProps } from "../Interfaces";
import TaskCategory from "./TaskCategory";

const ToDoBody: React.FC<ToDoBodyProps> = ({
  project,
  addToDo,
  updateToDo,
  removeToDo,
}) => {
  const categories = ["ToDo", "Doing", "Done"];
  return (
    <div className="todo-body">
      {categories.map((category, index) => {
        const filteredTodos = project.todos.filter(
          (todo) => todo.category === category
        );
        return (
          <TaskCategory
            key={index}
            todos={filteredTodos}
            category={category}
            addToDo={addToDo}
            updateToDo={updateToDo}
            removeToDo={removeToDo}
          ></TaskCategory>
        );
      })}
    </div>
  );
};

export default ToDoBody;
