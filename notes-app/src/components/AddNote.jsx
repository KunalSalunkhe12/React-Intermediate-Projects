import React, { useState } from "react";
import { MdNoteAdd } from "react-icons/md";

function AddNote({ handleNewNote }) {
  const [noteInput, setNoteInput] = useState("");
  const remainChar = 100;

  const handleChange = (e) => {
    let inputVal = e.target.value
    if(inputVal.length <=  remainChar){
      setNoteInput(inputVal);
    }
  };

  const handleClick = () => {
    let newDate = new Date().toLocaleDateString();
    if (noteInput.trim().length > 0) {
      handleNewNote(noteInput, newDate);
      setNoteInput("");
    }
  };

  return (
    <div key='addNote'>
      <div className="note add-note">
        <textarea
          rows="5"
          placeholder="Add Note here...."
          type="text"
          className="add-note-input"
          value={noteInput}
          onChange={handleChange}
        />
        <div className="note-footer">
          <p>{remainChar - noteInput.length} Remaining</p>
          <MdNoteAdd className="icon" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default AddNote;
