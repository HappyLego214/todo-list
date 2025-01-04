import { useState } from "react";
import "./App.css";
import ProjectBody from "./components/ProjectBody";
import ToDoBody from "./components/ToDoBody";
import ProjectSidebar from "./components/ProjectSidebar";
import ToDoSideBar from "./components/ToDoSideBar";
import { Project } from "./components/Interfaces";

const initialProjects: Project[] = [
  {
    id: 1,
    name: "School",
    todos: [
      { id: 1, name: "1" },
      { id: 2, name: "1" },
      { id: 3, name: "1" },
    ],
  },
  {
    id: 2,
    name: "House",
    todos: [
      { id: 1, name: "2" },
      { id: 2, name: "2" },
      { id: 3, name: "2" },
    ],
  },
  {
    id: 3,
    name: "Personal",
    todos: [
      { id: 1, name: "3" },
      { id: 2, name: "3" },
      { id: 3, name: "3" },
    ],
  },
];

function App() {
  const [view, setView] = useState("project");
  const [project, setProject] = useState(initialProjects[0]);
  return (
    <div id="main">
      {view === "project" ? (
        <ProjectSidebar></ProjectSidebar>
      ) : (
        <ToDoSideBar setView={setView}></ToDoSideBar>
      )}
      {view === "project" ? (
        <ProjectBody
          projects={initialProjects}
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
