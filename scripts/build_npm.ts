import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";

await emptyDir("./npm");

const packageJson = JSON.parse(await Deno.readTextFile("./package.json"));

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  declaration: true,
  compilerOptions: {
    target: "ES2022",
    module: "ESNext",
  },
  test: false,
  package: packageJson,
});

Deno.copyFileSync("README.md", "npm/README.md");
Deno.copyFileSync("LICENSE", "npm/LICENSE");

console.log("npm package built successfully!");
