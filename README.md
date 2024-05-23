# A11yTabs Component

A simple and accessible React library for creating tabs components.


## Functionality
A11yTabs ensures that your tabs are accessible and follow best practices for usability. It manages the active tab state, handles keyboard navigation, and maintains the appropriate ARIA attributes to enhance accessibility for users relying on assistive technologies. Here are the key features:

- Accessible by default: Implements ARIA roles, properties to ensure the tabs are usable by screen readers.
- Keyboard navigation: Supports navigation using the arrow keys, Tab, and Shift+Tab for switching between tabs and panels.
- Flexible styling: The component is unstyled, allowing you to apply your custom styles to match your application's design.
- React integration: Built for React, making it easy to integrate into your React applications.

## Installation

```
npm install a11ytabs
```

## Usage

Import the necessary components from the library:

```
import { TabsContainer, Tabs, Tab, TabPanels, TabPanel } from "a11ytabs";
```

Define `useState` to control the active tab. Ensure proper connections between the `Tab` and `TabPanel` components using appropriate `IDs` and ARIA attributes.
Each `Tab` component has an `id` and `controls` attribute that links it to the corresponding `TabPanel` through its `id` and `controlledBy` attributes.

```
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
