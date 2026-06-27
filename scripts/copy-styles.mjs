import fs from "fs";
import path from "path";

const src = path.join(process.cwd(), "src", "components", "styles");
const targets = [
  path.join(process.cwd(), "dist", "styles"),
  path.join(process.cwd(), "dist", "components", "styles"),
];

if (fs.existsSync(src)) {
  for (const dest of targets) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      fs.copyFileSync(path.join(src, file), path.join(dest, file));
    }
  }
  console.log("Copied design tokens to dist/styles and dist/components/styles");
}
