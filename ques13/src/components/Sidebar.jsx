import { VStack, Button } from "@chakra-ui/react";

const Sidebar = ({ onSortChange }) => {
  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Button onClick={() => onSortChange("")}>Default</Button>
      <Button onClick={() => onSortChange("title")}>Sort by Title</Button>
      <Button onClick={() => onSortChange("price")}>Sort by Price</Button>
    </VStack>
  );
};

export default Sidebar;
