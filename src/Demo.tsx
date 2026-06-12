import { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import TabPanels from "./TabPanels";
import Tabs from "./Tabs";
import TabsContainer from "./TabsContainer";

export default function Demo() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>Accessible tabs demo</h1>

      <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tabs ariaLabelledBy="tabs-heading">
          <Tab id="overview" controls="overview-panel">
            Overview
          </Tab>
          <Tab id="usage" controls="usage-panel">
            Usage
          </Tab>
          <Tab id="keyboard" controls="keyboard-panel">
            Keyboard
          </Tab>
        </Tabs>

        <TabPanels>
          <TabPanel id="overview-panel" controlledBy="overview">
            A typed and accessible tab component for React.
          </TabPanel>
          <TabPanel id="usage-panel" controlledBy="usage">
            Click a tab or use arrow keys to switch between panels.
          </TabPanel>
          <TabPanel id="keyboard-panel" controlledBy="keyboard">
            ArrowRight, ArrowDown, ArrowLeft, and ArrowUp are supported.
          </TabPanel>
        </TabPanels>
      </TabsContainer>
    </main>
  );
}
