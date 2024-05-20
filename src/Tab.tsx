import React, { ReactNode, useContext } from "react";
import TabsContext from "./tabsContext";

interface TabTypes {
  id: string,
  controls: string,
  children: ReactNode

}

export default function Tab({ id, controls, children }: TabTypes) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    
    const tabList = event.currentTarget.parentElement

    if (event.code === "ArrowRight" || event.code === "ArrowDown") {
      const nextTab = event.currentTarget.nextElementSibling as HTMLElement
      if (nextTab) {
        nextTab.focus();
        setActiveTab(nextTab.id);
      } else {
        const firstElement = tabList?.firstElementChild as HTMLElement
        firstElement.focus()
        setActiveTab(firstElement.id)
      
      }
    }

    if (event.code === "ArrowLeft" || event.code === "ArrowUp") {
      const previousTab = event.currentTarget.previousElementSibling as HTMLElement
      if (previousTab) {
        previousTab.focus();
        setActiveTab(previousTab.id);
      } else {
        const lastChild = tabList?.lastElementChild as HTMLElement
        lastChild.focus()
        setActiveTab(lastChild.id);
      }
    }
  };

  return (
    <button
      type="button"
      role="tab"
      tabIndex={activeTab === id ? 0 : -1}
      aria-selected={activeTab === id ? "true" : "false"}
      onClick={() => setActiveTab(id)}
      onKeyDown={(e) => handleKeyDown(e)}
      id={id}
      aria-controls={controls}
    >
      {children}
    </button>
  );
}
