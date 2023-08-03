import { Link, Outlet } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Home from "../pages/Home";

import Tareas from "../pages/Tareas";
import SobreNosotros from "../pages/SobreNosotros";

export default function Menu() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Home</Tab>
        <Tab>Tarea</Tab>
        <Tab>Sobre Nosotros</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Home />
        </TabPanel>

        <TabPanel>
          <Tareas />
        </TabPanel>

        <TabPanel>
          <SobreNosotros />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
