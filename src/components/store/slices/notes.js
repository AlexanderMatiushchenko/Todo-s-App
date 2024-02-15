import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'note',
    initialState:{
        note: localStorage.getItem('note') ? 
        JSON.parse(localStorage.getItem('note')) : [],
    },
    reducers:{
        addNote(store,action){
            store.note.push({
                id:new Date().toString(),
                note: action.payload.noteDescription,
            })
            localStorage.setItem('note',JSON.stringify(store.note))
        },
        removeNote(store, action) {
            store.note = store.note.filter((el) => el.id !== action.payload.id);
            localStorage.setItem('note', JSON.stringify(store.note));
          }
          
          
    }
})

export const {addNote, removeNote} = notesSlice.actions

export default notesSlice.reducer;