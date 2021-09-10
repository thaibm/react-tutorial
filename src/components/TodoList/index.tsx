import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEffect, useState } from "react";
import { ITodo } from "../../store/types";
import { TodoItem } from "../TodoItem";
import "../FontAweSome";
import "./TodoList.scss";
interface Props {
    todos: ITodo[];
    onTodoDeleteClick: (todoItem: ITodo) => void;
    onTodoCompleteClick: (todoItem: ITodo) => void;
}
const TodoList: React.FC<Props> = (props) => {
    const { todos, onTodoDeleteClick, onTodoCompleteClick } = props;
    const [todoList, setTodoList] = useState(todos);

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
    }
    return (
        <div className="todoList">
            <div className="sort">
                <button className="btn-sort" onClick={handleSort}> date <FontAwesomeIcon className="noti__icon" icon={["fas", "chevron-down"]} /></button>
                {/* <button className="btn-sort" onClick={() => setTodoList(todos)}><FontAwesomeIcon className="noti__icon" icon={["fas", "chevron-up"]} /></button> */}
            </div>

            {todoList.length === 0 ? (
                <h2>Add todo now!!!</h2>
            ) : (
                todoList.map((todo: ITodo) => {
                    return <TodoItem
                        key={todo.id}
                        todoItem={todo}
                        onDeleteClick={onTodoDeleteClick}
                        onCompleteClick={onTodoCompleteClick}
                    />;
                })
            )}

        </div>
    );
};

export default TodoList;
