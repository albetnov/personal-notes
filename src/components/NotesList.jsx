import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ title, data, onDelete, onMoved }) {
  return (
    <div>
      <h2>{title}</h2>
      {!data.length ? (
        <p className="notes-list__empty-message">Tidak ada catatan...</p>
      ) : (
        <div className="notes-list">
          {data.map((note) => (
            <NoteItem
              data={note}
              archived={note.archived}
              key={note.id}
              onDelete={onDelete}
              onMoved={onMoved}
            />
          ))}
        </div>
      )}
    </div>
  );
}
