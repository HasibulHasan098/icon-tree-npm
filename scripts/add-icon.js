#!/usr/bin/env node

const https = require("https");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const API_BASE = "https://icontree.cosmoscope.workers.dev";

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(
            new Error(`Request failed with status ${res.statusCode}: ${url}`)
          );
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(`Failed to parse JSON from ${url}`));
          }
        });
      })
      .on("error", reject);
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] !== "add" || args.length < 3) {
    console.error(
      'Usage: npx icontree add <iconId> --search "<query>" [--interactive]'
    );
    process.exit(1);
  }

  const iconId = args[1];
  const searchIndex = args.indexOf("--search");
  const interactive = args.includes("--interactive");

  if (searchIndex === -1 || !args[searchIndex + 1]) {
    console.error(
      'Usage: npx icontree add <iconId> --search "<query>" [--interactive]'
    );
    process.exit(1);
  }

  const query = args[searchIndex + 1];

  // Step 1: search
  const searchUrl = `${API_BASE}/icon/search?q=${encodeURIComponent(query)}`;
  const searchData = await fetchJSON(searchUrl);

  if (!searchData.results || searchData.results.length === 0) {
    console.error("No results found for query:", query);
    process.exit(1);
  }

  // Step 2: pick icon
  let selected = searchData.results[0];

  if (interactive) {
    console.log("Search results:");
    searchData.results.forEach((r, i) => {
      console.log(`  [${i}] ${r.name || r.url}`);
    });
    process.stdout.write("Select icon number: ");
    const choice = await new Promise((resolve) => {
      process.stdin.once("data", (data) => resolve(data.toString().trim()));
    });
    const index = parseInt(choice, 10);
    if (isNaN(index) || index < 0 || index >= searchData.results.length) {
      console.error("Invalid selection");
      process.exit(1);
    }
    selected = searchData.results[index];
  }

  // Step 3: download raw JSON (no ?color= param)
  const downloadUrl = new URL(selected.url, API_BASE).href;
  const iconData = await fetchJSON(downloadUrl);

  // Step 4: save to src/icons/<iconId>.json
  const iconsDir = path.resolve(__dirname, "../src/icons");
  fs.mkdirSync(iconsDir, { recursive: true });
  const filePath = path.join(iconsDir, `${iconId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(iconData), "utf-8");
  console.log(`Saved to ${filePath}`);

  // Step 5: re-run registry generator
  const generatorPath = path.resolve(__dirname, "generate-registry.js");
  execSync(`node "${generatorPath}"`, {
    stdio: "inherit",
    cwd: path.resolve(__dirname, ".."),
  });

  console.log(`Icon "${iconId}" added successfully.`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
