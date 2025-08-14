import { useState } from "react";
import InsertionOrderObject from "./InsertionOrderObject";

export default function Note({ addNoteToList }) {
  const data = new InsertionOrderObject([["text", ""]]);
  const [note, setNote] = useState(data);

  const updateNote = (event) => {
    if (!note.has(event.target.name)) {
      console.log(`${note} missing ${event.target.name} property`);
      return;
    }
    setNote(
      new InsertionOrderObject([
        ...note.entries(),
        [event.target.name, event.target.value],
        ["date", new Date()],
      ])
    );
  };

  return (
    <>
      <h1>Note Settings</h1>
      {note.map(([key, value]) => (
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
