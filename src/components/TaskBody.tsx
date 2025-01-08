import { ToDoBodyProps } from "./Interfaces";
import TaskCategory from "./TaskCategory";

const ToDoBody: React.FC<ToDoBodyProps> = ({
  project,
  addToDo,
  removeToDo,
}) => {
  const categories = [
    { name: "ToDo", status: 0 },
    { name: "Doing", status: 1 },
    { name: "Done", status: 2 },
  ];
  return (
    <div className="todo-body">
      {categories.map((category, index) => {
        const filteredTodos = project.todos.filter(
          (todo) => todo.status === category.status
        );
        return (
          <TaskCategory
            key={index}
            todos={filteredTodos}
            category={category}
            addToDo={addToDo}
            removeToDo={removeToDo}
          ></TaskCategory>
        );
      })}
    </div>
  );
};

export default ToDoBody;
