import React from "react";
import LowTasks from "./Components/LowTasks";
import HighTasks from "./Components/HighTasks";
import {useSelector} from "react-redux";

const App = () => {

    let highList = [];
    let lowList = [];

    const tasks = useSelector((store) => store.tasks.tasks)
    tasks.map(task => {
        if (task.important === 'high') {
            highList.push(task);
        } else if (task.important === 'low') {
            lowList.push(task);
        }
    })

    return (
        <div className="App">
            <HighTasks highList={highList} />
            <LowTasks lowList={lowList} />
        </div>
    );
}


export default App;
