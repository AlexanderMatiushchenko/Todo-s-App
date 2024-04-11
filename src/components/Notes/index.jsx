import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNote } from "../store/slices/notes";
import s from "./index.module.css";
import EditNotes from "../EditNotes/EditNotes";

function Notes() {
  const [noteDescription, setNoteDescription] = useState('');
  const [showInput, setShowInput] = useState(false);
  const notes = useSelector((store) => store.notes.note);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (!showInput) {
      setShowInput(true); 
    } else {
      dispatch(addNote({ noteDescription }));
      setNoteDescription('');
      setShowInput(false); 
    }
  };

  const handleRemoveNote = (id) => {
    dispatch(removeNote({ id }));
  };

  return (
    <div className={s.containerNotesMain}>
      <div className={s.containerWithInputAndButton}>
        <h2>Notes</h2>
        {showInput ? (
          <input className={s.notesInput}
            type="text"
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
            autoFocus
            onBlur ={handleAddNote} 
          />
        ) : (
          <button className={s.addNoteBtn} onClick={handleAddNote}>
            <Icon icon="zondicons:add-solid" />
          </button>
        )}
      </div>
      <div className={s.container}>
        {notes.map((el) => (
          <EditNotes 
            key={el.id} 
            el={el} 
            handleRemoveNote={handleRemoveNote}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
