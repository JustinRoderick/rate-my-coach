import { defineConfig } from "@tanstack/react-start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  tsr: {
    appDirectory: "src",
  },
  server: {
    preset: "bun",
  },
  vite: {
    plugins: [
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
});
