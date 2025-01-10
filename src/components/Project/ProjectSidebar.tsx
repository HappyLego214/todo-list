import { ProjectSidebarProps } from "../Interfaces";
import { CgProfile } from "react-icons/cg";
import { WiDaySunny } from "react-icons/wi";
import { FaTasks } from "react-icons/fa";
import { BsCalendar2Day } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ addProject }) => {
  return (
    <div className="project-sidebar">
      <div className="project-user">
        <div className="user-photo">
          <CgProfile />
        </div>
        <div className="user-greet">
          <p>Hello There!</p>
          <h5>Josh</h5>
        </div>
      </div>
      <div className="project-view">
        <div className="views views-today ">
          <WiDaySunny className="views-svg" /> <p>Today</p>
        </div>
        <div className="views views-week">
          <BsCalendar2Day className="views-svg" /> <p>This Week</p>
        </div>
        <div className="views views-all">
          <FaTasks className="views-svg" /> <p>All Tasks</p>
        </div>
      </div>
      <div className="project-list">
        <div className="project-list-options">
          <p>Project List</p>
          <MdOutlineAddCircleOutline
            className="project-add"
            onClick={() => {
              addProject("Test-Project", [
                { id: "1", name: "4", status: 0, category: "ToDo" },
                { id: "2", name: "4", status: 0, category: "Doing" },
                { id: "3", name: "4", status: 0, category: "Done" },
              ]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
