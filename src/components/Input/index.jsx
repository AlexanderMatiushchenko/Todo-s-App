import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";
import s from './index.module.css'
import TextareaAutosize from 'react-textarea-autosize';

function Input() {
  const [taskName, setTaskName] = useState('');
  const [taskDeadLineDate,setTaskDeadLineDate] = useState('');
  const [taskDescription, setTaskDescription]=useState('')
  const [taskStartTime, setTaskStartTime] = useState('');
  const [taskEndTime, setTaskEndTime] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ taskName, taskDeadLineDate,taskStartTime,taskEndTime, taskDescription}));
    setTaskName('');
    setTaskDescription('');
    setTaskEndTime('');
    setTaskStartTime('');
    setTaskDeadLineDate('');
  };

  return (
    <div className={s.inputBlock}>
        <h3>Task Name</h3>
      <input className={s.weidInput}
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <h3>Date & Time</h3>
      <input className={s.weidInput} type="date" value={taskDeadLineDate} onChange={(e)=>setTaskDeadLineDate(e.target.value)}/>
     
      <div className={s.timeBlock}>
        <div className={s}>
        <h3>Start Time</h3>
      <input type="time" value={taskStartTime} onChange={(e)=>setTaskStartTime(e.target.value)}/>
      </div>
      <div>
      <h3>End Time</h3>
      <input type="time" value={taskEndTime} onChange={(e)=>setTaskEndTime(e.target.value)} />
      </div>
      </div>
      <h3>Description</h3>
      <TextareaAutosize
        className={s.taskDescriptionInput}
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        minRows={3} 
        maxRows={6}   
      />
      <button onClick={addTask}>Create Task</button>
    </div>
  );
}

export default Input;
