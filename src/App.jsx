import { useState } from "react";
import Note from "./Note";
import Notelist from "./Notelist";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote({ title, text }) {
    if (text) {
      setNotes([{ title, text, date: Date.now() }, ...notes]);
    }
  }

  function removeNote(date) {
    if (confirm("are you sure you want to delete this?")) {
      setNotes(notes.filter((n) => n.date !== date));
    }
  }

  return (
    <>
      <Note addNoteToList={addNote}></Note>
      <Notelist notes={notes} removeNote={removeNote}></Notelist>
    </>
  );
}

export default App;
