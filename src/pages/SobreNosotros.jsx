import React from "react";
import { Heading, Highlight, Box, Center } from "@chakra-ui/react";

export default function sobreNosotros() {
  return (
    <>
      <Box boxShadow="2xl" p="6" rounded="md" bg="white">
        <Heading display="Flex" alignItems="Center">
          Sobre Nosotros
        </Heading>{" "}
        <Highlight
          query="mejor organización"
          styles={{ px: "1", py: "1", bg: "orange.100" }}
        >
          TodoApp es una aplicación web para gestionar tus tareas del día a día,
          dandote una mejor organización y visualización sobre tus quehaceres
          diarios, además de que incluye una bonita muy intuituva y bonita
          interfaz.
        </Highlight>
      </Box>
    </>
  );
}
