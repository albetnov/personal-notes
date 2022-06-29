import React from "react";

export default function NoteHeader({ onSearch }) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <input type="search" placeholder="Cari catatan..." onChange={onSearch} />
    </header>
  );
}
