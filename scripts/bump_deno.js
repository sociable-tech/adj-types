import fs from "fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const denoJson = JSON.parse(fs.readFileSync("./deno.json", "utf-8"));

denoJson.version = packageJson.version;

fs.writeFileSync("./deno.json", JSON.stringify(denoJson, null, 2));

console.log(`✅ Updated deno.json to version ${packageJson.version}`);