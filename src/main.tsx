import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

declare global {
  interface Window {
    MyWidget: { mount: (selector?: string) => void };
  }
}

let root: ReactDOM.Root | null = null;

function mount(selector = "#my-widget") {
  const el = document.querySelector(selector);

  if (!el) {
    console.warn(`[MyWidget] Mount target "${selector}" not found.`);
    return;
  }

  if (!root) {
    // Only create root once
    root = ReactDOM.createRoot(el);
  }

  root.render(<App />);
}

window.MyWidget = { mount };

// Optional: Auto-mount if element exists
if (document.querySelector("#my-widget")) {
  window.MyWidget.mount();
} else {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
