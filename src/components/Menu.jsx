import { Link, Outlet } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import Home from "../pages/Home";

import Tareas from "../pages/Tareas";
import SobreNosotros from "../pages/SobreNosotros";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Menu() {
  const { ColorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        icon={ColorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />

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
    </>
  );
}
