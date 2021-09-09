import * as actionsAPI from "../service/api/api";
import * as actions from "./actions";
import { ITodo } from "./types";

export const getTodosThunk = () => async (dispatch: Function) => {
  try {
    const response = await actionsAPI.getTodosAPI();
    console.log(response.data);
    dispatch(actions.getTodos(response.data));
  } catch (error) {
    console.error(error);
  }
};
export const addTodoThunk = (todo: ITodo) => async (dispatch: Function) => {
  try {
    await actionsAPI.addTodoAPI(todo);
    dispatch(actions.addTodo(todo));
  } catch (error) {
    console.error(error);
  }
};
export const updateTodoThunk = (todo: ITodo) => async (dispatch: Function) => {
  try {
    await actionsAPI.updateTodoAPI(todo);
    dispatch(actions.updateTodo(todo));
  } catch (error) {
    console.error(error);
  }
};
export const deleteTodoThunk = (id: number) => async (dispatch: Function) => {
  try {
    await actionsAPI.deleteTodoAPI(id);
    dispatch(actions.deleteTodo(id));
  } catch (error) {
    console.error(error);
  }
};
export const toggleTodoThunk = (todo: ITodo) => async (dispatch: Function) => {
  try {
    await actionsAPI.updateTodoAPI(todo);
    dispatch(actions.toggleTodo(todo.id));
  } catch (error) {
    console.error(error);
  }
};
