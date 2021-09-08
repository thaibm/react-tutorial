
import "./TabFilter.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/actions";
import { IStatus, IStore, ITodo } from "../../store/types";
export default function TabFilter() {
    const dispatch = useDispatch();

    const filter = useSelector((state: IStore) => state.filter);

    const todoList = useSelector((state: IStore) => state.todoListFilter);
    return (
        <div className="filter">
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === IStatus.all,
                })}
                onClick={() => dispatch(setFilter(IStatus.all))}
            >
                All ({todoList.length})
            </button>
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === IStatus.active,
                })}
                onClick={() => dispatch(setFilter(IStatus.active))}
            >
                Active ({todoList.filter((todo: ITodo) => todo.isCompleted === false).length})
            </button>
            <button
                className={classNames(" btn-filter", {
                    btn__active: filter === IStatus.complete,
                })}
                onClick={() => dispatch(setFilter(IStatus.complete))}
            >
                Completed ({todoList.filter((todo: ITodo) => todo.isCompleted === true).length}
                )
            </button>
        </div>
    );
};
