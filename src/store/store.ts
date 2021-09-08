import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  ActionTypes,
  SET_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  ADD_TODO,
  GET_TODOS,
  SET_FILTER,
} from "./actions";
import { IStatus, IStore, ITodo } from "./types";

const addTodo = (todoList: ITodo[], todo: ITodo): ITodo[] => {
  return [todo, ...todoList];
};

const deleteTodo = (todoList: ITodo[], id: number): ITodo[] => {
  return todoList.filter((todo) => todo.id !== id);
};

const updateTodo = (todoList: ITodo[], todo: ITodo): ITodo[] => {
  return todoList.map((temp) => {
    if (temp.id === todo.id) {
      return todo;
    } else {
      return temp;
    }
  });
};

const toggleTodo = (todoList: ITodo[], id: number): ITodo[] =>
  todoList.map((todo) => ({
    ...todo,
    isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
  }));

const setFilter = (todoList: ITodo[], filter: IStatus): ITodo[] => {
  const newList = [...todoList];
  if (filter === IStatus.all) {
    return newList;
  } else if (filter === IStatus.active) {
    return newList.filter((todo) => todo.isCompleted === false);
  } else {
    return newList.filter((todo) => todo.isCompleted === true);
  }
};

  const initState: IStore = {
    todoList: [],
    filter: IStatus.all,
    todoListFilter: [],
    success: "",
    loading: "loadding",
  };

const todoReducer = (state = initState, action: ActionTypes) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
        todoList: setFilter(state.todoListFilter, action.payload),
      };
    }
    case SET_TODOS: {
      return {
        ...state,
        todoList: action.payload,
        todoListFilter: action.payload,
      };
    }
    case GET_TODOS: {
      return {
        ...state,
        todoList: action.payload,
      };
    }

    case ADD_TODO: {
      return {
        ...state,

        todoList: addTodo(state.todoList, action.payload),
        todoListFilter: addTodo(state.todoList, action.payload),
        success: "success",
        loading: "Add success",
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todoList: updateTodo(state.todoList, action.payload),
        todoListFilter: updateTodo(state.todoList, action.payload),
        success: "success",
        loading: "Update success",
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todoList: deleteTodo(state.todoList, action.payload),
        todoListFilter: deleteTodo(state.todoList, action.payload),
        success: "success",
        loading: "Delete success",
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todoList: toggleTodo(state.todoList, action.payload),
        todoListFilter: toggleTodo(state.todoList, action.payload),
        success: "success",
        loading: "Update success",
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(todoReducer, applyMiddleware(thunk));
export default store;
