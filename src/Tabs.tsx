import { ReactNode } from "react";

export interface TabsProps {
  ariaLabelledBy: string;
  children: ReactNode;
}

export default function Tabs({ ariaLabelledBy, children, ...rest }: TabsProps) {
  return (
    <div role="tablist" aria-labelledby={ariaLabelledBy} {...rest}>
      {children}
    </div>
  );
}
