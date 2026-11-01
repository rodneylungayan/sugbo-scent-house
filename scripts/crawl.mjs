// Link crawl for the running production build (npm run build && npm start).
// Checks: every page in the sitemap returns 200, every internal link works,
// every #anchor exists, no page is an orphan, titles/descriptions are unique.
// Run: node scripts/crawl.mjs http://localhost:3000
const base = process.argv[2] ?? "http://localhost:3000";
const origin = new URL(base).origin;

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const sitemapPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const pages = new Map(); // path → { status, ids, links, title, description, robots }
const queue = ["/", ...sitemapPaths];
const inbound = new Map();

while (queue.length) {
  const path = queue.shift();
  if (pages.has(path)) continue;
  const res = await fetch(origin + path, { redirect: "manual" });
  const html = res.status === 200 ? await res.text() : "";
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const links = [...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";
  pages.set(path, { status: res.status, ids, links, title, description, robots });

  for (const href of links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const target = href.split("#")[0] || path;
    if (target !== path) inbound.set(target, (inbound.get(target) ?? 0) + 1);
    if (!pages.has(target)) queue.push(target);
  }
}

let errors = 0;
const fail = (msg) => {
  errors++;
  console.log(`✗ ${msg}`);
};

for (const [path, page] of pages) {
  if (page.status !== 200) fail(`${path} returned ${page.status}`);
  for (const href of page.links) {
    if (!href.startsWith("/") || !href.includes("#")) continue;
    const [target, hash] = href.split("#");
    const targetPage = pages.get(target || path);
    if (hash && hash !== "top" && targetPage && !targetPage.ids.has(hash)) fail(`${path} links to ${href} but #${hash} doesn't exist`);
  }
}

for (const path of sitemapPaths) {
  if (path !== "/" && !inbound.get(path)) fail(`${path} is an orphan (no internal links point to it)`);
}

const dupes = (key) => {
  const seen = new Map();
  for (const [path, page] of pages) {
    if (page.status !== 200 || !page[key]) continue;
    if (seen.has(page[key])) fail(`Duplicate ${key}: ${seen.get(page[key])} and ${path}`);
    else seen.set(page[key], path);
  }
};
dupes("title");
dupes("description");

console.log(`\nCrawled ${pages.size} URLs, ${sitemapPaths.length} in the sitemap.`);
console.log("Incoming internal links (top pages):");
[...inbound.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8)
  .forEach(([p, n]) => console.log(`  ${String(n).padStart(4)}  ${p}`));
console.log(`Robots on home: "${pages.get("/")?.robots}"`);
console.log(errors ? `\n${errors} problem(s) found.` : "\n✓ No broken links, missing anchors, orphans or duplicate titles.");
process.exitCode = errors ? 1 : 0;
