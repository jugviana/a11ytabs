import { ReactNode } from "react";

interface TabPanelsTypes {
  children: ReactNode
}

export default function TabPanels({ children }: TabPanelsTypes) {
  return <div>{children}</div>;
}
