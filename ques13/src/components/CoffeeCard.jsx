import { Box, Image, Text, Badge, Button } from "@chakra-ui/react";

const CoffeeCard = ({ coffee }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="lg">
    <Image src={coffee.image} alt={coffee.title} boxSize="150px" mx="auto" />
    <Text mt={2} fontWeight="bold">{coffee.title}</Text>
    <Text>Price: ₹{coffee.price}</Text>
    <Badge colorScheme="green">{coffee.type}</Badge>
  </Box>
);

export default CoffeeCard;
