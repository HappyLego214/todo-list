import { CardProp } from "./Interfaces";

const ProjectCard: React.FC<CardProp> = ({ setView, setProject, project }) => {
  return (
    <div
      onClick={() => {
        setView("todo");
        setProject(project);
      }}
    >
      {project.name}-{project.id}
    </div>
  );
};

export default ProjectCard;
