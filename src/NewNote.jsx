import { useState } from "react";

export default function NewNote({ addNoteToList }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

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
        <div id="category-container">
          <label htmlFor="categories">Category</label>
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="reminder">Reminder</option>
            <option value="todo">Todo</option>
          </select>
        </div>
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
