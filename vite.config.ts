// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://github.com/elver45D/react_app", // 👈 Agrega esto
  plugins: [react()],
});
