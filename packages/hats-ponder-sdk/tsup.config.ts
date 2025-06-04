import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["ponder", "ponder:registry", "ponder:schema"],
});
