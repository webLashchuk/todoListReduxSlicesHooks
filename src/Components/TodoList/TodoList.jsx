import { useDispatch, useSelector } from "react-redux";
import { addTask, updateNewTask, toggleTask, removeTask } from "../../Redux/TaskSlice";
import s from './TodoList.module.scss';
import TextField from "../TextField/TextField";
import AddButton from "../AddButton/AddButton";
import TaskHandler from "../TaskHandler/TaskHandler";
import RemoveButton from "../RemoveButton/RemoveButton";

const TodoList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const newTaskText = useSelector(state => state.tasks.newTaskText) || "";

    const addTaskHandler = () => {
        if (!newTaskText.trim()) return;
        dispatch(addTask(newTaskText));
        dispatch(updateNewTask(""));
    };

    const toggleTaskHandler = (id) => {
        dispatch(toggleTask(id));
    };

    const removeTaskHandler = (id) => {
        dispatch(removeTask(id));
    };

    const onInputHandler = (e) => {
        dispatch(updateNewTask(e.target.value));
    };

    return (
        <section className={s.todolist}>
            <div className="container">
                <div className={s.layout}>
                    <div className={s.inner}>
                        <h1 className={s.title}>Todo List</h1>

                        <div className={s.panel}>
                            <TextField onInputHandler={onInputHandler} value={newTaskText} />
                            <AddButton addTaskHandler={addTaskHandler} />
                        </div>

                        <ul className={s.list}>
                            {tasks.map(task => (
                                <li key={task.id} className={task.isDone ? `${s.item} ${s.success}` : s.item}>
                                    <TaskHandler task={task} toggleTaskHandler={() => toggleTaskHandler(task.id)} />

                                    <h2 className={s.task}>{task.title}</h2>
                                    <RemoveButton task={task} removeTaskHandler={() => removeTaskHandler(task.id)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TodoList;
