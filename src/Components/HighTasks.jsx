import React from "react";
import s from './tasks.module.css'
import Btn from "../img/close-icon.png";

const HighTasks = ({highList}) => {

    const listItems = highList.map((task) =>
        <li>
            <input type={"radio"} />
            <p>{task.name}</p>
            <button className={s.cross}><img src={Btn}/></button>
        </li>
    );


    return (
        <div className={s.container}>
            <h2>High</h2>
            <div className={s.addHighTask}>
                <input type={"text"} />
                <button><img src={Btn}/></button>
            </div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default HighTasks;