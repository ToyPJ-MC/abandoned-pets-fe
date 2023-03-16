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
        //target: "http://192.168.0.16:8080/api",
        target: "http://172.20.10.10:8080/api",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/oauth": {
        target: "https://kauth.kakao.com/oauth",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
      "/v1": {
        target: "https://kapi.kakao.com/v1",
        changeOrigin: true,
        secure: true,
        ws: true,
      },
    },
    port: 5173,
  },
});
