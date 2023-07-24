import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".ts", ".tsx", ".vue"],
    alias: {
      "@pages": resolve(__dirname, "./src/pages"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@router": resolve(__dirname, "./src/router"),
      "@config": resolve(__dirname, "./src/config"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@stores": resolve(__dirname, "./src/stores"),
      "@services": resolve(__dirname, "./src/services"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@components": resolve(__dirname, "./src/components"),
      "@composables": resolve(__dirname, "./src/composables"),
    },
  },
});
