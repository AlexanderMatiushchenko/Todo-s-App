import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import TodayTodoItem from "../TodayTodoItem";
import TodoItem from "../TodoItem";


function Main(){
    // const todayTask=useSelector(store=>store.todos.todos)

    return(
        <>
        
        <TodayTodoItem />
        {/* <div><h3>Today’s progress summery</h3>
        <p>2 Tasks</p>
        </div>
        <TodayTodoItem key={task.id}
        {...task}/> */}
        </>

    )
}
export default Main;


    