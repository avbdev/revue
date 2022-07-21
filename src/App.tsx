import { AppShell, Button, Header, Image, MantineProvider } from "@mantine/core";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Dashboard, FileText, Home } from "tabler-icons-react";
import "./App.css";
import { AppNavbar } from "./components/Organisms/AppNavbar";
import ResumeHomePage from "./pages/resume";
import { NewResume } from "./pages/resume/NewResume";
import TemplatePicker, { TemplateTypes } from "./template-collection";
import { sampleData } from "./template-collection/ResumeOne/data";
import { Resume } from "./template-collection/ResumeOne/Interfaces";
import { LogoImages } from "./utils/Constants";
import Editor from "@monaco-editor/react";

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
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  const [data, setData] = useState<Resume>(sampleData);


  const handleThemeChange = (ev?: any, checked?: any) => {
    console.log('Target', ev.target.value, ev.target.checked)

    setColorScheme(ev.target.checked ? "dark" : "light");

  }
  return (
    <div className="app-container">
      <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
        <SpotlightProvider actions={actions} shortcut={["mod + P", "mod + K", "/"]}>
          <AppShell
            padding="md"
            navbar={<>
              <div className="app-content-navbar">
                <AppNavbar />
              </div>
            </>
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
                    <Image src={LogoImages[colorScheme]} />
                  </div>

                  <div style={{
                    display: 'flex',
                    flex: '1 1 0%',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    paddingTop: '8px'
                  }}>
                    <div>
                      <input id="themeToggle" type={"checkbox"} onClick={handleThemeChange} />
                      <label htmlFor="themeToggle" style={{ paddingLeft: 10, paddingBottom: 2 }}>Dark Theme</label>
                    </div>
                  </div>
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
                    <Route path=":resumeId" element={<TemplateEditor colorScheme={colorScheme} />} />
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


  // return <>

  //   {/* <SaveToPDFButton /> */}
  //   <div id="templateEditor" className="template-editor" style={{ display: "flex", flex: 1 }}>

  //     <TemplatePicker data={data} type={TemplateTypes.ResumeOne} />
  //   </div>
  // </>

};

const SaveToPDFButton: React.FC<any> = () => {

  function PrintElem(elem: any) {
    var mywindow: any = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + "" + '</title>');
    mywindow.document.write('</head><body >');
    // mywindow.document.write('<h1>' + document.title + '</h1>');
    mywindow.document.write(document.getElementById(elem)?.innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  }

  return <Button onClick={() => window.print()}> Save PDF</Button>
}

const TemplateEditor: React.FC<any> = ({ colorScheme }) => {

  const [data, setData] = useState<Resume>(sampleData);




  const handleDataChange = (ev?: any, formData?: any) => {
    // ev?.preventDefault();
    const updatedData = JSON.parse(ev) as Resume;

    console.log("Data Changed", ev)
    setData(updatedData)

  }

  return <div style={{ display: "flex", flexDirection: "row" }}>
    <div className="inputData" style={{ display: "flex", minHeight: 200, flex: 1 }}>
      <Editor
        height="90vh"
        width="500px"
        defaultLanguage="json"
        defaultValue={JSON.stringify(data, null, 2)}
        onChange={handleDataChange}
        theme={colorScheme === "dark" ? "vs-dark" : "light"}
      />

      {/* <label htmlFor="jsonData">JSON Data</label> */}
      {/* <textarea id="jsonData" onChange={handleDataChange} value={JSON.stringify(data, null, 2)} rows={658} cols={300} style={{ width: '100%', color: colorScheme === "dark" ? "#fff" : "#000" }} /> */}


    </div>

    <SaveToPDFButton />
    <div id="templateEditor" style={{ display: "flex", flex: 1 }}>

      <TemplatePicker data={data} type={TemplateTypes.ResumeOne} />
    </div>
  </div>
}

export default App;
