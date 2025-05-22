import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid, Spinner, Center } from "@chakra-ui/react";
import { getCoffees } from "../redux/coffee/actions";
import CoffeeCard from "./CoffeeCard";

const CoffeeList = ({ sort }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(getCoffees(sort));
  }, [dispatch, sort]);

  if (isLoading)
    return <Center><Spinner size="xl" /></Center>;

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} p={4}>
      {data.map((item) => (
        <CoffeeCard key={item.id} coffee={item} />
      ))}
    </SimpleGrid>
  );
};

export default CoffeeList;
