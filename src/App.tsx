import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ProjectBody from "./components/project/ProjectBody";
import ProjectSidebar from "./components/Sidebar";
import { Project, ToDo } from "./components/Interfaces";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const thirdday = new Date(tomorrow);
thirdday.setDate(thirdday.getDate() + 1);

const initialProjects: Project[] = [
  {
    id: "1",
    name: "School",
    todos: [
      {
        id: "1",
        name: "Finish School Project",
        status: false,
        category: "ToDo",
        due: today,
        notes: "Example Note",
      },
      {
        id: "2",
        name: "Assignments",
        status: true,
        category: "Doing",
        due: tomorrow,
        notes: "",
      },
      {
        id: "3",
        name: "Group Work",
        status: false,
        category: "Done",
        due: thirdday,
        notes: "",
      },
    ],
  },
  {
    id: "2",
    name: "House",
    todos: [
      {
        id: "1",
        name: "Cleaning Kitchen",
        status: false,
        category: "ToDo",
        due: today,
        notes: "",
      },
      {
        id: "2",
        name: "Helping Mom",
        status: false,
        category: "Doing",
        due: tomorrow,
        notes: "",
      },
      {
        id: "3",
        name: "Cooking Dinner",
        status: false,
        category: "Done",
        due: thirdday,
        notes: "",
      },
    ],
  },
  {
    id: "3",
    name: "Personal",
    todos: [
      {
        id: "1",
        name: "Personal Project",
        status: false,
        category: "ToDo",
        due: today,
        notes: "",
      },
      {
        id: "2",
        name: "Gaming Session",
        status: false,
        category: "Doing",
        due: tomorrow,
        notes: "",
      },
      {
        id: "3",
        name: "Workout",
        status: false,
        category: "Done",
        due: thirdday,
        notes: "",
      },
    ],
  },
];

console.log(today);

function App() {
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
      status: true,
      category: category,
      due: today,
      notes: "",
    };

    const updatedTodos = [...project.todos, newToDo];
    const updatedProject = { ...project, todos: updatedTodos };

    updateProjects((prevProjects) =>
      prevProjects.map((p) => (p.id === project.id ? updatedProject : p))
    );

    setProject(updatedProject);
  }

  function removeProject(id: string) {
    const updatedProjects = projects.filter((project) => project.id !== id);

    updateProjects(updatedProjects);

    /* Needs Rework - will return an issue if there are no existing projects */
    if (project.id === id) {
      setProject(projects[0]);
    }
  }

  function removeToDo(id: string) {
    const updatedTodos = project.todos.filter((todo) => todo.id !== id);
    const updatedProjects = { ...project, todos: updatedTodos };

    updateProjects((prevProjects) =>
      prevProjects.map((p) => (p.id == project.id ? updatedProjects : p))
    );

    setProject(updatedProjects);
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
      <ProjectSidebar
        addProject={addProject}
        projects={projects}
        setProject={setProject}
      ></ProjectSidebar>
      <ProjectBody
        project={project}
        addToDo={addToDo}
        updateToDo={updateToDo}
        removeToDo={removeToDo}
        removeProject={removeProject}
      ></ProjectBody>
    </div>
  );
}

export default App;
