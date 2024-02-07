import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:'todos',
    initialState: {
        todos: []
    },
    reducers:{
        addTodo(store,action){
            store.todos.push({
                id:new Date().toString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(store,action){
            store.todos = store.todos.filter(el=>el.id !==action.payload.id)
        },
        toggleTodoComplete(store,action){
            const toggledTodo=store.todos.find(el=>el.id === action.payload.id)
        toggledTodo.completed = !toggledTodo.completed
        }
    }

})
export const {addTodo,removeTodo,toggleTodoComplete}=todoSlice.actions

export default todoSlice.reducer;