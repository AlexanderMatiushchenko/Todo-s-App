import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";
import s from './index.module.css'

function Input() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
    console.log(text);
  };

  return (
    <div className={s.inputBlock}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your’s Tasks"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default Input;
