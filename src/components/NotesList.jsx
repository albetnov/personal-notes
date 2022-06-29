import { Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ title, data, onDelete, onMoved }) {
  return (
    <Box maxWidth={1000} mx="auto" mt={10}>
      <Text fontSize="xl">{title}</Text>
      {!data.length ? (
        <Text fontSize="sm">Tidak ada catatan...</Text>
      ) : (
        <Grid
          mt={5}
          templateColumns="repeat(4, 1fr)"
          templateRows="minmax(min-content, max-content)"
          gap={16}
        >
          {data.map((note) => (
            <NoteItem
              data={note}
              archived={note.archived}
              key={note.id}
              onDelete={onDelete}
              onMoved={onMoved}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
}
