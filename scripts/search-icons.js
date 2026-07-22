#!/usr/bin/env node

/**
 * Usage:
 *   npx icontree search "<query>"
 *
 * Searches the IconTree API by name and shows matching icon IDs.
 * Supports multiple keywords — comma or space separated.
 *
 * Examples:
 *   npx icontree search "arrow"
 *   npx icontree search "arrow,icon,gg"
 *   npx icontree search "heart add"
 */

const https = require("https");

const API_BASE = "https://icontree.cosmoscope.workers.dev";

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(`Failed to parse response from API`));
          }
        });
      })
      .on("error", reject);
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args[0] !== "search" || args.length < 2) {
    console.error("Usage: npx icontree search \"<query>\"");
    console.error("");
    console.error("Examples:");
    console.error('  npx icontree search "arrow"');
    console.error('  npx icontree search "arrow right"');
    console.error('  npx icontree search "arrow,icon,gg"');
    process.exit(1);
  }

  // Split query by comma or space into individual keywords
  const raw = args.slice(1).join(" ");
  const keywords = raw
    .split(/[,]+/)
    .map((k) => k.trim())
    .filter(Boolean)
    .flatMap((k) => k.split(/\s+/))
    .filter(Boolean);

  const seen = new Set();
  const allResults = [];

  for (const keyword of keywords) {
    try {
      const data = await fetchJSON(
        `${API_BASE}/icon/search?q=${encodeURIComponent(keyword)}`
      );
      if (data.results) {
        for (const r of data.results) {
          const name = r.name || r.id;
          if (name && !seen.has(name)) {
            seen.add(name);
            allResults.push(name);
          }
        }
      }
    } catch {
      // skip failed keywords
    }
  }

  if (allResults.length === 0) {
    console.log(`No results for "${raw}"`);
    process.exit(0);
  }

  for (const name of allResults) {
    console.log(name);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
