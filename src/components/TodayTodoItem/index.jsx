import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeTodo, toggleTodoComplete } from "../store/slices/todoSlice";
import s from './index.module.css';
import { Icon } from "@iconify/react";
import ProgressTask from "../ProgressTask";
import { Link } from "react-router-dom";
import { url } from "../../utils/var";
import Input from "../Input";


function  TodayTodoItem() {
  const todaysTasks = useSelector((store) => store.todos.todos);

  const today = new Date().toISOString().split('T')[0];
  const todayFilteredTasks = todaysTasks.filter((task) => task.deadLineDate === today);

  const [displayedTasks, setDisplayedTasks] = useState('3');
  const [showedDescription, setshowedDescription] = useState(null);

  const handleSeeAllTasks = () => {
    setDisplayedTasks(todayFilteredTasks.length);
  };

  const dispatch = useDispatch();
  const removeTask = (taskId) => dispatch(removeTodo({ id: taskId }));
  const toggleTask = (taskId, complete) => dispatch(toggleTodoComplete({ id: taskId, complete }));

  const toggleDescription = (taskId) => {
    setshowedDescription(taskId === showedDescription ? null : taskId);
  };

  return (
      <div className={s.mainConateinerTodayTodoItem}>
      <ProgressTask tasks={todayFilteredTasks} />
        <div className={s.containerWithBtnSeeAllTodaTasks}>
          <h2>Today’s Task</h2>
          <h3>{today.split('-').reverse().join('.')}</h3>
          <button className={s.btnSeeAllTodayTask} onClick={handleSeeAllTasks}>See all</button>
        </div>
        {todayFilteredTasks.length === 0 ? (
          <><p>You have no tasks for today.</p>
          <Link to={`${url}/Input`}>
          <button className={s.btnSeeAllTodayTask} >Add task</button>
          </Link>
          </>
        ):
        (<div className={s.containerAllTodos}>
          {todayFilteredTasks.slice(0, displayedTasks).map((task) => (
            <div key={task.id} className={s.todaysTask}>
              <div className={s.tasksContainer}>
              <div className={s.leftContainerTodos}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id, task.completed)}
              />
              <p className={s.todayTaskName } >{task.taskName}</p>
              </div>
              <div className={s.rightContainerTodos}>
              <Icon onClick={() => removeTask(task.id)} className={s.deleteIcon} icon="ic:outline-delete" />
              <span className={s.iconDescription} onClick={()=>toggleDescription(task.id) }>
              {showedDescription === task.id ? (
                  <Icon icon="system-uicons:chevron-up" />
                ) : (
                  <Icon icon="system-uicons:chevron-down" />
                )}
              </span>
              <span>
                <p className={s.todayTasksTime}>{task.taskStartTime}</p>
                <p className={s.todayTasksTime}>{task.taskEndTime}</p>
              </span>
              </div>
              </div>
              <div >
             {showedDescription === task.id && 
             <p className={s.todayDescription} >
              {task.taskDescription}
              </p>}
             </div>
              </div>
          ))}
        </div>
        )}
      </div>
  );
}

export default TodayTodoItem;
