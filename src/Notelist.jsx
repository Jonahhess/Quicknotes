import { useState } from "react";

export default function Notelist({ notes, removeNote }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div id="note-list">
      {notes?.map(({ title, text, date }, index) => (
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
          <h1 className="title" id={`text-${index}`}>
            {title}
          </h1>
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
