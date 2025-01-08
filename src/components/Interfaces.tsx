export interface ToDo {
  id: string;
  name: string;
  status: number;
}

export interface Project {
  id: string;
  name: string;
  todos: ToDo[];
}

export interface ToDoBodyProps {
  project: Project;
  addToDo: (name: string, status: number) => void;
  removeToDo: (id: string) => void;
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
}

export interface TaskCategoryProps {
  category: { name: string; status: number };
  todos: ToDo[];
  addToDo: (name: string, status: number) => void;
  removeToDo: (id: string) => void;
}

export interface ProjectSidebarProps {
  addProject: (name: string, todo: ToDo[]) => void;
}
