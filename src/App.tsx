import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './components/Header';
import TabFilter from './components/TabFilter';
import TodoList from './components/TodoList';
import { getTodosThunk } from './store/thunks';
import { IStore } from './store/types';

function App() {
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
  return (
    <div className="App">
      <ToastContainer />
      <div className="todo">
        <Header />
        <TabFilter />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
