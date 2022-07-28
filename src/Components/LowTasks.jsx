import React from "react";
import s from './tasks.module.css';
import Btn from "../img/close-icon.png";

const LowTasks = ({lowList}) => {

    const listItems = lowList.map((task) =>
        <li>
            <input type={"radio"} />
            <p>{task.name}</p>
            <button className={s.cross}><img src={Btn}/></button>
        </li>
    );

    return (
        <div className={s.container}>
            <h2>Low</h2>
            <div className={s.addLowTask}>
                <input type={"text"} />
                <button><img src={Btn}/></button>
            </div>
            <div className={s.lowTasksBlock}>
              <ul>{listItems}</ul>
            </div>
        </div>
    )
}

export default LowTasks;