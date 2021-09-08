import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IStatus, IStore, ITodo } from "./types";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";
export const SET_TODOS = "SET_TODOS";
export const GET_TODOS = "GET_TODOS";
export const SET_FILTER = "SET_FILTER";
export type ActionTypes =
  | { type: typeof SET_TODOS; payload: ITodo[] }
  | { type: typeof GET_TODOS; payload: ITodo[] }
  | { type: typeof ADD_TODO; payload: ITodo }
  | { type: typeof SET_FILTER; payload: IStatus }
  | { type: typeof DELETE_TODO; payload: number }
  | {
      type: typeof UPDATE_TODO;
      payload: ITodo;
    }
  | { type: typeof TOGGLE_TODO; payload: number };

export const addTodo = (todo: ITodo): ActionTypes => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (todo: ITodo): ActionTypes => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const toggleTodo = (id: number): ActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const setFilter = (filter: IStatus): ActionTypes => ({
  type: SET_FILTER,
  payload: filter,
});

export const setTodos = (todos: ITodo[]): ActionTypes => ({
  type: SET_TODOS,
  payload: todos,
});

export const getTodos =
  (data: ITodo[]): ThunkAction<void, IStore, unknown, Action<string>> =>
  (dispatch) => {
    const todos: ITodo[] = data;
    let newTodos: ITodo[] = [];
    for (let todo of todos) {
      newTodos.unshift(todo);
    }
    dispatch(setTodos(newTodos));
    dispatch(setFilter(IStatus.all));
  };
