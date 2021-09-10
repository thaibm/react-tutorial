import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './components/Header';
import TabFilter from './components/TabFilter';
import TodoList from './components/TodoList';
import { deleteTodoThunk, getTodosThunk, toggleTodoThunk } from './store/thunks';
import { IStore, ITodo } from './store/types';



function App() {
  const todos = useSelector((state: IStore) => state.todoList);
  const loading = useSelector((state: IStore) => state.loading);
  const success = useSelector((state: IStore) => state.success);
  const todoList = useSelector((state: IStore) => state.todoListFilter);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      toast.success(loading, { autoClose: 2000 });
    }
  }, [loading, success, todoList]);

  const handleClickDelete = (todoItem: ITodo) => {
    dispatch(deleteTodoThunk(todoItem.id));
  };
  const handleChangeComplete = (todoItem: ITodo) => {
    const newTodo = { ...todoItem };
    newTodo.isCompleted = !newTodo.isCompleted;
    dispatch(toggleTodoThunk(newTodo));
  };
  return (
    <div className="App">
      <ToastContainer />
      <div className="todo">
        <Header />
        <TabFilter />
        <TodoList
          todos={todos}
          onTodoDeleteClick={handleClickDelete}
          onTodoCompleteClick={handleChangeComplete}
        />
      </div>
    </div>
  );
}

export default App;
