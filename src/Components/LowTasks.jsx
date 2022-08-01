import React, {useState} from "react";
import s from './tasks.module.css';
import {addTaskAC} from "../redux/reducers/tasks";
import {useDispatch} from "react-redux";
import Task from "./Task";
import Input from "./Input";
import Button from "./Button";

const LowTasks = ({lowList}) => {

    const dispatch = useDispatch();
    const [task, setTask] = useState();
    const [important, setImportant] = useState('low');

    const listItems = lowList.map((task) =>
        <Task task={task} />
    );

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            {task && dispatch(addTaskAC(task, important))} setTask('');
        }
    }

    return (
        <div className={s.container}>
            <h2>Low</h2>
            <div className={s.addLowTask}>
                <Input task={task} handleKeyPress={handleKeyPress} setTask={setTask} />
                <Button task={task} important={important} setTask={setTask} />
            </div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default LowTasks;