// Lists every TODO left in the content files and the form slot.
// Run: npm run todos
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const roots = ["src/content", "src/components/sections/FormEmbed.tsx", "src/components/Logo.tsx"];
const files = [];

function walk(path) {
  if (statSync(path).isDirectory()) {
    for (const name of readdirSync(path)) walk(join(path, name));
  } else if (/\.(ts|tsx|md)$/.test(path)) {
    files.push(path);
  }
}
roots.forEach(walk);

let count = 0;
for (const file of files) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (line.includes("TODO")) {
        count++;
        console.log(`${relative(process.cwd(), file)}:${i + 1}  ${line.trim()}`);
      }
    });
}
console.log(`\n${count} TODO item(s) left.`);
