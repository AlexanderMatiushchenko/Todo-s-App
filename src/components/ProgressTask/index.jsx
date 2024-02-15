import React from "react";

function ProgressTask({tasks}){

const completedTasks = tasks.filter(task=>task.completed);
const percentCompleted = (completedTasks.length/tasks.length)*100 || 0;

    return(
        <div>
        <h2>Task Completion</h2>
        <p>{`${percentCompleted.toFixed(0)} % Completed`}</p>
       
        <progress value={percentCompleted} max="100" />
  
        
      </div>
    )
}
export default ProgressTask;