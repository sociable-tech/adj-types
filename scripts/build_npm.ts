import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./npm",
  shims: {},
  test: false,
  package: {
    name: "@adjudication/types",
    version: Deno.args[0] || "0.0.0",
    description: "Adjudication shared types",
    license: "MIT",
    repository: {
      type: "git",
      url: "https://github.com/sociable-tech/adj-types.git",
    },
    type: "module",
    main: "./mod.js",
    types: "./mod.d.ts"
  },
});