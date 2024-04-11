import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todos',
    initialState: {
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')):[],
    },
    reducers:{
        addTodo(store,action){
            store.todos.push({
                id:new Date().toString(),
                createdDate: new Date().toString(),
                deadLineDate: action.payload.taskDeadLineDate,
                taskStartTime: action.payload.taskStartTime,
                taskEndTime: action.payload.taskEndTime,
                taskDescription:action.payload.taskDescription,
                taskName: action.payload.taskName,
                completed: false,
            })
        localStorage.setItem('todos', JSON.stringify(store.todos))
        },
        removeTodo(store,action){
            store.todos = store.todos.filter(el=>el.id !==action.payload.id)
            localStorage.setItem('todos', JSON.stringify(store.todos))
        },
        toggleTodoComplete(store,action){
            const toggledTodo=store.todos.find(el=>el.id === action.payload.id)
        toggledTodo.completed = !toggledTodo.completed
        localStorage.setItem('todos',JSON.stringify(store.todos))
        }
    }

})
export const {addTodo,removeTodo,toggleTodoComplete}=todoSlice.actions

export default todoSlice.reducer;