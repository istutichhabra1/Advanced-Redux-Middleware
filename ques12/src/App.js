import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      as="nav"
      bg={useColorModeValue("teal.500", "teal.700")}
      color="white"
      padding={4}
      justify="space-between"
      align="center"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      <Heading size="md" mb={{ base: 2, md: 0 }}>
        MyApp
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="center"
        width={{ base: "full", md: "auto" }}
      >
        <Button variant="ghost" color="white">
          Home
        </Button>
        <Button variant="ghost" color="white">
          About
        </Button>
        <Button variant="ghost" color="white">
          Contact
        </Button>
      </Stack>
    </Flex>
  );
}

function Card({ title, description, imageUrl }) {
  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg={useColorModeValue("white", "gray.700")}
      _hover={{ boxShadow: "xl" }}
      transition="box-shadow 0.3s ease"
    >
      <Image src={imageUrl} alt={title} objectFit="cover" h="200px" w="100%" />
      <Box p={6}>
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
          {description}
        </Text>
        <Button mt={4} colorScheme="teal" size="sm">
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      <Navbar />
      <Flex
        direction={{ base: "column", md: "row" }}
        p={6}
        gap={6}
        justify="center"
        wrap="wrap"
      >
        <Card
          title="Beautiful Landscape"
          description="Explore the stunning views and peaceful nature."
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        />
        <Card
          title="City Lights"
          description="Experience the vibrant nightlife of the city."
          imageUrl="https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80"
        />
        <Card
          title="Mountain Adventure"
          description="Join exciting mountain hikes and trails."
          imageUrl="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80"
        />
      </Flex>
    </Box>
  );
}
