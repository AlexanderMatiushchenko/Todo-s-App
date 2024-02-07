import React from "react";
import { useSelector } from "react-redux";
import TodoItem from '../TodoItem/index'

function TodoList(){
const todos = useSelector(store=>store.todos.todos);

    return (
        
        <ul>
            {todos.map((el)=> (
                <TodoItem key={el.id}
                {...el} />
            )
    )}
        </ul>
)
}
export default TodoList;