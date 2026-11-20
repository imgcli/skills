// Copyright (c) 2026 Ricky (Imgcli) <https://imgcli.com>
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const flag = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i < 0 ? undefined : process.argv[i + 1];
};
const project = flag("project");
assert(
  project && path.isAbsolute(project),
  "Pass --project with an absolute disposable project path.",
);
const relative = path.relative(root, project);
assert(
  relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative),
  "Verification project must be outside the Skills repository.",
);
const resume = process.argv.includes("--resume");
if (existsSync(project) && readdirSync(project).length) {
  assert(
    resume &&
      existsSync(path.join(project, ".imgcli-skills-verification.json")),
    "Refusing a non-empty project. Use a new path, or --resume on a previous verification project.",
  );
}
mkdirSync(project, { recursive: true });
mkdirSync(path.join(project, "src"), { recursive: true });
mkdirSync(path.join(project, "public"), { recursive: true });
mkdirSync(path.join(project, "out"), { recursive: true });
writeFileSync(
  path.join(project, ".imgcli-skills-verification.json"),
  `${JSON.stringify({ repository: "imgcli/skills", version: 1 }, null, 2)}\n`,
);
const cliVersion = flag("cli-version") ?? "0.3.1";
const remotionVersion = flag("remotion-version") ?? "4.0.473";
for (const value of [cliVersion, remotionVersion])
  assert(
    /^(?:latest|\d+\.\d+\.\d+(?:-[\w.-]+)?)$/.test(value),
    "Invalid package version",
  );
function run(command, args, options = {}) {
  console.log(">", command, ...args);
  const result = spawnSync(command, args, {
    cwd: project,
    stdio: "inherit",
    ...options,
  });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, `${command} failed`);
}
const npm = (args) =>
  run(process.platform === "win32" ? "npm.cmd" : "npm", args, {
    shell: process.platform === "win32",
  });
if (
  !resume ||
  !existsSync(path.join(project, "node_modules/remotion/package.json"))
) {
  writeFileSync(
    path.join(project, "package.json"),
    `${JSON.stringify(
      {
        name: "imgcli-skills-verification",
        version: "1.0.0",
        private: true,
        type: "module",
      },
      null,
      2,
    )}\n`,
  );
  npm([
    "install",
    "--save-exact",
    "--no-audit",
    "--no-fund",
    ...[
      "remotion",
      "@remotion/cli",
      "@remotion/renderer",
      "@remotion/bundler",
      "@remotion/google-fonts",
    ].map((p) => `${p}@${remotionVersion}`),
    "react",
    "react-dom",
    `@imgcli/cli@${cliVersion}`,
  ]);
  npm([
    "install",
    "--save-dev",
    "--save-exact",
    "--no-audit",
    "--no-fund",
    "typescript@5.9.3",
    "@types/react",
    "@types/react-dom",
    "@types/node",
  ]);
}
const require = createRequire(path.join(project, "package.json"));
const cli = require.resolve("@imgcli/cli/src/cli.mjs");
const installedCliVersion = require("@imgcli/cli/package.json").version;
if (cliVersion !== "latest") assert.equal(installedCliVersion, cliVersion);
const remotion = require("remotion/package.json").version;
for (const pkg of [
  "@remotion/cli",
  "@remotion/renderer",
  "@remotion/bundler",
  "@remotion/google-fonts",
])
  assert.equal(require(`${pkg}/package.json`).version, remotion);
