import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import resolve from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        //target: "http://203.241.228.50:18000/api",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port: 5173,
  },
});
