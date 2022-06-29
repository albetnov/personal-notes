import React from "react";
import NoteApp from "./components/NoteApp";
import { ChakraProvider } from "@chakra-ui/react";

// import style

export default function App() {
  return (
    <ChakraProvider>
      <NoteApp />
    </ChakraProvider>
  );
}
