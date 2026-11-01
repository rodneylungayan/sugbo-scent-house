// Checks the image slots in public/images: required files exist, nothing is too big,
// and any photos dropped in have the right shape. Run: npm run check:assets
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const required = ["public/images/logo/logo.svg"];
const MAX_BYTES = 400 * 1024; // keep photos under ~400 KB (WebP)
// Optional slots: folder → expected width/height ratio
const slots = { hero: 16 / 9, products: 4 / 5, collections: 4 / 5, "og-default": 1200 / 630 };

let problems = 0;
const warn = (msg) => {
  problems++;
  console.warn(`⚠ ${msg}`);
};

for (const file of required) {
  if (!existsSync(file)) warn(`Missing required file: ${file}`);
}

function pngSize(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function webpSize(buf) {
  if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;
  const chunk = buf.toString("ascii", 12, 16);
  if (chunk === "VP8X") return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
  if (chunk === "VP8 ") return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
  return null;
}

for (const [slot, ratio] of Object.entries(slots)) {
  const dir = join("public/images", slot);
  if (!existsSync(dir)) continue;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const bytes = statSync(path).size;
    if (bytes > MAX_BYTES) warn(`${path} is ${Math.round(bytes / 1024)} KB (aim for under ${MAX_BYTES / 1024} KB).`);
    const buf = readFileSync(path);
    const size = pngSize(buf) ?? webpSize(buf);
    if (size && Math.abs(size.w / size.h - ratio) > 0.03) {
      warn(`${path} is ${size.w}×${size.h}; this slot expects a ${ratio.toFixed(2)} ratio.`);
    }
  }
}

console.log(problems ? `\n${problems} asset warning(s).` : "✓ Assets look good.");
process.exitCode = 0;
