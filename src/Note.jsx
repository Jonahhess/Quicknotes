import { useState } from "react";

export default function Note({ addNoteToList }) {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Note Settings</h1>
      <div id="note-text">
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          placeholder="enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
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
    </>
  );
}
