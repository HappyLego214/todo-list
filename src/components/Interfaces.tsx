export interface ToDo {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  name: string;
  todos: ToDo[];
}

export interface ToDoBodyProps {
  project: Project;
}

export interface CardProp {
  project: Project;
  setView: (view: string) => void;
  setProject: (project: Project) => void;
}

export interface ProjectBodyProps {
  projects: Project[];
  setView: (view: string) => void;
  setProject: (project: Project) => void;
}

export interface ToDoSidebarProps {
  setView: (view: string) => void;
  addToDo: (name: string) => void;
}

export interface ProjectSidebarProps {
  addProject: (name: string, todo: ToDo[]) => void;
}
