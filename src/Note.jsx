import { useState } from "react";

export default function Note({ addNoteToList }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div id="new-note" className="floating">
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      ></input>
      <div id="note-text">
        <textarea
          id="text"
          placeholder="enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="10"
        ></textarea>
      </div>
      <button
        id="submit"
        onClick={() => {
          addNoteToList({ title, text });
          setText("");
          setTitle("");
        }}
      >
        Add Note
      </button>
    </div>
  );
}
