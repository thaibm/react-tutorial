import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Header from './components/Header';
import Modal from './components/Modal';
import TabFilter from './components/TabFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { addTodoThunk, deleteTodoThunk, getTodosThunk, toggleTodoThunk, updateTodoThunk } from './store/thunks';
import { IStore, ITodo } from './store/types';

function App() {
  const todos = useSelector((state: IStore) => state.todoList);
  const loading = useSelector((state: IStore) => state.loading);
  const success = useSelector((state: IStore) => state.success);
  const todoList = useSelector((state: IStore) => state.todoListFilter);

  const [currentItem, setCurrentItem] = useState<ITodo>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [titleForm, setTitleForm] = useState("");

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
    setCurrentItem(todoItem);
    setIsConfirm(true);
  };

  const handleClickAddEdit = (title: string, todoItem?: ITodo) => {
    if (todoItem !== undefined) {
      setCurrentItem(todoItem);
    }
    setTitleForm(title);
    setIsModalOpen(true);
  }

  const handleConfirmAddEdit = (value: string, deadline: Date) => {
    if (currentItem !== undefined) {
      dispatch(
        updateTodoThunk({
          title: value,
          deadline: deadline ? moment(deadline).toDate() : undefined,
          id: currentItem.id,
          isCompleted: false,
        })
      );
    } else {
      dispatch(
        addTodoThunk({
          title: value,
          deadline: deadline ? moment(deadline).toDate() : undefined,
          id: todos.length === 0 ? 1 : todos[0].id + 1,
          isCompleted: false,
        })
      );
    }
  }
  const handleChangeComplete = (todoItem: ITodo) => {
    const newTodo = { ...todoItem };
    newTodo.isCompleted = !newTodo.isCompleted;
    dispatch(toggleTodoThunk(newTodo));
  };
  const handleConfirm = () => {
    if (currentItem) {
      dispatch(deleteTodoThunk(currentItem.id));
    } else {
      setCurrentItem(undefined);
    }
    setIsConfirm(false)
  }


  return (
    <div className="App">
      <ToastContainer />
      <div className="todo">

        <Header handleClickAddEdit={handleClickAddEdit} />

        <TabFilter />

        <TodoList
          setCurrentItem={setCurrentItem}
          todos={todos}
          handleClickDelete={handleClickDelete}
          onTodoCompleteClick={handleChangeComplete}
          handleClickAddEdit={handleClickAddEdit}
        />

        <Modal isModalOpen={isConfirm} setIsModalOpen={setIsConfirm}>
          <div className="modal-confirm">
            <p>Are u sure ?</p>
            <button className="btn btn-confirm" onClick={handleConfirm}>Delete</button>
          </div>

        </Modal>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <TodoForm
            todoItem={currentItem}
            title={titleForm}
            setCurrentItem={setCurrentItem}
            setIsModalOpen={setIsModalOpen}
            handleConfirmAddEdit={handleConfirmAddEdit}
          ></TodoForm>
        </Modal>

      </div>
    </div>
  );
}

export default App;
