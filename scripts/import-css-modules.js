const componentFolder = "./src/components";
const distFolder = "./dist";
const fs = require("fs");

const loadCssToDist = (componentName) => (cssName) =>
  fs.copyFile(
    `${componentFolder}/${componentName}/${cssName}`,
    `${distFolder}/${componentName}/${cssName}`,
    (err) => {
      if (err) {
        return console.error(err);
      }
    }
  );

const processComponentFolder = (componentName) => {
  const cssFiles = fs
    .readdirSync(`${componentFolder}/${componentName}`)
    .filter((fn) => fn.endsWith(".module.css"));

  if (cssFiles.length) {
    cssFiles.forEach(loadCssToDist(componentName));
  }
};

fs.readdir(componentFolder, (err, list) => {
  if (err) {
    return console.error(err);
  }

  const folders = list.filter((name) => !name.includes(".ts"));
  folders.forEach(processComponentFolder);
});
