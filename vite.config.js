import { defineConfig } from "vite";
import viteRawPlugin from "./vite/vite-raw-plugin.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteRawPlugin({
      fileRegex: /\.navy$/,
    }),
  ],
  server: {
    port: 8085,
  },
});