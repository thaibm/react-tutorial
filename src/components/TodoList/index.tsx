import { ITodo } from "../../store/types";
import { TodoItem } from "../TodoItem";
import "./TodoList.scss";
interface Props {
    todos: ITodo[];
    onTodoDeleteClick: (todoItem:ITodo) => void;
    onTodoCompleteClick: (todoItem:ITodo) => void;
}
const TodoList: React.FC<Props> = (props) => {
    const { todos, onTodoDeleteClick, onTodoCompleteClick } = props;
    
    return (
        <div className="todoList">
            {todos.length === 0 ? (
                <h2>Add todo now!!!</h2>
            ) : (
                todos.map((todo: ITodo) => {
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
