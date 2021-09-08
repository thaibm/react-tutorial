import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoThunk, toggleTodoThunk } from "../../store/thunks";
import { ITodo } from "../../store/types";
import "../FontAweSome";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import "./TodoItem.scss";
interface Props {
    todoItem: ITodo;
}
export const TodoItem: React.FC<Props> = ({ todoItem }) => {
    const [checked, setChecked] = useState(todoItem.isCompleted);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const checkDeadline = (todoItem: ITodo) => {
        if (todoItem.deadline) {
            const now = new Date();
            const deadline = new Date(todoItem?.deadline);
            const a = deadline.getTime() - now.getTime();
            // console.log(deadline);
            return a < 60 * 60 * 1000;
        }
        return false;
    };

    const handleChangeComplete = () => {
        const newTodo = { ...todoItem };
        newTodo.isCompleted = !newTodo.isCompleted;
        dispatch(toggleTodoThunk(newTodo));
        setChecked(newTodo.isCompleted);
    };

    const handleClickUpdate = () => {
        setIsModalOpen(true);
    };

    const handleClickDelete = () => {
        dispatch(deleteTodoThunk(todoItem.id));
    };

    return (
        <div className="todoItem">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChangeComplete}
            />
            <div
                className={classNames("todoItem__title", {
                    todoItem__title_cpl: checked,
                })}>
                <span className="todoItem__title-name" onClick={handleChangeComplete}>
                    {todoItem.title}
                </span>
                {todoItem.deadline && (
                    <span
                        className={classNames("todoItem__title-deadline", {
                            todoItem__title_deadline_warring:
                                checkDeadline(todoItem) && !checked,
                        })}
                    >
                        {moment(todoItem.deadline).format("h:mm a, DD/MM/YYYY")}
                    </span>
                )}
            </div>

            <FontAwesomeIcon
                className="icon todoItem__icon-edit"
                icon={["far", "edit"]}
                onClick={handleClickUpdate}
            />
            <FontAwesomeIcon
                className="icon todoItem__icon-del"
                icon={["far", "trash-alt"]}
                onClick={handleClickDelete}
            />

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <TodoForm
                    todoItem={todoItem}
                    title="Edit Todo"
                    setIsModalOpen={setIsModalOpen}
                ></TodoForm>
            </Modal>
        </div>
    );
};
