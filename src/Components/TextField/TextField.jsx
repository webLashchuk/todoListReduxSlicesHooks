import s from './TextField.module.scss';

const TextField = ({ onInputHandler, value }) => {

    return (
        <div className={s.container}>
            <input className={s.input} type="text" id="task-field" autoComplete="off" value={value} 
            onChange={onInputHandler}  />
            <label className={s.label} htmlFor="task-field">Add your task</label>
        </div>
    )
}

export default TextField;