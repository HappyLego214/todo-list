import { ProjectBodyProps } from "../Interfaces";
import TaskCategory from "./TaskCategory";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaDeleteLeft } from "react-icons/fa6";

const ProjectBody: React.FC<ProjectBodyProps> = ({
  project,
  addToDo,
  updateToDo,
  removeToDo,
  removeProject,
}) => {
  function handleRemoveProject() {
    removeProject(project.id);
  }

  const categories = ["ToDo", "Doing", "Done"];
  return (
    <div className="project-container">
      <div className="project-top">
        <div className="project-details">
          <h4>{project.name}</h4>
          <PiLineVerticalThin className="project-detail-divider" />
          <p>Total Tasks: {project.todos.length}</p>
          <PiLineVerticalThin className="project-detail-divider" />
          <div className="project-detail-options">
            <FaDeleteLeft onClick={handleRemoveProject} />
          </div>
        </div>
      </div>
      <div className="project-body">
        {categories.map((category, index) => {
          const filteredTodos = project.todos.filter(
            (todo) => todo.category === category
          );
          return (
            <TaskCategory
              key={index}
              todos={filteredTodos}
              category={category}
              addToDo={addToDo}
              updateToDo={updateToDo}
              removeToDo={removeToDo}
            ></TaskCategory>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBody;
