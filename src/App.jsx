import { useState } from "react";
import NewNote from "./NewNote";
import Notelist from "./Notelist";
import Note from "./Note";
import Modal from "react-modal";
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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  function openModal(note) {
    setSelectedNote({ ...note });
  }

  function closeModal() {
    setSelectedNote(null);
  }

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
      <NewNote addNoteToList={addNote}></NewNote>
      <Notelist
        notes={notes}
        removeNote={removeNote}
        openModal={openModal}
      ></Notelist>
      {selectedNote && (
        <div>
          <Modal
            isOpen={selectedNote}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <Note
              title={selectedNote.title}
              text={selectedNote.text}
              date={selectedNote.date}
            />
          </Modal>
        </div>
      )}
    </>
  );
}

export default App;
