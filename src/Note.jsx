import { useState } from "react";

export default function Note({ addNoteToList }) {
  const data = new Map([["text", ""]]);
  const [note, setNote] = useState(data);

  const updateNote = (event) => {
    if (!note.has(event.target.name)) {
      console.log(`${note} missing ${event.target.name} property`);
      return;
    }
    const newNote = new Map(note);
    newNote.set(event.target.name, event.target.value);
    note.set("date", new Date());
    setNote(newNote);
  };

  return (
    <>
      <h1>Note Settings</h1>
      {Array.from(note.entries()).map(([key, value]) => (
        <div key={key} id={key} className="note-prop">
          <label htmlFor={key}>{key}</label>
          <input
            type="text"
            id={key}
            name={key}
            value={value}
            onChange={updateNote}
          />
        </div>
      ))}
      <button id="submit" onClick={() => addNoteToList(note)}>
        Add Note
      </button>
    </>
  );
}
