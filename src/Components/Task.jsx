import s from "./tasks.module.css";
import {deleteTask} from "../redux/reducers/tasks";
import Btn from "../img/close-icon.png";
import React from "react";
import {useDispatch} from "react-redux";

const Task = ({task}) => {

    const dispatch = useDispatch();

    return (
        <li key={task.id}>
            {task.isDone
                ? <input
                    type={"radio"}
                    value={task.id}
                    checked />
                : <input
                    type={"radio"}
                    value={task.id} /> }
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