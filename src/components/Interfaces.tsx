export interface ToDo {
  id: string;
  name: string;
  status: boolean;
  category: string;
  due: Date;
}

export interface Project {
  id: string;
  name: string;
  todos: ToDo[];
}

export interface ProjectBodyProps {
  project: Project;
  addToDo: (name: string, category: string) => void;
  removeToDo: (id: string) => void;
  updateToDo: (todo: ToDo) => void;
  removeProject: (id: string) => void;
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

export interface AddModalProps {
  setAddModal: (show: boolean) => void;
  addProject: (name: string, todo: ToDo[]) => void;
}

export interface EditModalProps {
  todo: ToDo;
  handleRemoveToDo: (e: React.MouseEvent) => void;
  handleStatusChange: (e: React.MouseEvent) => void;
  setEditModal: (show: boolean) => void;
}
