import React, {useState} from "react";
import s from './tasks.module.css'
import Btn from "../img/close-icon.png";
import {addTaskAC, deleteTask} from "../redux/reducers/tasks";
import {useDispatch} from "react-redux";

const HighTasks = ({highList}) => {

    const dispatch = useDispatch();
    const [task, setTask] = useState();
    const [important, setImportant] = useState('high');

    const listItems = highList.map((task) =>
        <li key={task.id}>
            {task.isDone
                ? <input
                    type={"radio"}
                    value={task.id}
                    checked/>
                : <input
                    type={"radio"}
                    value={task}/> }
            <p>{task.name}</p>
            <button
                className={s.cross}
                type={'button'}
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
            <h2>High</h2>
            <div className={s.addHighTask}>
                <input
                    type={"text"}
                    value={task}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setTask(e.target.value)} />
                <button
                    type={'button'}
                    disabled={!task}
                    onClick={ () => {dispatch(addTaskAC(task, important));
                    setTask('')}}>
                        <img src={Btn} />
                </button>
            </div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default HighTasks;