import { AppShell, Header, Image, MantineProvider } from "@mantine/core";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Dashboard, FileText, Home } from "tabler-icons-react";
import "./App.css";
import { AppNavbar } from "./components/Organisms/AppNavbar";
import ResumeHomePage from "./pages/resume";
import { NewResume } from "./pages/resume/NewResume";
import TemplatePicker, { TemplateTypes } from "./template-collection";
import { LogoImages } from "./utils/Constants";

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
              <Header height={60} p="xs">
                <div id="header-container" style={{ display: "flex", flexDirection: "row" }}>
                  {/* <div id="toggle-navbar">
                    <ActionIcon variant="hover">
                      <Menu2 size={16} />
                    </ActionIcon>
                  </div> */}

                  <div id="logo-container" style={{ display: "flex", height: 150, width: 100 }}>
                    <Image src={LogoImages["dark"]} />
                  </div>
                  {/* <Logo colorScheme={"dark"} /> */}
                  {/* Header content */}
                  {/* Resume Builder */}
                </div>
              </Header>
            }
            styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Outlet />
                  </>
                }
              >
                <Route index element={<>Home Page</>} />

                <Route path="resume">
                  <Route
                    path=":resumeId"
                    element={
                      <>
                        <TemplatePicker type={TemplateTypes.ResumeOne} />
                      </>
                    }
                  />
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
