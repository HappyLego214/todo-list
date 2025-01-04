export interface ToDo {
  id: number;
  name: string;
}

export interface Project {
  id: number;
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

export interface viewProp {
  setView: (view: string) => void;
}
