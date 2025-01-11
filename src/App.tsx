import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ToDoBody from "./components/Task/TaskBody";
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
      },
      {
        id: "2",
        name: "Assignments",
        status: true,
        category: "Doing",
        due: tomorrow,
      },
      {
        id: "3",
        name: "Group Work",
        status: false,
        category: "Done",
        due: thirdday,
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
      },
      {
        id: "2",
        name: "Helping Mom",
        status: false,
        category: "Doing",
        due: tomorrow,
      },
      {
        id: "3",
        name: "Cooking Dinner",
        status: false,
        category: "Done",
        due: thirdday,
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
      },
      {
        id: "2",
        name: "Gaming Session",
        status: false,
        category: "Doing",
        due: tomorrow,
      },
      {
        id: "3",
        name: "Workout",
        status: false,
        category: "Done",
        due: thirdday,
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
      <ProjectSidebar
        addProject={addProject}
        projects={projects}
        setProject={setProject}
      ></ProjectSidebar>
      <ToDoBody
        project={project}
        addToDo={addToDo}
        updateToDo={updateToDo}
        removeToDo={removeToDo}
      ></ToDoBody>
    </div>
  );
}

export default App;
