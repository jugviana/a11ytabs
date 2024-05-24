import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabsContainer from "./TabsContainer";
import TabPanel from "./TabPanel";
import TabPanels from "./TabPanels";
import { useState } from "react";

const RenderTabsComponent = () => {
  const [activeTab, setActiveTab] = useState("tab0");
  return (
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
  );
};

describe("Tabs Component", () => {
  test("renders the component with the first tab and panel actived", async () => {
    render(<RenderTabsComponent />);
    const tab0 = screen.getByRole("tab", { name: "Tab0" });
    const tab1 = screen.getByRole("tab", { name: "Tab1" });
    const tab2 = screen.getByRole("tab", { name: "Tab2" });
    expect(tab0).toHaveAttribute("aria-selected", "true");
    expect(tab1).toHaveAttribute("aria-selected", "false");
    expect(tab2).toHaveAttribute("aria-selected", "false");
    expect(screen.getByText("Panel0")).toBeVisible();
    expect(screen.queryByText("Panel1")).not.toBeInTheDocument();
    expect(screen.queryByText("Panel2")).not.toBeInTheDocument();
    expect(screen.getByText("Panel0")).toHaveAttribute("tabindex", "0");
  });

  test("activates the second tab and panel when the second tab button is clicked", async () => {
    render(<RenderTabsComponent />);
    const tab0 = screen.getByRole("tab", { name: "Tab0" });
    const tab1 = screen.getByRole("tab", { name: "Tab1" });
    const tab2 = screen.getByRole("tab", { name: "Tab2" });
    await userEvent.click(tab1);
    expect(tab1).toHaveAttribute("aria-selected", "true");
    expect(tab0).toHaveAttribute("aria-selected", "false");
    expect(tab2).toHaveAttribute("aria-selected", "false");
    expect(screen.getByText("Panel1")).toBeVisible();
    expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
    expect(screen.queryByText("Panel2")).not.toBeInTheDocument();
    expect(screen.getByText("Panel1")).toHaveAttribute("tabindex", "0");
  });

  test("activates the third tab and panel when the third tab button is clicked", async () => {
    render(<RenderTabsComponent />);
    const tab0 = screen.getByRole("tab", { name: "Tab0" });
    const tab1 = screen.getByRole("tab", { name: "Tab1" });
    const tab2 = screen.getByRole("tab", { name: "Tab2" });
    await userEvent.click(tab2);
    expect(tab2).toHaveAttribute("aria-selected", "true");
    expect(tab0).toHaveAttribute("aria-selected", "false");
    expect(tab1).toHaveAttribute("aria-selected", "false");
    expect(screen.getByText("Panel2")).toBeVisible();
    expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
    expect(screen.queryByText("Panel1")).not.toBeInTheDocument();
    expect(screen.getByText("Panel2")).toHaveAttribute("tabindex", "0");
  });
});
