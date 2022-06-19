import { ActionIcon, AppShell, CloseButton, Header, MantineProvider } from "@mantine/core";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import React from "react";
import { Dashboard, FileText, Home, Menu2 } from "tabler-icons-react";
import "./App.css";
import { AppNavbar } from "./components/AppNavbar";
import { Logo } from "./components/Logo";
import TemplatePicker, { TemplateTypes } from "./template-collection";
import { Outlet, Route, Routes } from 'react-router-dom';
import { NewResume } from "./components/Resume/NewResume";
import ResumeHomePage from "./pages/resume";

const actions: SpotlightAction[] = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <Home size={18} />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <Dashboard size={18} />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <FileText size={18} />,
  },

  {
    title: "Create a new Resume",
    description: "Choose from a wide range of templates in our store or design yours.",
    onTrigger: () => console.log("Create new Resume"),
    icon: <FileText size={18} />,
  },
];

const App: React.FC = () => {
  return (
    <>
      <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
        <SpotlightProvider actions={actions} shortcut={["mod + P", "mod + K", "/"]}>
          <AppShell
            padding="md"
            navbar={<AppNavbar />}
            header={
              <Header height={40} p="xs">
                <ActionIcon variant="hover"><Menu2 size={16} /></ActionIcon>
                {/* <Logo colorScheme={"dark"} /> */}
                {/* Header content */}
                {/* Resume Builder */}
              </Header>
            }
            styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
          >
            <Routes>
              <Route path="/" element={<><Outlet /></>}>
                <Route index element={<>Home Page</>} />
                
                <Route path="resume">
                  <Route path=":resumeId" element={<><TemplatePicker type={TemplateTypes.ResumeOne} /></>} />
                  <Route path="new" element={<NewResume />} />
                  <Route index element={<ResumeHomePage />} />
                </Route>

                <Route path="*" element={<>No page found with this link</>} />
              </Route>
            </Routes>
            {/* Your application here */}
            
          </AppShell>
        </SpotlightProvider>
      </MantineProvider>
      {/* </div> */}
    </>
  );
};





export default App;
