import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Tabs from "../Tabs";
import Tab from "../Tab";
import TabsContainer from "../TabsContainer";
import TabPanel from "../TabPanel";
import TabPanels from "../TabPanels";
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
  let tab0: HTMLElement, tab1: HTMLElement, tab2: HTMLElement;

  beforeEach(() => {
    render(<RenderTabsComponent />);
    tab0 = screen.getByRole("tab", { name: "Tab0" });
    tab1 = screen.getByRole("tab", { name: "Tab1" });
    tab2 = screen.getByRole("tab", { name: "Tab2" });
  });

  describe("Navigation by clicking on tabs", () => {
    test("Renders the component with the first tab and panel active", async () => {
      expect(tab0).toHaveAttribute("aria-selected", "true");
      expect(tab1).toHaveAttribute("aria-selected", "false");
      expect(tab2).toHaveAttribute("aria-selected", "false");
      expect(screen.getByText("Panel0")).toBeVisible();
      expect(screen.queryByText("Panel1")).not.toBeInTheDocument();
      expect(screen.queryByText("Panel2")).not.toBeInTheDocument();
      expect(screen.getByText("Panel0")).toHaveAttribute("tabindex", "0");
    });

    test("Activates the second tab and panel when the second tab is clicked", async () => {
      await userEvent.click(tab1);
      expect(tab1).toHaveAttribute("aria-selected", "true");
      expect(tab0).toHaveAttribute("aria-selected", "false");
      expect(tab2).toHaveAttribute("aria-selected", "false");
      expect(screen.getByText("Panel1")).toBeVisible();
      expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
      expect(screen.queryByText("Panel2")).not.toBeInTheDocument();
      expect(screen.getByText("Panel1")).toHaveAttribute("tabindex", "0");
    });

    test("Activates the third tab and panel when the third tab is clicked", async () => {
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

  describe("Navigation by arrow keys", () => {
    test("Activates the second tab when right arrow key is pressed", async () => {
      tab0.focus();
      await userEvent.keyboard("{ArrowRight}");
      expect(tab1).toHaveAttribute("aria-selected", "true");
      expect(tab0).toHaveAttribute("aria-selected", "false");
      expect(tab2).toHaveAttribute("aria-selected", "false");
      expect(screen.getByText("Panel1")).toBeVisible();
      expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
      expect(screen.queryByText("Panel2")).not.toBeInTheDocument();
      expect(screen.getByText("Panel1")).toHaveAttribute("tabindex", "0");
    });

    test("Activates the third tab when right arrow key is pressed twice", async () => {
      tab0.focus();
      await userEvent.keyboard("{ArrowRight}");
      await userEvent.keyboard("{ArrowRight}");
      expect(tab1).toHaveAttribute("aria-selected", "false");
      expect(tab0).toHaveAttribute("aria-selected", "false");
      expect(tab2).toHaveAttribute("aria-selected", "true");
      expect(screen.getByText("Panel2")).toBeVisible();
      expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
      expect(screen.queryByText("Panel1")).not.toBeInTheDocument();
      expect(screen.getByText("Panel2")).toHaveAttribute("tabindex", "0");
    });

    test("Activates the last tab when left arrow key is pressed on the first tab", async () => {
      tab0.focus();
      await userEvent.keyboard("{ArrowLeft}");
      expect(tab2).toHaveAttribute("aria-selected", "true");
      expect(tab0).toHaveAttribute("aria-selected", "false");
      expect(tab1).toHaveAttribute("aria-selected", "false");
      expect(screen.getByText("Panel2")).toBeVisible();
      expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
      expect(screen.queryByText("Panel1")).not.toBeInTheDocument();
      expect(screen.getByText("Panel2")).toHaveAttribute("tabindex", "0");
    });

    test("Activates the second tab when down arrow key is pressed on the first tab", async () => {
      tab0.focus();
      await userEvent.keyboard("{ArrowDown}");
      expect(tab0).toHaveAttribute("aria-selected", "false");
      expect(tab1).toHaveAttribute("aria-selected", "true");
      expect(tab2).toHaveAttribute("aria-selected", "false");
      expect(screen.getByText("Panel1")).toBeVisible();
      expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
      expect(screen.queryByText("Panel2")).not.toBeInTheDocument();
      expect(screen.getByText("Panel1")).toHaveAttribute("tabindex", "0");
    });

    test("Activates the last tab when up arrow key is pressed on the first tab", async () => {
      tab0.focus();
      await userEvent.keyboard("{ArrowUp}");
      expect(tab0).toHaveAttribute("aria-selected", "false");
      expect(tab1).toHaveAttribute("aria-selected", "false");
      expect(tab2).toHaveAttribute("aria-selected", "true");
      expect(screen.getByText("Panel2")).toBeVisible();
      expect(screen.queryByText("Panel0")).not.toBeInTheDocument();
      expect(screen.queryByText("Panel1")).not.toBeInTheDocument();
      expect(screen.getByText("Panel2")).toHaveAttribute("tabindex", "0");
    });
  });

  describe("Navigation by tab key", () => {
    test("focuses on the content of the first panel when tab key is pressed", async () => {
      tab0.focus();
      await userEvent.keyboard("{Tab}");
      expect(screen.getByText("Panel0")).toHaveFocus();
    });

    test("Activates the previous focusable element when shift+tab keys are pressed", async () => {
      tab0.focus();
      await userEvent.keyboard("{Shift>}{Tab}");
      expect(tab0).toHaveAttribute("aria-selected", "true");
      expect(screen.getByText("Panel0")).toHaveAttribute("tabindex", "0");
    });
  });
});
