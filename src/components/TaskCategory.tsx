import { TaskCategoryProps } from "./Interfaces";

const TaskCategory: React.FC<TaskCategoryProps> = ({
  category,
  todos,
  addToDo,
  removeToDo,
}) => {
  return (
    <div>
      <div>{category.name}</div>
      {todos.map((todo, index) => (
        <div key={index}>
          <div>
            {todo.name}-{todo.id}
          </div>
          <div>
            <button
              onClick={() => {
                removeToDo(todo.id);
              }}
            >
              Archive ToDo
            </button>
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={() => {
            addToDo("test-to-do", category.status);
          }}
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
};

export default TaskCategory;
