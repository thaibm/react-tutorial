import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEffect, useState } from "react";
import { ITodo } from "../../store/types";
import { TodoItem } from "../TodoItem";
import "../FontAweSome";
import "./TodoList.scss";
interface Props {
    todos: ITodo[];
    handleClickDelete: (todoItem: ITodo) => void;
    onTodoCompleteClick: (todoItem: ITodo) => void;
    setCurrentItem: (todo: ITodo) => void;
    handleClickAddEdit: (title: string, todoItem?: ITodo) => void;
}
const TodoList: React.FC<Props> = (props) => {
    const { todos, handleClickDelete, onTodoCompleteClick, handleClickAddEdit } = props;
    const [todoList, setTodoList] = useState(todos);
    const [isSort, setIsSort] = useState(false);

    useEffect(() => {
        if (!isSort) {
            setTodoList(todos);
        }
    }, [isSort, todos]);

    useEffect(() => {
        setTodoList(todos);
    }, [todos]);

    const handleSort = () => {
        const temp = [...todoList];
        const todoSorted = temp.sort((x: ITodo, y: ITodo) => {
            const a = x.deadline;
            const b = y.deadline;
            return 0 - (moment(a).toDate() > moment(b).toDate() ? -1 : 1)
        });
        console.log(todoSorted);
        setTodoList(todoSorted);
        setIsSort(!isSort);
    }
    return (
        <>
            <div className="sort">
                <button className="btn-sort" onClick={handleSort}>{isSort ?
                    <span>Refresh</span>
                    :
                    <span>date <FontAwesomeIcon className="noti__icon" icon={["fas", "chevron-down"]} /></span>
                } </button>

            </div>
            <div className="todoList">
                {todoList.length === 0 ? (
                    <h2>Add todo now!!!</h2>
                ) : (
                    todoList.map((todo: ITodo) => {
                        return <TodoItem
                            handleClickAddEdit={handleClickAddEdit}
                            key={todo.id}
                            todoItem={todo}
                            handleClickDelete={handleClickDelete}
                            onCompleteClick={onTodoCompleteClick}
                        />;
                    })
                )}

            </div>
        </>
    );
};

export default TodoList;
