import { useState } from "react";

export default function Note({ addNoteToList }) {
  const [text, setText] = useState("");

  return (
    <div id="new-note" className="floating">
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
          addNoteToList(text);
          setText("");
        }}
      >
        Add Note
      </button>
    </div>
  );
}
