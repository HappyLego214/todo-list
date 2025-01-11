export interface ToDo {
  id: string;
  name: string;
  status: number;
  category: string;
  due: Date;
}

export interface Project {
  id: string;
  name: string;
  todos: ToDo[];
}

export interface ToDoBodyProps {
  project: Project;
  addToDo: (name: string, category: string) => void;
  removeToDo: (id: string) => void;
  updateToDo: (todo: ToDo) => void;
}

export interface CardProp {
  project: Project;
  setProject: (project: Project) => void;
}

export interface TaskCategoryProps {
  category: string;
  todos: ToDo[];
  addToDo: (name: string, category: string) => void;
  removeToDo: (id: string) => void;
  updateToDo: (todo: ToDo) => void;
}

export interface ProjectSidebarProps {
  projects: Project[];
  addProject: (name: string, todo: ToDo[]) => void;
  setProject: (project: Project) => void;
}

export interface TaskCardProps {
  index: number;
  todo: ToDo;
  removeToDo: (id: string) => void;
  updateToDo: (todo: ToDo) => void;
}
