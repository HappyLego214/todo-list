import { ProjectBodyProps } from "./Interfaces";
import ProjectCard from "./ProjectCard";

const ProjectBody: React.FC<ProjectBodyProps> = ({
  setView,
  setProject,
  projects,
}) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          project={project}
          setView={setView}
          setProject={setProject}
        ></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectBody;
