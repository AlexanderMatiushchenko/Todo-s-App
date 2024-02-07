import React from "react";
import { useSelector } from "react-redux";

function TodayTodoItem(){

    const todaysTasks= useSelector(store=>store.todos.todos)

    return(
        <>
        <span>
            <h2>Today’s Task</h2>
            <button>See all</button>
        </span>
        <div>
            <div>
                {todaysTasks.map((el)=>el.text)},
            </div>
        </div>
        </>
    )

}export default TodayTodoItem;