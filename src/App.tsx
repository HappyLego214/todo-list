import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ProjectBody from "./components/ProjectBody";
import ToDoBody from "./components/TaskBody";
import ProjectSidebar from "./components/ProjectSidebar";
import ToDoSideBar from "./components/TaskSideBar";
import { Project, ToDo } from "./components/Interfaces";

const initialProjects: Project[] = [
  {
    id: "1",
    name: "School",
    todos: [
      { id: "1", name: "1", status: 0 },
      { id: "2", name: "1", status: 1 },
      { id: "3", name: "1", status: 2 },
    ],
  },
  {
    id: "2",
    name: "House",
    todos: [
      { id: "1", name: "2", status: 0 },
      { id: "2", name: "2", status: 1 },
      { id: "3", name: "2", status: 2 },
    ],
  },
  {
    id: "3",
    name: "Personal",
    todos: [
      { id: "1", name: "3", status: 0 },
      { id: "2", name: "3", status: 1 },
      { id: "3", name: "3", status: 2 },
    ],
  },
];

function App() {
  const [view, setView] = useState("project");
  const [project, setProject] = useState(initialProjects[0]);
  const [projects, updateProjects] = useState(initialProjects);

  function addProject(name: string, todos: ToDo[]) {
    let newProject = {
      id: uuidv4(),
      name: name,
      todos: todos,
    };

    updateProjects((prevProjects) => [...prevProjects, newProject]);
  }

  function addToDo(name: string) {
    let newToDo = {
      id: uuidv4(),
      name: name,
      status: 0,
    };

    const todos = project.todos;
    todos.push(newToDo);

    updateProjects((prevProjects) => [...prevProjects, project]);
  }

  return (
    <div id="main">
      {view === "project" ? (
        <ProjectSidebar addProject={addProject}></ProjectSidebar>
      ) : (
        <ToDoSideBar setView={setView} addToDo={addToDo}></ToDoSideBar>
      )}
      {view === "project" ? (
        <ProjectBody
          projects={projects}
          setView={setView}
          setProject={setProject}
        ></ProjectBody>
      ) : (
        <ToDoBody project={project}></ToDoBody>
      )}
    </div>
  );
}

export default App;
