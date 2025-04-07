import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/*",
          dest: ".", // copies to dist root
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "widget",
      fileName: (format) => `script.${format}.js`,
      formats: ["iife"],
    },
    // rollupOptions: {
    //   output: {
    //     assetFileNames: "widget.[hash].[ext]", // Add a hash for cache busting
    //   },
    // },
    sourcemap: process.env.NODE_ENV === "production" ? false : true,
    minify: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), // Set environment variable explicitly
  },
});
