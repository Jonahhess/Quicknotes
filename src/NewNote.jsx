import { useState } from "react";
import categories from "./categories";

export default function NewNote({ addNoteToList }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("uncategorized");

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
      <div id="category-container">
        <label htmlFor="categories">Category</label>
        <select
          name="categories"
          id="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <button
        id="submit"
        onClick={() => {
          addNoteToList({ title, text, category });
          setText("");
          setTitle("");
        }}
      >
        Add Note
      </button>
    </div>
  );
}
