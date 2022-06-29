import { UpDownIcon } from "@chakra-ui/icons";
import { DeleteIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteItem({ data, archived, onDelete, onMoved }) {
  return (
    <Box boxShadow="lg" rounded="lg" p={5}>
      <Box>
        <Text fontSize="md" fontWeight="semibold">
          {data.title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {showFormattedDate(data.createdAt)}
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {data.body}
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          onClick={() => onDelete(data.id)}
          variant="ghost"
        >
          Hapus
        </Button>
        {!archived ? (
          <Button
            leftIcon={<UpDownIcon />}
            onClick={() => onMoved(data.id)}
            colorScheme="yellow"
            variant="ghost"
          >
            Arsipkan
          </Button>
        ) : (
          <Button
            leftIcon={<UpDownIcon />}
            onClick={() => onMoved(data.id)}
            colorScheme="yellow"
            variant="ghost"
          >
            Pindahkan
          </Button>
        )}
      </Flex>
    </Box>
  );
}
