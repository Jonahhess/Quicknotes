import ModalNote from "./modalNote";
import Modal from "react-modal";

export default function ModalContainer({
  selectedNote,
  updateNote,
  customStyles,
  closeModal,
}) {
  return (
    selectedNote && (
      <div>
        <Modal
          isOpen={selectedNote}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <ModalNote
            title={selectedNote.title}
            text={selectedNote.text}
            date={selectedNote.date}
            updateNote={updateNote}
          />
        </Modal>
      </div>
    )
  );
}
