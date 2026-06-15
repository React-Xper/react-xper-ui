import fs from "fs";
import path from "path";

const buildDir = "build";
const siteDir = "site";
const demoDir = path.join(buildDir, "demo");

if (!fs.existsSync(buildDir)) {
  console.error("Run react-scripts build first (with PUBLIC_URL=/demo)");
  process.exit(1);
}

fs.mkdirSync(demoDir, { recursive: true });

for (const entry of fs.readdirSync(buildDir)) {
  if (entry === "demo") continue;
  fs.renameSync(path.join(buildDir, entry), path.join(demoDir, entry));
}

for (const file of fs.readdirSync(siteDir)) {
  fs.copyFileSync(path.join(siteDir, file), path.join(buildDir, file));
}

// favicon for marketing root
if (fs.existsSync("public/favicon.svg")) {
  fs.copyFileSync("public/favicon.svg", path.join(buildDir, "favicon.svg"));
}

console.log("Merged marketing site → build/, demo app → build/demo/");
