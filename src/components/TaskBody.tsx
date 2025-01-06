import { ToDoBodyProps } from "./Interfaces";

const ToDoBody: React.FC<ToDoBodyProps> = ({ project }) => {
  return (
    <div className="body">
      {project.todos.map((card, index) => (
        <div key={index}>
          {card.name}-{index}
        </div>
      ))}
    </div>
  );
};

export default ToDoBody;
