import { useState } from "react";
import Note from "./Note";
import Notelist from "./Notelist";
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  let subtitle;

  function openModal(note) {
    setSelectedNote({ ...note });
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
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
      <Note addNoteToList={addNote}></Note>
      <Notelist
        notes={notes}
        removeNote={removeNote}
        openModal={openModal}
      ></Notelist>
      {modalIsOpen && (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <Notelist notes={[selectedNote]} />
          </Modal>
        </div>
      )}
    </>
  );
}

export default App;
