import Note from "./Note";

export default function Notelist({ notes, removeNote, openModal }) {
  return (
    <div id="note-list">
      {notes?.map(({ title, text, date }, index) => (
        <Note
          key={date}
          title={title}
          text={text}
          date={date}
          index={index}
          removeNote={removeNote}
          openModal={openModal}
        />
      ))}
    </div>
  );
}
