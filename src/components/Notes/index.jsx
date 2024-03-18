import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote, removeNote } from "../store/slices/notes";
import s from "./index.module.css"


function Notes() {
  const [noteDescription, setNoteDescription] = useState('');
  const notes = useSelector((store) => store.notes.note);

  const [editNoteId, setEditNoteId] = useState(null);
  const [editNoteText, setEditNoteText] = useState('');


  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ noteDescription }));
    setNoteDescription('');
  };

  const handleRemoveNote = (id) => {
    dispatch(removeNote({ id }));
  };

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
    <div>
      <div className={s.containerWithInputAndButton}>
        <h2>Notes</h2>
        <button onClick={handleAddNote}>
        <Icon icon="zondicons:add-solid" style={{ color: '#46DDDD' }} />
        </button>
        {/* <input
          type="text"
          value={noteDescription}
          onChange={(e) => setNoteDescription(e.target.value)}
        /> */}
        
      </div>
      <div className={s.container}>
        {notes.map((el) => (
          <div className={s.containerWithTasks} key={el.id}>
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
        ))}
      </div>
    </div>
  );
}

export default Notes;

