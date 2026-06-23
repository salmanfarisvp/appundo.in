/**
 * Workaround for shadcn CLI 4.11.0 SVG-string corruption bug.
 *
 * The CLI mangles consecutive numeric tokens inside string literals
 * (e.g. viewBox="0 0 24 24" becomes "0 24", and SVG path data loses
 * runs of "0 0"). We bypass that by fetching the registry JSON directly
 * and writing the `content` field verbatim.
 *
 * Run: node scripts/install-icons.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const ICONS = [
  // existing
  "github-icon",
  "external-link-icon",
  "magnifier-icon",
  "x-icon",
  "moon-icon",
  "brightness-down-icon",
  "send-icon",
  "plug-connected-icon",
  "cloud-2-icon",
  "gear-icon",
  "party-popper-icon",
  "file-description-icon",
  "truck-electric-icon",
  "ambulance-icon",
  "book-icon",
  "users-group-icon",
  "user-check-icon",
  "library-icon",
  "sparkles-icon",
  "heart-icon",
  "home-icon",
  "triangle-alert-icon",
  "link-icon",
  // new for per-app icons
  "gauge-icon",
  "mail-filled-icon",
  "radio-icon",
  "flame-icon",
  "clock-icon",
  "hand-heart-icon",
  "globe-icon",
  "coffee-icon",
  "rocket-icon",
  "map-pin-icon",
  "cart-icon",
  "wifi-icon",
  "trash-icon",
  "focus-icon",
  "locate-icon",
  "gamepad-icon",
  "telephone-icon",
];

const REGISTRY = "https://itshover.com/r";

async function fetchIcon(name) {
  const res = await fetch(`${REGISTRY}/${name}.json`, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${name}: HTTP ${res.status}`);
  }
  return res.json();
}

async function writeRegistryFile(file) {
  // Path inside the registry uses "icons/<name>.tsx"; we drop the
  // leading folder and place files under components/ui/.
  const filename = file.path.split("/").pop();
  const target = resolve(projectRoot, "components", "ui", filename);
  await mkdir(dirname(target), { recursive: true });

  // Icons rely on motion/react hooks (useAnimate, useImperativeHandle),
  // which are client-only. Prepend "use client" so they can be imported
  // from server components without breaking SSR.
  let content = file.content;
  if (filename.endsWith(".tsx") && !content.startsWith('"use client"')) {
    content = `"use client";\n\n${content}`;
  }

  await writeFile(target, content, "utf8");
  console.log(`  wrote ${target.replace(projectRoot + "\\", "")}`);
}

for (const name of ICONS) {
  console.log(`Installing ${name}...`);
  const item = await fetchIcon(name);
  for (const file of item.files) {
    await writeRegistryFile(file);
  }
}

console.log("Done.");
