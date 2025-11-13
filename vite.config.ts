import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vike()],
});
