import { Container, Text, VStack, Heading, Box, Input, Button, Textarea, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title && content) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Note Taking App</Heading>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <VStack spacing={4}>
            <Input 
              placeholder="Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
            <Textarea 
              placeholder="Content" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
            />
            <Button colorScheme="teal" onClick={addNote}>Add Note</Button>
          </VStack>
        </Box>
        <Stack spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="lg">
              <Heading as="h3" size="md">{note.title}</Heading>
              <Text mt={2}>{note.content}</Text>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;