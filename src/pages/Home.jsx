import React from "react";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Box maxW="900px" w="500px" bg="green" p={5} borderRadius="lg">
        <h1 id="bienvenido">BIENVENIDO A </h1>
        <h1 id="todoApp">TODO APP</h1>
      </Box>
    </>
  );
}

export default Home;
