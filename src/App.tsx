import { AppShell, Header, Image, MantineProvider } from "@mantine/core";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Dashboard, FileText, Home } from "tabler-icons-react";
import "./App.css";
import { AppNavbar } from "./components/Organisms/AppNavbar";
import ResumeHomePage from "./pages/resume";
import { NewResume } from "./pages/resume/NewResume";
import TemplatePicker, { TemplateTypes } from "./template-collection";
import { LogoImages } from "./utils/Constants";

import { Client, Databases, Account } from "appwrite";

export const client = new Client();

client.setEndpoint("https://apdb.light.network/v1").setProject("62d46e892cf08785397a");

// Project ID : 62d46e892cf08785397a
// Database ID: 62d46f270f7c4a972760
// User-Resume Collection: 62d533c41f4ace64319e
export const revueDB = new Databases(client, "62d46f270f7c4a972760");
export const account = new Account(client);

// export const session = account.createEmailSession("bhardwaj@avb.dev", "Test1234");

export const revueJSON = async () => {
  let res = {};
  // await account.createEmailSession("bhardwaj@avb.dev", "Test1234");
  const doc = await revueDB.getDocument("62d533c41f4ace64319e", "62d54154abead5bb139f");

  // doc.then(
  //   function (response) {
  //     res = JSON.parse(response.resumeJson);
  //     console.log(response); // Success
  //   },
  //   function (error) {
  //     console.log(error); // Failure
  //   }
  // );
  return JSON.parse(JSON.stringify(doc.resumeJson));
};

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
  const [resumeJson, setResumeJson] = useState<any>();

  useEffect(() => {
    const data = async () => {
      const data = await revueJSON();
      const res = JSON.parse(data.resumeJson);
      setResumeJson(res);
      console.log("Data in APP", res);
    };
    data();
  }, []);
  return (
    <div className="app-container">
      <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
        <SpotlightProvider actions={actions} shortcut={["mod + P", "mod + K", "/"]}>
          <AppShell
            padding="md"
            navbar={
              <div className="app-content-navbar">
                <AppNavbar />
              </div>
            }
            header={
              // <div className="app-header">
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
              // </div>
            }
            styles={(theme) => ({
              main: {
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                display: "flex",
                flex: 1,
                maxHeight: "90vh",
                overflow: "auto",
              },
            })}
          >
            <div className="app-content-page">
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
            </div>
          </AppShell>
        </SpotlightProvider>
      </MantineProvider>
      {/* </div> */}
    </div>
  );

  // return (
  //   <div className="app-content-page">
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <>
  //             <Outlet />
  //           </>
  //         }
  //       >
  //         <Route index element={<>Home Page</>} />

  //         <Route path="resume">
  //           <Route
  //             path=":resumeId"
  //             element={
  //               <>
  //                 <TemplatePicker type={TemplateTypes.ResumeOne} />
  //               </>
  //             }
  //           />
  //           <Route path="new" element={<NewResume />} />
  //           <Route index element={<ResumeHomePage />} />
  //         </Route>

  //         <Route path="*" element={<>No page found with this link</>} />
  //       </Route>
  //     </Routes>
  //     {/* Your application here */}
  //   </div>
  // );
  // return <div className="app-container">
  //   <div className="app-header">
  //     Header
  //   </div>
  //   <div className="app-content">

  //     <div className="app-content-navbar">
  //       Navbar
  //     </div>

  //     <div className="app-content-page">
  //       Page
  //     </div>
  //   </div>

  // </div>
};

export default App;
