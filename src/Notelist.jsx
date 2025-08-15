import Note from "./Note";

export default function Notelist({ notes, removeNote, openModal }) {
  return (
    <div id="note-list">
      {notes?.map(({ title, text, date, updatedDate, category }, index) => (
        <Note
          key={date}
          title={title}
          text={text}
          date={date}
          updatedDate={updatedDate}
          category={category}
          index={index}
          removeNote={removeNote}
          openModal={openModal}
        />
      ))}
    </div>
  );
}
