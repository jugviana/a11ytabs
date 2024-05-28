import { ReactNode } from "react";

export interface TabPanelsProps {
  children: ReactNode;
}

export default function TabPanels({ children }: TabPanelsProps) {
  return <div>{children}</div>;
}
