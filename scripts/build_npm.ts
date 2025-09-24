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
    "type": "module",
    "main": "./mod.js",
    "module": "./mod.js",
    "types": "./mod.d.ts",
    "exports": {
      ".": {
        "import": "./mod.js",
        "require": "./mod.js",
        "types": "./mod.d.ts"
      }
    }
  },
});

await Deno.copyFile(".npmignore", "./npm/.npmignore");
await Deno.copyFile("README.md", "./npm/README.md");
// copy package.json (so published folder has metadata); you may want to use a trimmed package.json if needed
await Deno.copyFile("package.json", "./npm/package.json");

// Bundle runtime JS into a single file: ./npm/mod.js
// (requires rollup installed as devDependency so `npx rollup` finds it)
const bundle = Deno.run({
  cmd: [
    "npx",
    "rollup",
    "./npm/esm/index.js",
    "--file",
    "./npm/mod.js",
    "--format",
    "es"
  ],
  stdout: "inherit",
  stderr: "inherit",
});
const bundleStatus = await bundle.status();
if (!bundleStatus.success) {
  throw new Error("Rollup bundling of ./npm/esm/index.js -> ./npm/mod.js failed");
}

// Ensure a mod.d.ts exists now (rollup -c will later flatten declarations into a single mod.d.ts)
await Deno.copyFile("./npm/esm/index.d.ts", "./npm/mod.d.ts");