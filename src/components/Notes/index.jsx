// Notes.js
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNote } from "../store/slices/notes";
import s from "./index.module.css";
import EditNotes from "../EditNotes/EditNotes";

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
        <button className={s.addNoteBtn} onClick={handleAddNote}>
          <Icon icon="zondicons:add-solid" />
        </button>
      </div>
      <div className={s.container}>
        {notes.map((el) => (
          <EditNotes key={el.id} el={el} handleRemoveNote={handleRemoveNote} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
