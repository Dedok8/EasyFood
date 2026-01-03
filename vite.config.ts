import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    open: true,
    // proxy: {
    //   "/api": {
    //     target: "https://easyfood-jwt.onrender.com",
    //     changeOrigin: true,
    //     secure: true,
    //   },
    // },
  },
});
