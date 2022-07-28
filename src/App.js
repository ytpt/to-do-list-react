import React from "react";
import LowTasks from "./Components/LowTasks";
import HighTasks from "./Components/HighTasks";
import {taskList} from "./State";

const App = () => {
   let highList = [];
   let lowList = [];
   taskList.map(task => {
       if (task.priority === 'high') {
           highList.push(task);
       } else if (task.priority === 'low') {
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
