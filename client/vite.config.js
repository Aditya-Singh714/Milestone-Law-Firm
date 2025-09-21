import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Enable history API fallback for React Router
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      input: "/index.html",
    },
  },
});
