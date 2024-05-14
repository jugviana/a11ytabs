import { ReactNode } from "react";
import TabsContext from "./tabsContext";

interface TabsContainerTypes {
  activeTab: string,
  setActiveTab: () => void,
  children: ReactNode
}

export default function TabsContainer({ children, activeTab, setActiveTab }: TabsContainerTypes) {
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}
