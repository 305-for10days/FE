import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/oauth2": {
                target: "http://southoftheriver.synology.me:8082",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/oauth2/, ""),
            },
        },
    },
});
