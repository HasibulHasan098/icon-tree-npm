import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts", "src/icon-entries/*.tsx"],
    format: ["esm"],
    splitting: true,
    dts: true,
    clean: true,
    external: ["react", "react-dom", "lottie-react"],
  },
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    clean: false,
    external: ["react", "react-dom", "lottie-react"],
  },
]);
