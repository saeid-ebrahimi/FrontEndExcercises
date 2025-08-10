import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/users": {
        target: "http://localhost:9090",
        changeOrigin: true,
      },
      "/books": {
        target: "http://localhost:9090",
        changeOrigin: true,
      },
    },
  },
});
