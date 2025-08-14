import { useState } from "react";

export default function Notelist({ notes, removeNote }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div id="note-list">
      {notes?.map(({ text, date }, index) => (
        <div
          key={date}
          id={`note-${index}`}
          className="note"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className="text" id={`text-${index}`}>
            {text}
          </p>
          <button
            id={`remove-${index}`}
            onClick={() => removeNote(date)}
            className="remove-btn"
            style={{
              visibility: hoveredIndex === index ? "visible" : "hidden",
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
