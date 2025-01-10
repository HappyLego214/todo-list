import { CardProp } from "../Interfaces";

const ProjectCard: React.FC<CardProp> = ({ setView, setProject, project }) => {
  return (
    <div
      className="project-card"
      onClick={() => {
        setView("todo");
        setProject(project);
      }}
    >
      <div className="project-title">
        {" "}
        {project.name}-{project.id}
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCard;
