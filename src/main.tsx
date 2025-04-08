import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import { IWidgetCofig } from "./types";

let root: ReactDOM.Root | null = null;

function mount(config: IWidgetCofig) {
  const el = document.querySelector(config.container);

  if (!el) {
    console.warn(`[Widget] Mount target "${config.container}" not found.`);
    return;
  }

  if (!root) {
    // Only create root once
    root = ReactDOM.createRoot(el);
  }

  root.render(<App />);
}

window.Widget = { mount };

// Optional: Auto-mount if element exists
const DEFAULT_WIDGET_CONTAINER = "#widget";
if (document.querySelector(DEFAULT_WIDGET_CONTAINER)) {
  window.Widget.mount({
    container: DEFAULT_WIDGET_CONTAINER,
  });
} else {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
