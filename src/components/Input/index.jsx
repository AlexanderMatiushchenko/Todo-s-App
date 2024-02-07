import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";
import s from './index.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Input() {
  const [text, setText] = useState('');
  const [taskDeadLineDate,setTaskDeadLineDate] = useState('');
  const [taskDescription, setTaskDescription]=useState('')
  const [taskStartTime, setTaskStartTime] = useState('');
  const [taskEndTime, setTaskEndTime] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text, taskDeadLineDate,taskStartTime,taskEndTime, taskDescription}));
    setText('');
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
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>Date & Time</h3>
      <input className={s.weidInput} type="text" value={taskDeadLineDate} onChange={(e)=>setTaskDeadLineDate(e.target.value)}/>
      {/* <DatePicker
        selected={taskDeadLineDate}
        onChange={(date) => setTaskDeadLineDate(date)}
        showTimeSelect
        dateFormat="Pp"
      /> */}
      <span className={s.timeBlock}><h3>Start Time</h3>
    
      <input type="time" value={taskStartTime} onChange={(e)=>setTaskStartTime(e.target.value)}/>
      <h3>End Time</h3>
      <input type="time" value={taskEndTime} onChange={(e)=>setTaskEndTime(e.target.value)} />
      </span>
      <h3>Description</h3>
      <input className={s.taskDescriptionInput} type="text" value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} />
      <button onClick={addTask}>Create Task</button>
    </div>
  );
}

export default Input;
