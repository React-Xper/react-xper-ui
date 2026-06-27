const componentFolder = "./src/components";
const distFolder = "./dist/components";
const fs = require("fs");
const path = require("path");

const copyCss = (componentName, cssName) => {
  const src = path.join(componentFolder, componentName, cssName);
  const destDir = path.join(distFolder, componentName);
  const dest = path.join(destDir, cssName);
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, dest);
};

const processComponentFolder = (componentName) => {
  const dir = path.join(componentFolder, componentName);
  if (!fs.statSync(dir).isDirectory()) return;

  const cssFiles = fs.readdirSync(dir).filter((fn) => fn.endsWith(".module.css"));
  cssFiles.forEach((cssName) => copyCss(componentName, cssName));
};

fs.mkdirSync(distFolder, { recursive: true });

fs.readdirSync(componentFolder).forEach((name) => {
  if (name === "styles" || name.includes(".ts")) return;
  processComponentFolder(name);
});

// third-party subfolders
const thirdParty = path.join(componentFolder, "third-party");
if (fs.existsSync(thirdParty)) {
  fs.readdirSync(thirdParty).forEach((name) => {
    const sub = path.join(thirdParty, name);
    if (!fs.statSync(sub).isDirectory()) return;
    const cssFiles = fs.readdirSync(sub).filter((fn) => fn.endsWith(".module.css"));
    const destName = path.join("third-party", name);
    cssFiles.forEach((cssName) => {
      const src = path.join(sub, cssName);
      const destDir = path.join(distFolder, destName);
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(src, path.join(destDir, cssName));
    });
  });
}

console.log("CSS modules copied to dist/components");
