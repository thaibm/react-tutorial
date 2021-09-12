import moment from "moment";
import React, { useEffect, useState } from "react";
import { ITodo } from "../../store/types";
import "./TodoForm.scss";
interface Props {
    title: string;
    setIsModalOpen: (isOpen: boolean) => void;
    todoItem?: ITodo;
    handleConfirmAddEdit: Function
    setCurrentItem: Function
}

const TodoForm: React.FC<Props> = ({ setIsModalOpen, title, todoItem, handleConfirmAddEdit, setCurrentItem }) => {
    const [value, setValue] = useState("");
    const [deadline, setDeadline] = useState<string | undefined>("");
    
    useEffect(() => {
        if (todoItem !== undefined) {
            setValue(todoItem.title);
            setDeadline(moment(todoItem.deadline).format("YYYY-MM-DDTHH:mm").toString());
        }

    }, [todoItem]);

    const handleChangeDeadline = (value: string) => {
        if (value) { setDeadline(value); }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleConfirmAddEdit(value, deadline);
        setDeadline("");
        setValue("");
        setIsModalOpen(false);
    };

    const handleCancle = () => {
        setCurrentItem(undefined);
        setValue("");
        setDeadline("");
        setIsModalOpen(false);
    };

    return (
        <div className="todo-form">
            <div className="todo-form__header">
                <h2>{title}</h2>
            </div>
            <form className="todo-form__body" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Todo Name ..."
                    className="todo-name"
                    value={value}
                    required
                    onChange={(e) => setValue(e.target.value)}
                />
                <p>Deadline</p>
                <input
                    type="datetime-local"
                    className="todo-deadline"
                    value={deadline}
                    onChange={(e) => handleChangeDeadline(e.target.value)}
                />
                <div className="form__control">
                    <input
                        type="button"
                        className="btn btn-cancel"
                        value="Cancel"
                        onClick={handleCancle}
                    />
                    <input type="submit" className="btn btn-primary" value="Save" />
                </div>
            </form>
        </div>
    );
};

export default TodoForm;