const workflows = readdirSync(path.join(root, "skills")).filter((s) =>
  existsSync(path.join(root, "skills", s, "examples/index.tsx")),
);
assert.equal(workflows.length, 7);
const specs = [];
for (const skill of workflows) {
  const doc = readFileSync(
    path.join(root, "skills", skill, "SKILL.md"),
    "utf8",
  );
  const names = doc
    .match(/^npx @imgcli\/cli add ([a-z0-9 -]+)$/m)?.[1]
    .trim()
    .split(/\s+/);
  assert(names?.length, `${skill} install command`);
  run(process.execPath, [cli, "add", ...names]);
  const source = readFileSync(
    path.join(root, "skills", skill, "examples/index.tsx"),
    "utf8",
  );
  const entry = path.join(project, "src", `${skill}.tsx`);
  writeFileSync(entry, source);
  const id = source.match(/<Composition\s+id="(\w+)"/)?.[1];
  assert(id);
  const frames = Number(source.match(/DURATION_IN_FRAMES\s*=\s*(\d+)/)?.[1]);
  const beats = [
    ...source.matchAll(
      /<Sequence\s+from=\{(\d+)\}\s+durationInFrames=\{(\d+)\}/g,
    ),
  ].map((m) => ({ from: Number(m[1]), length: Number(m[2]) }));
  specs.push({
    skill,
    entry,
    id,
    frames,
    beats,
    sha256: createHash("sha256")
      .update(source.replaceAll("\r\n", "\n"))
      .digest("hex"),
  });
}
// Also verify the rest of the current free catalog and every minimal reference example.
run(process.execPath, [cli, "add", "--all"]);
for (const file of readdirSync(
  path.join(root, "skills/imgcli/references/components"),
)) {
  const text = readFileSync(
    path.join(root, "skills/imgcli/references/components", file),
    "utf8",
  ).replaceAll("\r\n", "\n");
  const jsx = text.match(/```tsx\n([\s\S]*?)```/)?.[1];
  if (jsx)
    writeFileSync(
      path.join(project, "src", `reference-${file.replace(".md", ".tsx")}`),
      jsx,
    );
}
writeFileSync(
  path.join(project, "tsconfig.json"),
  `${JSON.stringify(
    {
      compilerOptions: {
        target: "ES2022",
        lib: ["ES2022", "DOM"],
        module: "ESNext",
        moduleResolution: "Bundler",
        jsx: "react-jsx",
        strict: true,
        skipLibCheck: true,
        esModuleInterop: true,
        noEmit: true,
      },
      include: ["src/**/*.ts", "src/**/*.tsx"],
    },
    null,
    2,
  )}\n`,
);
const typescriptRoot = path.join(project, "node_modules/typescript");
const typescript = JSON.parse(
  readFileSync(path.join(typescriptRoot, "package.json"), "utf8"),
);
run(process.execPath, [
  path.join(typescriptRoot, typescript.bin.tsc),
  "--noEmit",
]);

const desktop = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="#faf9f6"/><rect width="170" height="500" fill="white"/><g font-family="Arial" fill="#141414"><text x="24" y="45" font-size="24">Acme</text><text x="210" y="70" font-size="30">Project review</text><text x="210" y="125" font-size="18">A fictional interface for integration tests</text><text x="210" y="205" font-size="22">Design complete</text><text x="210" y="275" font-size="22">Ready to share</text></g><rect x="210" y="330" width="260" height="65" rx="8" fill="#3072db"/><text x="250" y="371" font-family="Arial" font-size="22" fill="white">Review project</text></svg>`;
writeFileSync(path.join(project, "public/screenshot.svg"), desktop);
writeFileSync(
  path.join(project, "public/logo.svg"),
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M50 8 94 86H6Z" fill="#3072db"/><circle cx="50" cy="60" r="12" fill="white"/></svg>',
);
for (const [file, title, button] of [
  ["home", "Projects", "Open project"],
  ["tasks", "Tasks", "Review update"],
  ["done", "All set", "Done"],
])
  writeFileSync(
    path.join(project, `public/mobile-${file}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844"><rect width="390" height="844" fill="#faf9f6"/><g font-family="Arial" fill="#141414"><text x="28" y="85" font-size="30">${title}</text><text x="28" y="150" font-size="18">Example project</text><text x="28" y="220" font-size="18">Integration test fixture</text></g><rect x="65" y="590" width="260" height="84" rx="12" fill="#3072db"/><text x="195" y="639" text-anchor="middle" font-size="22" fill="white" font-family="Arial">${button}</text></svg>`,
  );
const samples = 16000 * 30;
const wav = Buffer.alloc(44 + samples * 2);
wav.write("RIFF");
wav.writeUInt32LE(wav.length - 8, 4);
wav.write("WAVEfmt ", 8);
wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20);
wav.writeUInt16LE(1, 22);
wav.writeUInt32LE(16000, 24);
wav.writeUInt32LE(32000, 28);
wav.writeUInt16LE(2, 32);
wav.writeUInt16LE(16, 34);
wav.write("data", 36);
wav.writeUInt32LE(samples * 2, 40);
// Audible cue markers are explicitly test audio, never represented as a voiceover.
for (let i = 0; i < samples; i++) {
  const t = i / 16000;
  const cue = [0, 6, 14, 22].find((start) => t >= start && t < start + 0.12);
  if (cue !== undefined) {
    const p = (t - cue) / 0.12;
    wav.writeInt16LE(
      Math.round(
        Math.sin(t * 2 * Math.PI * 440) * 6000 * Math.sin(p * Math.PI),
      ),
      44 + i * 2,
    );
  }
}
writeFileSync(path.join(project, "public/voiceover.wav"), wav);
const mediaDir = flag("media-dir");
if (mediaDir)
  for (const name of readdirSync(path.resolve(mediaDir))) {
    const file = path.resolve(mediaDir, name);
    if (statSync(file).isFile())
      copyFileSync(file, path.join(project, "public", name));
  }
