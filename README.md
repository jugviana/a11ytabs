# A11yTabComponent

A typed and accessible tab component for React.

## Key features

- Accessible by default: Includes ARIA roles and properties to ensure the tabs are accessible to assistive technologies.
- Keyboard navigation: Supports navigation using the arrow keys, Tab, and Shift+Tab for switching between tabs and panels.
- Flexible styling: The component is unstyled, allowing you to apply your custom styles to match your application's design.

## Installation

```sh
npm install a11ytabcomponent
```

## Usage

Import the necessary components from the library:

```js
import { TabsContainer, Tabs, Tab, TabPanels, TabPanel } from "a11ytabcomponent";
```

Define `useState` to control the active tab. Ensure proper connections between the `Tab` and `TabPanel` components using the appropriate attributes.
Each `Tab` component has a `controls` attribute that references the corresponding `TabPanel`'s `id`.
Each `TabPanel` component has a `controlledBy` attribute that references the corresponding `Tab`'s `id`.

```jsx
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
