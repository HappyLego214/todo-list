import { ProjectBodyProps } from "./Interfaces";
import ProjectCard from "./ProjectCard";

const ProjectBody: React.FC<ProjectBodyProps> = ({
  setView,
  setProject,
  projects,
}) => {
  return (
    <div className="body">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          setView={setView}
          setProject={setProject}
        ></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectBody;
