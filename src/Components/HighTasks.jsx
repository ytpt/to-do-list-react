import React, {useState} from "react";
import s from './tasks.module.css'
import {addTaskAC} from "../redux/reducers/tasks";
import {useDispatch} from "react-redux";
import Task from "./Task";
import Input from "./Input";
import Button from "./Button";

const HighTasks = ({highList}) => {

    const dispatch = useDispatch();
    const [task, setTask] = useState();
    const [important, setImportant] = useState('high');

    const listItems = highList.map((task) =>
        <Task key={task.id} task={task} />
    );

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            {task && dispatch(addTaskAC(task, important))} setTask('');
        }
    }

    return (
        <div className={s.container}>
            <h2>High</h2>
            <div className={s.addHighTask}>
                <Input task={task} handleKeyPress={handleKeyPress} setTask={setTask} />
                <Button task={task} important={important} setTask={setTask} />
            </div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default HighTasks;