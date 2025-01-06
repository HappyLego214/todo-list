import { ToDoSidebarProps } from "./Interfaces";

const ToDoSideBar = ({ setView, addToDo }: ToDoSidebarProps) => {
  return (
    <div>
      <button
        onClick={() => {
          setView("project");
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          addToDo("test-to-do");
        }}
      >
        Add ToDo
      </button>
      ToDoSideBar
    </div>
  );
};

export default ToDoSideBar;
