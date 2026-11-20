// Copyright (c) 2026 Ricky (Imgcli) <https://imgcli.com>
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = process.argv[2];
if (!input) throw new Error("Usage: node scripts/check.mjs <MCP catalog.json>");
const catalog = JSON.parse(readFileSync(path.resolve(input), "utf8"));
execFileSync(
  process.execPath,
  [path.join(root, "scripts/sync-catalog.mjs"), path.resolve(input), "--check"],
  { stdio: "inherit" },
);
const components = new Map(catalog.components.map((c) => [c.slug, c]));
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const skills = readdirSync(path.join(root, "skills")).filter((n) =>
  existsSync(path.join(root, "skills", n, "SKILL.md")),
);
assert.equal(skills.length, 7);
for (const skill of skills) {
  const dir = path.join(root, "skills", skill),
    doc = readFileSync(path.join(dir, "SKILL.md"), "utf8");
  assert(doc.startsWith("---\n") || doc.startsWith("---\r\n"));
  assert(doc.includes(`name: ${skill}`));
  const command = doc.match(/^npx @imgcli\/cli add ([a-z0-9 -]+)$/m);
  assert(command, `${skill} missing install command`);
  const installed = new Set(command[1].trim().split(/\s+/));
  for (const name of installed)
    assert(components.has(name), `${skill} unknown install: ${name}`);
  const source = readFileSync(path.join(dir, "examples/index.tsx"), "utf8");
  for (const m of source.matchAll(
    /import\s+\{\s*(\w+)\s*\}\s+from\s+"\.\/components\/imgcli\/([a-z0-9-]+)"/g,
  )) {
    assert(installed.has(m[2]), `${skill} missing install for ${m[2]}`);
    assert.equal(components.get(m[2]).exportName, m[1]);
  }
  assert(
    !source.includes("@/"),
    "Examples must not depend on the website alias",
  );
  const frames = Number(source.match(/DURATION_IN_FRAMES\s*=\s*(\d+)/)?.[1]);
  assert(frames > 0);
  const spans = [
    ...source.matchAll(
      /<Sequence\s+from=\{(\d+)\}\s+durationInFrames=\{(\d+)\}/g,
    ),
  ].map((m) => [Number(m[1]), Number(m[2])]);
  let end = 0;
  for (const [from, length] of spans) {
    assert.equal(from, end, `${skill} timeline gap/overlap`);
    end = from + length;
  }
  assert.equal(end, frames, `${skill} total duration`);
}
for (const file of [
  ...walk(path.join(root, "skills")),
  path.join(root, "rules/imgcli.mdc"),
]) {
  if (!/\.(md|mdc|tsx)$/.test(file)) continue;
  const text = readFileSync(file, "utf8");
  assert(
    !/npx shadcn@latest (?:add|init)/.test(text),
    `Old installer in ${file}`,
  );
  for (const m of text.matchAll(
    /https:\/\/imgcli\.com\/(?:r\/([a-z0-9-]+)\.json|components\/([a-z0-9-]+)\.md)/g,
  )) {
    assert(
      components.has(m[1] ?? m[2]) || (m[1] ?? m[2]) === "imgcli-ui",
      `Unknown component URL in ${file}`,
    );
  }
  if (!file.endsWith(".md")) continue;
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const href = m[1];
    if (/^(?:https?:|mailto:|#)/.test(href)) continue;
    assert(
      existsSync(
        path.resolve(
          path.dirname(file),
          decodeURIComponent(href.split("#")[0]),
        ),
      ),
      `Broken reference ${href} in ${file}`,
    );
  }
}
console.log(
  "Checked 7 Skill contracts, current install names/exports, complete timelines and local reference links.",
);
