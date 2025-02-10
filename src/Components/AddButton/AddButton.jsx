import s from './AddButton.module.scss';

const AddButton = ({ addTaskHandler }) => {
    return (
        <button className={s.button} onClick={addTaskHandler}>Add task</button>
    )
}

export default AddButton;