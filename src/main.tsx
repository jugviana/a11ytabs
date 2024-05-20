import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TabsContainer from "./TabsContainer";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabPanels from "./TabPanels";
import TabPanel from "./TabPanel";

function App() {
  const [activeTab, setActiveTab] = useState("tab0");

  return (
    <>
      <h2 id="tabs-example">Tabs example</h2>
      <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tabs ariaLabelledBy="tabs-example">
          <Tab id="tab0" controls="panel0">
            Tab0
          </Tab>
          <Tab id="tab1" controls="panel1">
            Tab1
          </Tab>
          <Tab id="tab2" controls="panel2">
            Tab2
          </Tab>
        </Tabs>
        <TabPanels>
          <TabPanel id="panel0" controlledBy="tab0">
            Panel0
          </TabPanel>
          <TabPanel id="panel1" controlledBy="tab1">
            Panel1
          </TabPanel>
          <TabPanel id="panel2" controlledBy="tab2">
            Panel2
          </TabPanel>
        </TabPanels>
      </TabsContainer>

      
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
