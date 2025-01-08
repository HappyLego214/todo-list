import { ToDoSidebarProps } from "../Interfaces";

const ToDoSideBar = ({ setView }: ToDoSidebarProps) => {
  return (
    <div>
      <button
        onClick={() => {
          setView("project");
        }}
      >
        Back
      </button>
      ToDoSideBar
    </div>
  );
};

export default ToDoSideBar;
