import React, {useEffect, useState} from "react";
import s from "./tasks.module.css";
import {deleteTask, doneTaskAC} from "../redux/reducers/tasks";
import Btn from "../img/close-icon.png";
import {useDispatch} from "react-redux";

const Task = ({task}) => {

    const dispatch = useDispatch();
    const [radio, setRadio] = useState(task.isDone);

    const toggleRadio = () => {
        if (radio === true) {
            setRadio(false)
            dispatch(doneTaskAC(task.id, task.isDone))
        } else {
            setRadio(true)
            dispatch(doneTaskAC(task.id, task.isDone))
        }
    }

    return (
        <li key={task.id}>
            <input
                type={'radio'}
                value={radio}
                checked={radio}
                onClick={toggleRadio}
                onChange={toggleRadio} />
            <p>{task.name}</p>
            <button
                className={s.cross}
                type={'button'}
                onClick={() => dispatch(deleteTask(task.id))}>
                <img src={Btn}/>
            </button>
        </li>
    )
}

export default Task;