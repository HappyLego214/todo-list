import { ProjectSidebarProps } from "./Interfaces";

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ addProject }) => {
  return (
    <div>
      <button
        onClick={() => {
          addProject("Test-Project", [
            { id: "1", name: "4", status: 0 },
            { id: "2", name: "4", status: 1 },
            { id: "3", name: "4", status: 3 },
          ]);
        }}
      >
        Add Project
      </button>
      ProjectSidebar
    </div>
  );
};

export default ProjectSidebar;
