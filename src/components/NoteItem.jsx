import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteItem({ data, archived, onDelete, onMoved }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <p className="note-item__title">{data.title}</p>
        <p className="note-item__date">{showFormattedDate(data.createdAt)}</p>
        <p className="note-item__body">{data.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(data.id)}
        >
          Hapus
        </button>
        {!archived ? (
          <button
            className="note-item__archive-button"
            onClick={() => onMoved(data.id)}
          >
            Arsipkan
          </button>
        ) : (
          <button
            className="note-item__archive-button"
            onClick={() => onMoved(data.id)}
          >
            Pindahkan
          </button>
        )}
      </div>
    </div>
  );
}
