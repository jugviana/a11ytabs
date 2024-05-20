# A11yTabs Component

A simple and accessible React library for creating tabs components.

## Installation

```
npm install a11ytabs

```

## Usage

Import the necessary components from the library:

```
import React, { useState } from 'react';
import { TabsContainer, Tabs, Tab, TabPanels, TabPanel } from "a11ytabs";

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
```
