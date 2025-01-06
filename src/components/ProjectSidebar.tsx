import { ProjectSidebarProps } from "./Interfaces";

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ addProject }) => {
  return (
    <div>
      <button
        onClick={() => {
          addProject(4, "Test-Project", [
            { id: 1, name: "3" },
            { id: 2, name: "3" },
            { id: 3, name: "3" },
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
