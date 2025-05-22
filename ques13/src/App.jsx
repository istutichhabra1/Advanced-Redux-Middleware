import { useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CoffeeList from "./components/CoffeeList";
import Sidebar from "./components/Sidebar";

function App() {
  const [sort, setSort] = useState("");

  return (
    <Box>
      <Heading textAlign="center" p={4}>Coffee List</Heading>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box width={{ base: "100%", md: "20%" }}>
          <Sidebar onSortChange={setSort} />
        </Box>
        <Box width={{ base: "100%", md: "80%" }}>
          <CoffeeList sort={sort} />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
