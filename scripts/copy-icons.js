const fs = require("fs");
const path = require("path");

const srcDir = path.resolve(__dirname, "../src/icons");
const destDir = path.resolve(__dirname, "../dist/icons");

if (!fs.existsSync(srcDir)) {
  console.log("No src/icons directory found, skipping copy.");
  process.exit(0);
}

fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".json"));

for (const file of files) {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
}

console.log(`Copied ${files.length} icon JSON file(s) to dist/icons/`);
