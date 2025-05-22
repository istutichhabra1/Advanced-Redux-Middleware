import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

function Card() {
  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
      bg={useColorModeValue("white", "gray.800")}
      _hover={{ boxShadow: "2xl", transform: "scale(1.05)" }}
      transition="all 0.3s ease"
      mx="auto"
      my={6}
    >
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Beautiful landscape"
        objectFit="cover"
        w="100%"
        h={{ base: "200px", md: "300px" }}
      />

      <Box p={6}>
        <Stack spacing={3}>
          <Heading fontSize="xl" fontWeight="bold" color="teal.500">
            Scenic Mountain View
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
            Experience the breathtaking beauty of the mountains with this
            scenic view, perfect for nature lovers and adventure seekers.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
      p={{ base: 4, md: 10 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card />
    </Box>
  );
}
