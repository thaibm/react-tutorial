export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
  deadline?: Date;
}

export interface IStore {
  todoList: ITodo[];
  filter: IStatus;
  todoListFilter: ITodo[];
  success: string;
  loading: string;
}

export enum IStatus {
  all,
  active,
  complete,
}
