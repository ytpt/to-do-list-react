import {addTaskAC} from "../redux/reducers/tasks";
import Btn from "../img/close-icon.png";
import React from "react";
import {useDispatch} from "react-redux";

const Button = ({task, important, setTask}) => {

    const dispatch = useDispatch();

    return (
        <button
            type={'button'}
            disabled={!task}
            onClick={() => {dispatch(addTaskAC(task, important)); setTask('')}}
            >
                <img src={Btn} />
        </button>
    )
}

export default Button;