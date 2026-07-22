import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  external: ["react", "react-dom", "lottie-react"],
});
