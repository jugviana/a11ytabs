import { ReactNode, useContext } from "react";
import TabsContext from "./tabsContext";


interface TabPanelTypes {
  id: string,
  controlledBy: string,
  children: ReactNode
}

export default function TabPanel({ id, controlledBy, children }: TabPanelTypes) {
  const { activeTab } = useContext(TabsContext);

  return activeTab === controlledBy ? (
    <div role="tabpanel" id={id} aria-labelledby={controlledBy} tabIndex={0}>
      {children}
    </div>
  ) : null;
}
