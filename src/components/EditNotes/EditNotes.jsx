import React, { useState } from "react";
import { Icon } from "@iconify/react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { editNote } from "../store/slices/notes";

function EditNotes({ el, handleRemoveNote }) {
  const [editNoteId, setEditNoteId] = useState(null);
  const [editNoteText, setEditNoteText] = useState(el.noteText); 

  const dispatch = useDispatch();

  const handleEditNote = (id, noteText) => {
    setEditNoteId(id);
    setEditNoteText(noteText);
  };

  const handleUpdateNote = () => {
    dispatch(editNote({ id: editNoteId, updatedNote: editNoteText }));
    setEditNoteId(null);
  };

  return (
    <div className={s.containerWithNotes}>
      {editNoteId !== el.id ? (
        <p>{el.noteText}</p> 
      ) : (
        <input
        className={s.notesInput}
          type="text"
          value={editNoteText}
          onChange={(e) => setEditNoteText(e.target.value)}
          onBlur={handleUpdateNote}
          autoFocus
        />
      )}
      <div className={s.notesButtons}>
        {editNoteId !== el.id && ( 
          <button onClick={() => handleEditNote(el.id, el.noteText)}>
            <Icon icon="heroicons:pencil-square" />
          </button>
        )}
        <button className={s.closeButton} onClick={() => handleRemoveNote(el.id)}>
          <Icon icon="ic:outline-delete" />
        </button>
      </div>
    </div>
  );
}

export default EditNotes;
