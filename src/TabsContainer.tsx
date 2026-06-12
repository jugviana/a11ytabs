import { ReactNode, Dispatch, SetStateAction } from "react";
import TabsContext from "./tabsContext";

export interface TabsContainerProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

export default function TabsContainer({
  children,
  activeTab,
  setActiveTab,
}: TabsContainerProps) {
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}
