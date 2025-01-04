import { viewProp } from "./Interfaces";

const ToDoSideBar = ({ setView }: viewProp) => {
  return (
    <div
      onClick={() => {
        setView("project");
      }}
    >
      ToDoSideBar
    </div>
  );
};

export default ToDoSideBar;
