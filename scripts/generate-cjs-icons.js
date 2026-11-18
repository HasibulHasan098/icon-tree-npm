const fs = require("fs");
const path = require("path");

const names = JSON.parse(fs.readFileSync(path.resolve(__dirname, "icon-names.json"), "utf8"));
const output = path.resolve(__dirname, "../dist/icons");
fs.mkdirSync(output, { recursive: true });

for (const name of names) {
  const component = `const React = require("react");\nconst Icon = require("../index.js").Icon;\n\nfunction IconEntry(props) {\n  return React.createElement(Icon, { ...props, id: ${JSON.stringify(name)} });\n}\n\nmodule.exports = IconEntry;\nmodule.exports.default = IconEntry;\n`;
  fs.writeFileSync(path.join(output, `${name}.cjs`), component, "utf8");
}

console.log(`Generated ${names.length} CommonJS icon entry points.`);
