import { TaskCategoryProps } from "./Interfaces";

const TaskCategory: React.FC<TaskCategoryProps> = ({ category, todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.name}-{todo.id}
        </div>
      ))}
    </div>
  );
};

export default TaskCategory;
