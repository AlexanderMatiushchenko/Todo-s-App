import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNote } from "../store/slices/notes";
import s from "./index.module.css"

function Notes() {
  const [noteDescription, setNoteDescription] = useState('');
  const notes = useSelector((store) => store.notes.note);

  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ noteDescription }));
    setNoteDescription('');
  };

  const handleRemoveNote = (id) => {
    dispatch(removeNote({ id }));
  };

  return (
    <div>
      <div className={s.containerWithInputAndButton}>
      <h2>Notes</h2>
      <Icon icon="zondicons:add-solid"  style={{color: '#46DDDD'}} />
      <input
        type="text"
        value={noteDescription}
        onChange={(e) => setNoteDescription(e.target.value)}
      />
      <button onClick={handleAddNote}>Add</button>
      </div>
      <div className={s.container}>
        {notes.map((el) => (
        
          <div className={s.containerWithTasks} key={el.id}>
           <p>
            {el.note}
          </p>
          <div className={s.notesButtons}>
          <button>
        <Icon icon="heroicons:pencil-square" />
      </button>
      
            <button className={s.closeButton} onClick={() => handleRemoveNote(el.id)}>&times;</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
