import { useState, useEffect, useRef } from "react";
import NewNote from "./NewNote";
import Notelist from "./Notelist";
import ModalContainer from "./ModalContainer";
import "./App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    console.log(notes);
    if (notes) {
      setNotes(notes);
    }
  }, []);

  // run only after notes have been loaded from first useEffect
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      isMounted.current = true;
    }
  }, [notes]);

  function openModal(note) {
    setSelectedNote({ ...note });
  }

  function closeModal() {
    setSelectedNote(null);
  }

  function addNote(note) {
    if (note.text) {
      setNotes([{ ...note, date: Date.now() }, ...notes]);
    }
  }

  function removeNote(date) {
    if (confirm("are you sure you want to delete this?")) {
      setNotes(notes.filter((n) => n.date !== date));
    }
  }

  function updateNote(note) {
    const index = notes.findIndex((n) => n.date === note.date);
    setNotes([
      ...notes.slice(0, index),
      { ...note, updatedDate: Date.now() },
      ...notes.slice(index + 1),
    ]);
  }

  return (
    <>
      <NewNote addNoteToList={addNote}></NewNote>
      <Notelist
        notes={notes}
        removeNote={removeNote}
        openModal={openModal}
      ></Notelist>
      <ModalContainer
        selectedNote={selectedNote}
        updateNote={updateNote}
        customStyles={customStyles}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
