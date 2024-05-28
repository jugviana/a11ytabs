import { ReactNode, useContext } from "react";
import TabsContext from "./TabsContext";

export interface TabPanelProps {
  id: string;
  controlledBy: string;
  children: ReactNode;
}

export default function TabPanel({
  id,
  controlledBy,
  children,
  ...rest
}: TabPanelProps) {
  const { activeTab } = useContext(TabsContext);

  return activeTab === controlledBy ? (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={controlledBy}
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  ) : null;
}
