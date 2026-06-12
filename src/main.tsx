import { createRoot } from "react-dom/client";
import Demo from "./Demo";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<Demo />);
}
