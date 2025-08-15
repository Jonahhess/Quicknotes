import Note from "./Note";

export default function Notelist({ notes, removeNote, openModal }) {
  return (
    <div id="note-list">
      {notes?.map(({ title, text, date, updatedDate }, index) => (
        <Note
          key={date}
          title={title}
          text={text}
          date={date}
          updatedDate={updatedDate}
          index={index}
          removeNote={removeNote}
          openModal={openModal}
        />
      ))}
    </div>
  );
}
