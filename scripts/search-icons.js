#!/usr/bin/env node

/**
 * Usage:
 *   npx icontree search "<query>"
 *
 * Searches the IconTree API by name and shows matching icon IDs.
 * Handles multi-word queries (e.g. "arrow right" → arrow-right).
 *
 * Examples:
 *   npx icontree search "arrow"
 *   npx icontree search "arrow right"
 *   npx icontree search "heart"
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
    console.error('  npx icontree search "heart add"');
    process.exit(1);
  }

  const query = args.slice(1).join(" ");

  const data = await fetchJSON(
    `${API_BASE}/icon/search?q=${encodeURIComponent(query)}`
  );

  if (!data.results || data.results.length === 0) {
    console.log(`No results found for "${query}"`);
    process.exit(0);
  }

  for (const r of data.results) {
    const name = r.name || r.id || "unknown";
    console.log(`{${name}, icon}`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
