import { useState } from "react";

export default function Notelist({ notes, removeNote }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div id="note-list">
      {notes?.map(({ text, date }, index) => (
        <div
          key={date}
          id={`note-${index}`}
          className="note floating"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p id={`date-${index}`} className="date">
            {new Date(date).toLocaleString("default", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
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
