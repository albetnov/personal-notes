import { Box } from "@chakra-ui/react";
import React from "react";
import NoteCreator from "./NoteCreator";
import NotesList from "./NotesList";

export default function NoteBody({ data, onCreate, onDelete, onMoved }) {
  return (
    <Box mb={5}>
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
    </Box>
  );
}
