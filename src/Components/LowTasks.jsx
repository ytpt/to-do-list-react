import React, {useState} from "react";
import s from './tasks.module.css';
import Btn from "../img/close-icon.png";
import {addTaskAC, deleteTask} from "../redux/reducers/tasks";
import {useDispatch} from "react-redux";

const LowTasks = ({lowList}) => {

    const dispatch = useDispatch();
    const [task, setTask] = useState();
    const [important, setImportant] = useState('low');

    const listItems = lowList.map((task) =>
        <li key={task.id}>
            {task.isDone
                ? <input type={"radio"} value={task.id} checked />
                : <input type={"radio"} value={task.id} /> }
            <p>{task.name}</p>
            <button className={s.cross} type={'button'}
                    onClick={() => dispatch(deleteTask(task.id))}>
                    <img src={Btn}/>
            </button>
        </li>
    );

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            {task && dispatch(addTaskAC(task, important))}
            setTask('');
        }
    }

    return (
        <div className={s.container}>
            <h2>Low</h2>
            <div className={s.addLowTask}>
                <input
                    type={"text"}
                    value={task}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setTask(e.target.value)} />
                <button type={'button'} disabled={!task}
                    onClick={ () => {dispatch(addTaskAC(task, important));
                    setTask('')}}>
                        <img src={Btn}/>
                </button>
            </div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default LowTasks;