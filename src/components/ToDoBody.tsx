import { ToDoBodyProps } from "./Interfaces";

const ToDoBody: React.FC<ToDoBodyProps> = ({ project }) => {
  return (
    <div>
      {project.todos.map((card, index) => (
        <div>
          {card.name}-{index}
        </div>
      ))}
    </div>
  );
};

export default ToDoBody;
