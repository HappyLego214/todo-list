import { ProjectSidebarProps } from "./Interfaces";
import { CgProfile } from "react-icons/cg";
import { WiDaySunny } from "react-icons/wi";
import { FaTasks } from "react-icons/fa";
import { BsCalendar2Day } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import AddBox from "./modals/AddModal";
import { useState } from "react";

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
  addProject,
  setProject,
  projects,
}) => {
  const [addModal, setAddModal] = useState(false);

  function handleModalClick() {
    setAddModal(true);
  }

  function handleSetProjectClick(e: React.MouseEvent<HTMLDivElement>) {
    const projectId = e.currentTarget.getAttribute("data-project-id");
    const selectedProject = projects.find((project) => project.id == projectId);

    if (selectedProject) {
      setProject(selectedProject);
    }
  }

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
      <div className="project-list-container">
        <div className="project-list-options">
          <p>Project List</p>
          <MdOutlineAddCircleOutline
            className="project-add"
            onClick={handleModalClick}
            /* addProject("Test-Project", []); */
          />
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <div
              className="project-selection"
              key={index}
              data-project-id={project.id}
              onClick={handleSetProjectClick}
            >
              <GoDotFill />
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      </div>
      {addModal == true ? (
        <AddBox setAddModal={setAddModal} addProject={addProject}></AddBox>
      ) : null}
    </div>
  );
};

export default ProjectSidebar;
