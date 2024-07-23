import React, { useState } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <h1>Post It Simulator!</h1>
      <NoteForm addNote={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            description={note.description}
            important={note.important}
            onDelete={() => deleteNote(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;