import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    alias: {
      swiper: 'node_modules/swiper',
    },
    port: 3000,
    open: true,
  },
});
