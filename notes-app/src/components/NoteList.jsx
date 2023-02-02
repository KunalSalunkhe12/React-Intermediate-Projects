import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

function NoteList({ notes, handleNewNote, handleDeleteNote}) {


  return (
    <div className="note-container">
      <AddNote handleNewNote={handleNewNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote = {handleDeleteNote}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
