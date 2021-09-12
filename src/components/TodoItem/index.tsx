import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import moment from "moment";
import React, { useState } from "react";
import { ITodo } from "../../store/types";
import "../FontAweSome";
import "./TodoItem.scss";
interface Props {
    todoItem: ITodo;
    handleClickDelete: (todoItem: ITodo) => void;
    onCompleteClick: (todoItem: ITodo) => void;
    handleClickAddEdit: (title: string, todoItem?: ITodo) => void;
}
export const TodoItem: React.FC<Props> = ({ todoItem, handleClickDelete, onCompleteClick, handleClickAddEdit }) => {
    const [checked, setChecked] = useState(todoItem.isCompleted);
    const checkDeadline = (todoItem: ITodo) => {
        if (todoItem.deadline) {
            const now = new Date();
            const deadline = new Date(todoItem?.deadline);
            const timeChecking = deadline.getTime() - now.getTime();
            return timeChecking < 60 * 60 * 1000;
        }
        return false;
    };

    const handleChangeStatus = () => {
        onCompleteClick(todoItem);
        setChecked(!checked);
    }
    const handleDeleteClick = () => {
        handleClickDelete(todoItem);
    }

    const title = "Edit Todo";
    return (

        <div className="todoItem">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChangeStatus}
            />
            <div
                className={classNames("title", {
                    title_cpl: checked,
                })}>
                <span className="title-name" onClick={handleChangeStatus}>
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
                onClick={() => handleClickAddEdit(title, todoItem)}
            />
            <FontAwesomeIcon
                className="icon todoItem__icon-del"
                icon={["far", "trash-alt"]}
                onClick={handleDeleteClick}
            />
        </div>
    );
};
