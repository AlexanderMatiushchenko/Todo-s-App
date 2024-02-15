import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeTodo, toggleTodoComplete } from "../store/slices/todoSlice";
import s from './index.module.css';
import ProgressTask from "../ProgressTask";


function  TodayTodoItem() {
  const todaysTasks = useSelector((store) => store.todos.todos);

  const today = new Date().toISOString().split('T')[0];
  const todayFilteredTasks = todaysTasks.filter((task) => task.deadLineDate === today);

  const [displayedTasks, setDisplayedTasks] = useState('3');

  const handleSeeAllTasks = () => {
    setDisplayedTasks(todayFilteredTasks.length);
  };

  const dispatch = useDispatch();
  const removeTask = (taskId) => dispatch(removeTodo({ id: taskId }));
  const toggleTask = (taskId, complete) => dispatch(toggleTodoComplete({ id: taskId, complete }));

  return (
    <>
      <div>
      <ProgressTask tasks={todayFilteredTasks} />
        <span>
          <h2>Today’s Task</h2>
          <button onClick={handleSeeAllTasks}>See all</button>
        </span>
        <div>
          {todayFilteredTasks.slice(0, displayedTasks).map((task) => (
            <div key={task.id} className="todaytask">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id, task.completed)}
              />
              <span><h3>{task.taskName}</h3></span>
              <span className={s.delete} onClick={() => removeTask(task.id)}>
                &times;
              </span>
              
              <span>
                <p>{task.taskStartTime}</p>
                <p>{task.taskEndTime}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodayTodoItem;