const { bundle } = await import(
  pathToFileURL(require.resolve("@remotion/bundler")).href
);
const { ensureBrowser, selectComposition, renderStill, renderMedia } =
  await import(pathToFileURL(require.resolve("@remotion/renderer")).href);
await ensureBrowser();
// Keep verification isolated from application dev servers on port 3000.
const renderPort = 43127;
const fixture = path.join(project, "src/fixture.tsx");
writeFileSync(
  fixture,
  `import {Composition,registerRoot,AbsoluteFill,Img,staticFile,useCurrentFrame} from 'remotion';const Scene=()=>{const f=useCurrentFrame();return <AbsoluteFill><Img src={staticFile('screenshot.svg')} style={{width:'100%',height:'100%'}}/><div style={{position:'absolute',bottom:32,left:210,width:Math.min(260,f*3),height:8,background:'#3072db'}}/></AbsoluteFill>};registerRoot(()=> <Composition id="Fixture" component={Scene} width={800} height={500} fps={30} durationInFrames={120}/>);`,
);
if (!existsSync(path.join(project, "public/recording.mp4"))) {
  const serveUrl = await bundle({
    entryPoint: fixture,
    publicDir: path.join(project, "public"),
    enableCaching: false,
  });
  const composition = await selectComposition({
    serveUrl,
    id: "Fixture",
    port: renderPort,
  });
  await renderMedia({
    serveUrl,
    port: renderPort,
    composition,
    codec: "h264",
    crf: 20,
    outputLocation: path.join(project, "public/recording.mp4"),
    concurrency: 2,
    logLevel: "error",
  });
}
const only = flag("only")?.split(",");
if (only)
  for (const name of only)
    assert(
      specs.some((s) => s.skill === name),
      `Unknown workflow: ${name}`,
    );
const receiptPath = path.join(project, "out/receipts.json");
const receipts =
  only && resume && existsSync(receiptPath)
    ? JSON.parse(readFileSync(receiptPath, "utf8")).workflows.filter(
        (item) => !only.includes(item.skill),
      )
    : [];
for (const spec of specs.filter((s) => !only || only.includes(s.skill))) {
  console.log("Rendering", spec.skill);
  const serveUrl = await bundle({
    entryPoint: spec.entry,
    publicDir: path.join(project, "public"),
    enableCaching: false,
  });
  const composition = await selectComposition({
    serveUrl,
    id: spec.id,
    port: renderPort,
  });
  assert.equal(composition.durationInFrames, spec.frames);
  assert.equal(composition.fps, 30);
  const folder = path.join(project, "out", spec.skill);
  mkdirSync(folder, { recursive: true });
  const frames = new Set([spec.frames - 1]);
  for (const beat of spec.beats) {
    for (const position of [0.2, 0.5, 0.8])
      frames.add(beat.from + Math.floor(beat.length * position));
    if (beat.from) {
      frames.add(beat.from - 1);
      frames.add(beat.from);
    }
  }
  for (const frame of [...frames].sort((a, b) => a - b))
    await renderStill({
      serveUrl,
      port: renderPort,
      composition,
      frame,
      output: path.join(folder, `${frame}.png`),
      logLevel: "error",
    });
  const video = path.join(folder, `${spec.id}.mp4`);
  await renderMedia({
    serveUrl,
    port: renderPort,
    composition,
    codec: "h264",
    crf: 20,
    pixelFormat: "yuv420p",
    outputLocation: video,
    concurrency: 2,
    logLevel: "error",
  });
  assert(statSync(video).size > 1000);
  receipts.push({
    ...spec,
    video,
    bytes: statSync(video).size,
    width: composition.width,
    height: composition.height,
    fps: composition.fps,
    renderedFrames: [...frames],
  });
  writeFileSync(
    path.join(project, "out/receipts.json"),
    `${JSON.stringify(
      {
        remotion,
        cliVersion: installedCliVersion,
        typescript: typescript.version,
        mediaFixtures:
          mediaDir ?? "generated synthetic interface and audio cue markers",
        workflows: receipts,
      },
      null,
      2,
    )}\n`,
  );
}
console.log(
  `Passed: published CLI installation, all current component/reference types, ${receipts.length} workflow renders and per-beat stills. Receipts:`,
  path.join(project, "out/receipts.json"),
);
