import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function NoteHeader({ onSearch }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      p={3}
      backgroundColor="blue.300"
    >
      <Text fontSize="3xl" color="white">
        Notes
      </Text>
      <Input
        placeholder="Cari catatan..."
        w="120"
        onChange={onSearch}
        backgroundColor="blue.400"
        borderColor="blue.400"
        focusBorderColor="blue.600"
        color="white"
        _placeholder={{ color: "gray.100" }}
        _hover={{ borderColor: "blue.200" }}
        boxShadow="inner"
      />
    </Flex>
  );
}
