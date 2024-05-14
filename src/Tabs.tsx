import { ReactNode} from "react";

interface TabsTypes {
  ariaLabelledBy: string,
  children: ReactNode
}

export default function Tabs({ ariaLabelledBy, children }: TabsTypes) {
  return (
    <div role="tablist" aria-labelledby={ariaLabelledBy}>
      {children}
    </div>
  );
}
