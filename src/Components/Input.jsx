import React from "react";
import {doneTaskAC} from "../redux/reducers/tasks";
import {useDispatch} from "react-redux";

const Input = ({task, handleKeyPress, setTask}) => {

    const dispatch = useDispatch();

    return (
        <input
            type={"text"}
            value={task}
            onKeyPress={handleKeyPress}
            onChange={(e) => setTask(e.target.value)}
            onClick={() => {dispatch(doneTaskAC(task))}}
        />
    )
}

export default Input;