import dts from "rollup-plugin-dts";

export default {
  input: "./npm/esm/index.d.ts",
  output: {
    file: "./npm/mod.d.ts",
    format: "es"
  },
  plugins: [dts()],
};