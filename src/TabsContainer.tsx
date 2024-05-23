import { ReactNode, Dispatch, SetStateAction } from "react";
import TabsContext from "./TabsContext";

interface TabsContainerTypes {
  activeTab: string,
  setActiveTab: Dispatch<SetStateAction<string>>,
  children: ReactNode
}

export default function TabsContainer({ children, activeTab, setActiveTab }: TabsContainerTypes) {
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}
