import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProgressTask from "../ProgressTask";
import TodoItem from '../TodoItem/index'
import s from "./index.module.css"

function TodoList(){
const todos = useSelector(store=>store.todos.todos);
const [displayedTasks, setDisplayedTasks] = useState('5');



const hanldeSeeAllTasks = ()=>{
    setDisplayedTasks(todos.length)
}


    return (
        
        <div className={s.containerTodoList}>
            <ProgressTask tasks={todos} />
         
        <button onClick={hanldeSeeAllTasks}>See all</button>
        
            {todos.slice(0,displayedTasks).map((el)=> (
                <TodoItem key={el.id}
                {...el}  />
            )
    )}
        </div>
)
}
export default TodoList;