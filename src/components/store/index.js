import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import notesSlice from './slices/notes'

export default configureStore ({
    reducer:{
        todos: todoSlice,
        notes: notesSlice
    }
})