import React from "react";
import NoteCreator from "./NoteCreator";
import NoteItem from "./NoteItem";
import NotesList from "./NotesList";

export default function NoteBody({ data, onCreate, onDelete, onMoved }) {
  return (
    <section className="note-app__body">
      <NoteCreator onCreate={onCreate} />
      <NotesList
        title={"Catatan Aktif"}
        data={data.filter((item) => item.archived !== true)}
        onDelete={onDelete}
        onMoved={onMoved}
      />
      <NotesList
        title={"Arsip"}
        data={data.filter((item) => item.archived === true)}
        onDelete={onDelete}
        onMoved={onMoved}
      />
    </section>
  );
}
