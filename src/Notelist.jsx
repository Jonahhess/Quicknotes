export default function Notelist({ notes, removeNote }) {
  return notes.map((note, index) => (
    <div key={index} id={`note-${index}`} className="note">
      <button
        id={`remove-${index}`}
        onClick={() => removeNote(note)}
        className="remove-btn"
      >
        x
      </button>
      <p className="text" id={`text-${index}`}>
        {note.get(text)}
      </p>
      <p className="date" id={`date-${index}`}>
        {note.get(date)}
      </p>
    </div>
  ));
}
