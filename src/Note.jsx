import { useState } from "react";

export default function Note({
  title,
  text,
  date,
  updatedDate,
  category,
  index = 0,
  removeNote,
  openModal,
}) {
  const [hovered, setHovered] = useState(false);

  const colorMap = {
    "": "white",
    personal: "yellow",
    work: "brown",
    reminder: "red",
    todo: "green",
  };

  return (
    <div
      id={`note-${index}`}
      className="note floating"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => openModal && openModal({ title, text, date, index })}
      style={{ backgroundColor: colorMap[category] }}
    >
      <div>
        <p id={`date-${index}`} className="date">
          {new Date(date).toLocaleString("default", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        {
          <p id={`update-date-${index}`} className="date">
            {updatedDate &&
              new Date(updatedDate).toLocaleString("default", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
          </p>
        }
        <h1 className="title" id={`title-${index}`}>
          {title}
        </h1>
        <p className="text" id={`text-${index}`}>
          {text}
        </p>
      </div>
      {openModal && (
        <button
          id={`remove-${index}`}
          onClick={(e) => {
            e.stopPropagation();
            removeNote(date);
          }}
          className="remove-btn"
          style={{
            visibility: hovered ? "visible" : "hidden",
          }}
        >
          X
        </button>
      )}
    </div>
  );
}
