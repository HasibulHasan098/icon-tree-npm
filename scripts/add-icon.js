#!/usr/bin/env node

const https = require("https");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

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

function askQuestion(query) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

/**
 * Parse a user's selection string into an array of indices.
 * Supports:
 *   - Single numbers:  "0"
 *   - Comma-separated: "0, 2, 4"
 *   - Space-separated: "0 2 4"
 *   - Ranges:          "0-3"
 *   - Mixed:           "0, 2-4, 6"
 *   - "all":           selects every index
 */
function parseSelections(input, maxIndex) {
  const trimmed = input.trim().toLowerCase();
  if (trimmed === "all") {
    return Array.from({ length: maxIndex + 1 }, (_, i) => i);
  }

  const indices = new Set();
  // Split by comma or space
  const parts = trimmed.split(/[\s,]+/).filter(Boolean);

  for (const part of parts) {
    if (part.includes("-")) {
      // Range:  "2-5"
      const [rawStart, rawEnd] = part.split("-", 2);
      const start = parseInt(rawStart, 10);
      const end = parseInt(rawEnd, 10);
      if (!isNaN(start) && !isNaN(end)) {
        const min = Math.max(0, Math.min(start, end));
        const max = Math.min(maxIndex, Math.max(start, end));
        for (let i = min; i <= max; i++) {
          indices.add(i);
        }
      }
    } else {
      const idx = parseInt(part, 10);
      if (!isNaN(idx) && idx >= 0 && idx <= maxIndex) {
        indices.add(idx);
      }
    }
  }

  return [...indices].sort((a, b) => a - b);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    || "icon";
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] !== "add" || args.length < 2) {
    console.error(
      "Usage: npx icontree add --search \"<query terms>\" [--interactive]"
    );
    console.error("");
    console.error("Examples:");
    console.error("  npx icontree add --search \"heart\"");
    console.error("  npx icontree add --search \"arrow up\" --interactive");
    console.error("  npx icontree add --search \"arrow\" --interactive");
    process.exit(1);
  }

  const searchIndex = args.indexOf("--search");
  const interactive = args.includes("--interactive");

  if (searchIndex === -1 || !args[searchIndex + 1]) {
    console.error(
      "Usage: npx icontree add --search \"<query terms>\" [--interactive]"
    );
    process.exit(1);
  }

  const query = args[searchIndex + 1];

  // ---------------------------------------------------------------
  // Step 1: search the API by name/keywords
  // ---------------------------------------------------------------
  console.log(`Searching icons for: "${query}" ...`);
  const searchUrl = `${API_BASE}/icon/search?q=${encodeURIComponent(query)}`;
  const searchData = await fetchJSON(searchUrl);

  if (!searchData.results || searchData.results.length === 0) {
    console.error("No results found for query:", query);
    process.exit(1);
  }

  const results = searchData.results;

  // ---------------------------------------------------------------
  // Step 2: pick one or more icons
  // ---------------------------------------------------------------
  let selectedIndices = [];

  if (interactive) {
    console.log(`\nFound ${results.length} result(s):\n`);
    results.forEach((r, i) => {
      const name = r.name || r.id || `icon-${i}`;
      console.log(`  [${i}] ${name}`);
    });
    console.log("");

    const answer = await askQuestion(
      "Select icon(s) — e.g. \"0\", \"0,2,4\", \"0-3\", or \"all\": "
    );

    selectedIndices = parseSelections(answer, results.length - 1);

    if (selectedIndices.length === 0) {
      console.error("No valid selection made.");
      process.exit(1);
    }

    console.log(`Selected ${selectedIndices.length} icon(s).\n`);
  } else {
    // Non-interactive: just pick the first match
    selectedIndices = [0];
    const name = results[0].name || results[0].id || "icon";
    console.log(`Matched: "${name}"\n`);
  }

  // ---------------------------------------------------------------
  // Step 3: download each selected icon
  // ---------------------------------------------------------------
  const iconsDir = path.resolve(__dirname, "../src/icons");
  fs.mkdirSync(iconsDir, { recursive: true });

  for (const idx of selectedIndices) {
    const selected = results[idx];
    const displayName = selected.name || selected.id || `icon-${idx}`;
    const iconId = slugify(displayName);

    console.log(`[${idx}] Downloading "${displayName}" → ${iconId}.json ...`);

    const downloadUrl = new URL(selected.url, API_BASE).href;
    const iconData = await fetchJSON(downloadUrl);

    const filePath = path.join(iconsDir, `${iconId}.json`);

    // Check for duplicate — prompt to overwrite
    if (fs.existsSync(filePath)) {
      const overwrite = await askQuestion(
        `  ⚠  ${iconId}.json already exists. Overwrite? (y/N): `
      );
      if (overwrite.toLowerCase() !== "y") {
        console.log(`  Skipped "${iconId}".`);
        continue;
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(iconData), "utf-8");
    console.log(`  Saved to src/icons/${iconId}.json`);
  }

  // ---------------------------------------------------------------
  // Step 4: regenerate the registry
  // ---------------------------------------------------------------
  console.log("");
  const generatorPath = path.resolve(__dirname, "generate-registry.js");
  execSync(`node "${generatorPath}"`, {
    stdio: "inherit",
    cwd: path.resolve(__dirname, ".."),
  });

  console.log(`\nDone! Added ${selectedIndices.length} icon(s) to the registry.`);
  console.log(`You can now use: <Icon id="..." />`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
