import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  "/",
  "/services",
  "/work",
  "/solutions",
  "/pricing",
  "/about",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/accessibility",
  "/security",
];

const distDir = path.join(__dirname, "dist");
const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const { render } = await import(
  pathToFileURL(path.join(__dirname, "dist-ssr", "entry-server.js")).href
);

for (const url of routes) {
  const appHtml = render(url);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  const outPath =
    url === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, url.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`prerendered: ${url} -> ${path.relative(distDir, outPath)}`);
}

fs.rmSync(path.join(__dirname, "dist-ssr"), { recursive: true, force: true });