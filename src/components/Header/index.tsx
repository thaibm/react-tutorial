
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ITodo } from "../../store/types";
import "./Header.scss";
interface Props {
    handleClickAddEdit: (title: string, todoItem?: ITodo) => void;
}
const Header: React.FC<Props> = ({ handleClickAddEdit }) => {
    const title = "Add Todo"
    return (
        <div className="header">
            <h2 className="header__title">Todo App</h2>
            <button className="btn btn-primary btn__add" onClick={() => handleClickAddEdit(title)}>
                <FontAwesomeIcon className="noti__icon" icon={["fas", "plus"]} />
                <span className="text-add">{` New Todo`} </span>
            </button>
        </div>
    );
};

export default Header;
