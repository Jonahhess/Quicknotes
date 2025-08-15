import ModalNote from "./modalNote";
import Modal from "react-modal";

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

Modal.setAppElement("#root");

export default function ModalContainer({
  selectedNote,
  updateNote,
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
            category={selectedNote.category}
            updateNote={updateNote}
          />
        </Modal>
      </div>
    )
  );
}
