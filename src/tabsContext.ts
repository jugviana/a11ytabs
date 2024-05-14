import { createContext } from "react";


interface TabsContextTypes {
  activeTab: string,
  setActiveTab: (id: string) => void
}

const TabsContext = createContext<TabsContextTypes>({
  activeTab: "",
  setActiveTab: (id: string) => {}
});

export default TabsContext;
