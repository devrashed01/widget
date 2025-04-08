/// <reference types="vite/client" />

interface Window {
  Widget: { mount: (config: WidgetConfig) => void };
}
