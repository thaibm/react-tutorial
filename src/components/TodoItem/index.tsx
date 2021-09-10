import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import moment from "moment";
import React, { useState } from "react";
import { ITodo } from "../../store/types";
import "../FontAweSome";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import "./TodoItem.scss";
interface Props {
    todoItem: ITodo;
    onDeleteClick: (todoItem: ITodo) => void;
    onCompleteClick: (todoItem: ITodo) => void;
}
export const TodoItem: React.FC<Props> = ({ todoItem, onDeleteClick, onCompleteClick }) => {
    const [checked, setChecked] = useState(todoItem.isCompleted);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const checkDeadline = (todoItem: ITodo) => {
        if (todoItem.deadline) {
            const now = new Date();
            const deadline = new Date(todoItem?.deadline);
            const a = deadline.getTime() - now.getTime();
            return a < 60 * 60 * 1000;
        }
        return false;
    };
    const handleClickUpdate = () => {
        setIsModalOpen(true);
    };
    const handleChangeComplete = () => {
        onCompleteClick(todoItem);
        setChecked(!checked);
    }
    const handleDeleteClick = () => {
        onDeleteClick(todoItem);
    }
    return (

        <div className="todoItem">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChangeComplete}
            />
            <div
                className={classNames("title", {
                    title_cpl: checked,
                })}>
                <span className="title-name" onClick={handleChangeComplete}>
                    {todoItem.title}
                    {todoItem.deadline && (<span
                        className={classNames("title-deadline", {
                            warning:
                                checkDeadline(todoItem) && !checked,
                        })}>
                        <span>!expired</span>
                    </span>)}
                </span>
                {todoItem.deadline &&
                    <span className="deadline">
                        {moment(todoItem.deadline).format("h:mm a, DD/MM/YYYY")}
                    </span>}
            </div>

            <FontAwesomeIcon
                className="icon todoItem__icon-edit"
                icon={["far", "edit"]}
                onClick={handleClickUpdate}
            />
            <FontAwesomeIcon
                className="icon todoItem__icon-del"
                icon={["far", "trash-alt"]}
                onClick={handleDeleteClick}
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
