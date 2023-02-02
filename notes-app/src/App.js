import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';
import Search from './components/Search';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app-data')) || [])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text, date) => {
    let newNote = {
      id: nanoid(),
      text: text,
      date: date
    }
    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    let newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }


  return (
    <div className={`App ${darkMode && 'dark-mode'}`}>
      <Header handleMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NoteList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} handleNewNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
