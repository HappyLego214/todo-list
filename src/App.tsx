import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ProjectBody from "./components/Project/ProjectBody";
import ToDoBody from "./components/Task/TaskBody";
import ProjectSidebar from "./components/Project/ProjectSidebar";
import ToDoSideBar from "./components/Task/TaskSideBar";
import { Project, ToDo } from "./components/Interfaces";

const initialProjects: Project[] = [
  {
    id: "1",
    name: "School",
    todos: [
      { id: "1", name: "Finish School Project", status: 0, category: "ToDo" },
      { id: "2", name: "Assignments", status: 1, category: "Doing" },
      { id: "3", name: "Group Work", status: 0, category: "Done" },
    ],
  },
  {
    id: "2",
    name: "House",
    todos: [
      { id: "1", name: "Cleaning Kitchen", status: 0, category: "ToDo" },
      { id: "2", name: "Helping Mom", status: 0, category: "Doing" },
      { id: "3", name: "Cooking Dinner", status: 0, category: "Done" },
    ],
  },
  {
    id: "3",
    name: "Personal",
    todos: [
      { id: "1", name: "Personal Project", status: 0, category: "ToDo" },
      { id: "2", name: "Gaming Session", status: 0, category: "Doing" },
      { id: "3", name: "Workout", status: 0, category: "Done" },
    ],
  },
];

const today = new Date();
console.log(today);

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

  function addToDo(name: string, category: string) {
    let newToDo = {
      id: uuidv4(),
      name: name,
      status: 0,
      category: category,
    };

    const updatedTodos = [...project.todos, newToDo];
    const updatedProject = { ...project, todos: updatedTodos };

    updateProjects((prevProjects) =>
      prevProjects.map((p) => (p.id === project.id ? updatedProject : p))
    );

    setProject(updatedProject);
  }

  function removeToDo(id: string) {
    const updatedTodos = project.todos.filter((todo) => todo.id !== id);
    const updatedProject = { ...project, todos: updatedTodos };

    updateProjects((prevProjects) =>
      prevProjects.map((p) => (p.id == project.id ? updatedProject : p))
    );

    setProject(updatedProject);
  }

  function updateToDo(todo: ToDo) {
    const todoIndex = project.todos.findIndex(
      (curr_todo) => curr_todo.id == todo.id
    );

    const updatedTodos = [
      ...project.todos.slice(0, todoIndex),
      todo,
      ...project.todos.slice(todoIndex + 1),
    ];

    const updatedProject = { ...project, todos: updatedTodos };

    updateProjects((prevProjects) =>
      prevProjects.map((p) => (p.id == project.id ? updatedProject : p))
    );

    setProject(updatedProject);
  }

  return (
    <div id="main">
      {view === "project" ? (
        <ProjectSidebar addProject={addProject}></ProjectSidebar>
      ) : (
        <ToDoSideBar setView={setView}></ToDoSideBar>
      )}
      {view === "project" ? (
        <ProjectBody
          projects={projects}
          setView={setView}
          setProject={setProject}
        ></ProjectBody>
      ) : (
        <ToDoBody
          project={project}
          addToDo={addToDo}
          updateToDo={updateToDo}
          removeToDo={removeToDo}
        ></ToDoBody>
      )}
    </div>
  );
}

export default App;
