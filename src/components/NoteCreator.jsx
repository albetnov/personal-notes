import React, { useState } from "react";

export default function NoteCreator({ onCreate }) {
  const [titleLength, setTitleLength] = useState(50);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChanged = (event) => {
    setTitleLength((prevState) => 50 - event.target.value.length);
    setTitle(event.target.value.slice(0, 49));
  };

  const onBodyChanged = (event) => setBody(event.target.value);

  const onSubmitForm = (event) => {
    event.preventDefault();
    onCreate({ title, body });
    setTitle("");
    setBody("");
    setTitleLength(50);
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <p className="note-input__title__char-limit">
        Sisa Karakter: {titleLength}
      </p>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Ini adalah judul..."
          className="note-input__title"
          onChange={onTitleChanged}
          value={title}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Tuliskan Catatan mu disini"
          className="note-input__body"
          onChange={onBodyChanged}
          value={body}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
