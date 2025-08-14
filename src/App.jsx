import { useState } from "react";
import "./App.css";
import Note from "./Note";
import Notelist from "./Notelist";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    if (note.has("date")) setNotes([note, ...notes]);
  }

  function removeNote(note) {
    return setNotes(notes.filter((n) => n !== note));
  }
  return (
    <>
      <Note addNoteToList={addNote}></Note>
      <Notelist notes={notes} removeNote={removeNote}></Notelist>
    </>
  );
}

export default App;
