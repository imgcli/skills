// Copyright (c) 2026 Ricky (Imgcli) <https://imgcli.com>
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  mkdirSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = process.argv[2];
if (!source)
  throw new Error(
    "Usage: node scripts/sync-catalog.mjs <MCP catalog.json> [--check]",
  );
const catalog = JSON.parse(readFileSync(path.resolve(source), "utf8"));
assert.equal(catalog.schemaVersion, 1);
assert.equal(
  createHash("sha256")
    .update(JSON.stringify(catalog.components))
    .digest("hex")
    .slice(0, 16),
  catalog.revision,
);
const folder = path.join(root, "skills/imgcli/references/components");
mkdirSync(folder, { recursive: true });
const expected = new Map();
const cell = (s) =>
  String(s ?? "—")
    .replaceAll("|", "\\|")
    .replace(/\s*\n\s*/g, " ");
const categories = new Map();
for (const c of catalog.components) {
  assert.equal(c.tier, "free");
  const props = c.props
    .map(
      (p) =>
        `| \`${p.name}${p.required ? "" : "?"}\` | \`${cell(p.type)}\` | ${p.defaultExpression ? `\`${cell(p.defaultExpression)}\`` : "—"} |`,
    )
    .join("\n");
  const file = `${c.slug}.md`;
  expected.set(
    file,
    `# ${c.title}\n\n${c.description}\n\n- Install: \`npx @imgcli/cli add ${c.slug}\`\n- Export: \`${c.exportName}\`\n- Default preview: ${c.preview.durationInFrames} frames at ${c.preview.fps} fps, ${c.preview.width} × ${c.preview.height}. This is a default preview budget, not a duration guarantee for arbitrary props.\n- [Current documentation](https://imgcli.com${c.docsPath}.md)\n- Catalog revision: \`${catalog.revision}\`; source: \`${c.sourceHash}\`.\n\n## Usage\n\nFrom a file in \`src/\` after installing into a project with a \`src/\` directory:\n\n\`\`\`tsx\nimport { ${c.exportName} } from "./components/imgcli/${c.slug}";\n\nexport const Example = () => <${c.exportName} />;\n\`\`\`\n\nThe component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no \`@/\` alias or \`components.json\` is required.\n\n## Props\n\n| Prop | Type | Default expression |\n| --- | --- | --- |\n${props}\n\nDefault expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.\n`,
  );
  if (c.slug === "statement-cuts") {
    expected.set(
      file,
      `${expected.get(file)}\n## Text fit\n\nThe closer (lineThree) is rendered at 2.3 times fontSize. Use one or two short words, or reduce fontSize and inspect the result. It does not auto-fit long sentences. Check all three statements, not only the final composition frame.\n`,
    );
  }
  if (c.slug === "color-flood") {
    expected.set(
      file,
      `${expected.get(file)}\n## Logo contrast\n\nA supplied logo image keeps its original colors. Choose a contrasting accentColor for the field, or use a supplied logo variant intended for that field. A blue mark on the same blue field can disappear even though the file renders successfully.\n`,
    );
  }
  if (!categories.has(c.category)) categories.set(c.category, []);
  categories.get(c.category).push(c);
}
let index = `# Current component index\n\nGenerated from public MCP catalog revision \`${catalog.revision}\`. ${catalog.components.length} installable free components (40 scenes plus Input and Caret). All ship under MIT. Check \`npx @imgcli/cli list\` and the [live index](https://imgcli.com/llms-components.txt) before installing; refresh a stale reference rather than guessing a renamed API.\n\nScene previews use 30 fps. For another fps, keep seconds constant and recalculate frame counts. Input and Caret are timeline primitives, not full scenes. The shared [imgcli-ui core](imgcli-ui.md) is installed transitively.\n`;
for (const [category, items] of categories) {
  index += `\n## ${category}\n\n| Component | Default frames | Use for |\n| --- | --- | --- |\n`;
  for (const c of items)
    index += `| [${c.slug}](${c.slug}.md) | ${c.preview.durationInFrames} @ ${c.preview.fps} fps | ${cell(c.description)} |\n`;
}
expected.set("index.md", index);
expected.set(
  "imgcli-ui.md",
  `# Shared Imgcli core\n\nInstalled automatically by components that need themes, fonts, color utilities or timeline styles. It is a dependency, not an additional scene in \`npx @imgcli/cli list\`. Install a scene or primitive, then follow its actual relative imports if composing a shared provider.\n\nScenes generally accept \`theme\`, \`mode\` and \`accentColor\`; Input uses \`theme\` and \`primary\`, while Caret accepts \`color\`. Read the per-component API rather than applying one prop set everywhere. Font names are labels; load the chosen font in the Remotion entry.\n`,
);
const check = process.argv.includes("--check");
for (const [file, content] of expected) {
  const target = path.join(folder, file);
  if (check)
    assert.equal(
      readFileSync(target, "utf8").replaceAll("\r\n", "\n"),
      content,
      `Stale reference: ${file}`,
    );
  else writeFileSync(target, content);
}
for (const file of readdirSync(folder)) {
  if (file.endsWith(".md") && !expected.has(file)) {
    if (check) throw new Error(`Retired component reference: ${file}`);
    unlinkSync(path.join(folder, file));
  }
}
console.log(
  `${check ? "Checked" : "Updated"} ${catalog.components.length} component references, revision ${catalog.revision}.`,
);
