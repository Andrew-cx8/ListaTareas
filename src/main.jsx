import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tareas from "./pages/Tareas";
import SobreNosotros from "./pages/SobreNosotros";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/tasks" element={<Tareas />} />
          <Route path="/aboutUS" element={<SobreNosotros />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
