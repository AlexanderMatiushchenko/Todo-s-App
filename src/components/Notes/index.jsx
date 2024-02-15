import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNote } from "../store/slices/notes";

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
      <h2>Notes</h2>

      <button>
        <Icon icon="heroicons:pencil-square" />
      </button>
      <input
        type="text"
        value={noteDescription}
        onChange={(e) => setNoteDescription(e.target.value)}
      />
      <button onClick={handleAddNote}>Add</button>

      <div>
        {notes.map((el) => (
          <div key={el.id}>
            {el.noteDescription}
            <button onClick={() => handleRemoveNote(el.id)}>&times;</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
