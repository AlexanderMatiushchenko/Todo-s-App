import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProgressTask from "../ProgressTask";
import TodoItem from '../TodoItem/index'

function TodoList(){
const todos = useSelector(store=>store.todos.todos);
const [displayedTasks, setDisplayedTasks] = useState('5');



const hanldeSeeAllTasks = ()=>{
    setDisplayedTasks(todos.length)
}


    return (
        
        <div>
            <ProgressTask tasks={todos} />
            <h2>To do’s</h2>
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