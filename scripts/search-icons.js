#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const namesPath = path.resolve(__dirname, "icon-names.json");
if (!fs.existsSync(namesPath)) {
  console.error("The local icon index is missing. Reinstall the package or regenerate the icon registry.");
  process.exit(1);
}

const args = process.argv.slice(2);
if (args[0] !== "search" || args.length < 2) {
  console.error('Usage: npx icontree search "<query>"');
  process.exit(1);
}

const query = args.slice(1).join(" ").trim().toLowerCase();
const terms = query.split(/[\s,]+/).filter(Boolean);
const names = JSON.parse(fs.readFileSync(namesPath, "utf8"));
const matches = names.filter((name) => {
  const normalized = name.toLowerCase();
  return terms.some((term) => normalized.includes(term));
});

if (!matches.length) {
  console.log(`No icons found for "${args.slice(1).join(" ")}"`);
  process.exit(0);
}

for (const name of matches) console.log(name);
