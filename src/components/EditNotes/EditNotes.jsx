
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { editNote } from "../store/slices/notes";

function EditNotes({ el, handleRemoveNote }) {
  const [editNoteId, setEditNoteId] = useState(null);
  const [editNoteText, setEditNoteText] = useState('');

  const dispatch = useDispatch();

  const handleEditNote = (id, noteText) => {
    setEditNoteId(id);
    setEditNoteText(noteText);
  };

  const handleUpdateNote = () => {
    dispatch(editNote({ id: editNoteId, updatedNote: editNoteText }));
    setEditNoteId(null);
    setEditNoteText('');
  };

  return (
    <div className={s.containerWithNotes}>
      <p
        contentEditable={editNoteId === el.id} 
        onBlur={handleUpdateNote} 
        onKeyDown={(e) => { 
          if (e.key === 'Enter') {
            e.preventDefault();
            handleUpdateNote();
          }
        }}
        dangerouslySetInnerHTML={{ __html: el.note }}
      />
      <div className={s.notesButtons}>
        {editNoteId !== el.id && ( 
          <button onClick={() => handleEditNote(el.id, el.note)}>
            <Icon icon="heroicons:pencil-square" />
          </button>
        )}
        <button className={s.closeButton} onClick={() => handleRemoveNote(el.id)}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default EditNotes;
