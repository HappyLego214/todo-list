import { CardProp } from "./Interfaces";

const ProjectCard: React.FC<CardProp> = ({ setView, setProject, project }) => {
  return (
    <div
      className="project-card"
      onClick={() => {
        setView("todo");
        setProject(project);
      }}
    >
      <div></div>
      {project.name}-{project.id}
    </div>
  );
};

export default ProjectCard;
