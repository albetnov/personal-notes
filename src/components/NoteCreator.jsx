import { AddIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { FormHelperText } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
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
    <Box rounded="lg" boxShadow="lg" p={5} mt={5} maxWidth={700} mx="auto">
      <Text fontSize="xl">Buat Catatan</Text>
      <form onSubmit={onSubmitForm}>
        <Flex alignItems="center" flexDirection="column">
          <FormControl mt={2}>
            <Input
              type="text"
              placeholder="Ini adalah judul..."
              onChange={onTitleChanged}
              value={title}
            />
            <FormHelperText>Sisa Karakter {titleLength}</FormHelperText>
          </FormControl>
          <FormControl mt={2}>
            <Textarea
              cols="30"
              rows="10"
              placeholder="Tuliskan catatanmu disini"
              onChange={onBodyChanged}
              value={body}
            />
          </FormControl>
          <Button
            leftIcon={<AddIcon />}
            type="submit"
            colorScheme="blue"
            variant="ghost"
            mt={3}
          >
            Buat
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
