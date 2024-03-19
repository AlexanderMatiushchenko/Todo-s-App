import React from "react";
import s from "./index.module.css"

function ProgressTask({tasks}){

const completedTasks = tasks.filter(task=>task.completed);
const percentCompleted = (completedTasks.length/tasks.length)*100 || 0;

    return(
        <div className={s.containerProgressTask}>
        <h2>Task Completion</h2>
        <p>{`${percentCompleted.toFixed(0)} % Completed`}</p>
       
        <progress value={percentCompleted} max="100" />
  
        
      </div>
    )
}
export default ProgressTask;