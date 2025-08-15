import { useState } from "react";
import categories from "./categories";

export default function ModalNote({ title, text, date, updateNote, category }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);
  const [newCategory, setNewCategory] = useState(category);
  return (
    <div id="modal-note" className="floating">
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
      <div id="category-container">
        <label htmlFor="categories">Category</label>
        <select
          name="categories"
          id="categories"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
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
          newText &&
            updateNote({
              title: newTitle,
              text: newText,
              category: newCategory,
              date,
            });
        }}
        style={{ backgroundColor: newText ? "white" : "lightgrey" }}
      >
        Update Note
      </button>
    </div>
  );
}
