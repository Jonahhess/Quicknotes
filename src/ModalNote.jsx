import { useState } from "react";

export default function ModalNote({ title, text, date, updateNote }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);
  return (
    <div id="new-note" className="floating">
      <input
        id="title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Title"
      ></input>
      <div id="note-text">
        <textarea
          id="text"
          placeholder="enter text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows="10"
        ></textarea>
      </div>
      <button
        id="submit"
        onClick={() => {
          updateNote({ newTitle, newText, date });
        }}
      >
        Update Note
      </button>
    </div>
  );
}
