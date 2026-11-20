---
name: imgcli
description: Select, install and compose current Imgcli components in Remotion, including title scenes, device shots, charts, AI workflow scenes and timeline UI primitives. Use for Imgcli component work and video assembly.
---

# Imgcli for Remotion

Imgcli installs editable component source with `@imgcli/cli`. Current motion scenes are free under MIT; video-template rights are separate. Use an existing Remotion TypeScript project with Node.js 20.19+ and installed dependencies. For a new project, run `npx create-video@latest` and choose the blank TypeScript template.

## Discover before installing

- Run `npx @imgcli/cli list` or check [the live index](https://imgcli.com/llms-components.txt).
- [references/components/index.md](references/components/index.md) routes to a reference for each current component. Read only candidates for the user's beat. The references are a versioned snapshot; if a name is absent from the live list, refresh the reference before proceeding.
- Fetch `https://imgcli.com/components/<name>.md` and inspect the installed interface for nested props and timing helpers. A similarly named scene need not share an old API.

Verified example toolchain: Remotion 4.0.473 and TypeScript 5.9.3. Keep all @remotion/* packages on the same version; re-run compilation and rendering when using another toolchain.

## Install

```bash
npx @imgcli/cli add statement-cuts input laptop-lid
```

Run at the project root. Create `src/` first to install into `src/components/imgcli/`; without it, the destination is `components/imgcli/`. The CLI installs dependencies, rewrites imports to relative paths and preserves existing files with different content. No `components.json`, shadcn initialization, `@/` alias or API key is required. `npx @imgcli/cli add --all` installs the current free list when that is actually useful.

Copy [examples/index.tsx](examples/index.tsx) to `src/index.tsx` for a registered `ComponentDemo`: 354 frames at 30 fps, 1280 × 720. It needs `public/screenshot.svg` (16:10). Load `@remotion/google-fonts` at the same exact version as `remotion`, as in the example.

## Compose accurately

- Scenes have their own backgrounds and usually accept `theme`, `mode`, `accentColor` and `speed`. Read the specific API; do not assume `color`, `className`, transparent roots or a shared `text` prop.
- `input` and `caret` are primitives. They are frame-driven through states/styles and do not have a scene `speed` prop. Their four-second gallery preview is not a required composition duration.
- The default preview budget is listed in each component reference. A default length at 30 fps is not a universal frame count: recalculate for another fps, more text, longer arrays or changed timing props. Validate the completion frame.
- Sequence frames are local to each `Sequence`. Sum lengths for hard cuts; subtract transition overlaps when using Remotion's `TransitionSeries`. `dot-wipe` and `block-wipe` are standalone scenes, not that transition API.
- Media the user supplies belongs in `public/` and loads through `staticFile()`. Bundled sample screens are technical defaults, not the user's product. Use their actual screenshots or recordings in a final video.
- The current catalog has no terminal-recorder, programmable camera/cursor wrapper, or caption scene. Use real footage, ordinary Remotion composition or an available dedicated tool for those needs rather than inventing components.

## Guides and workflows

[Anatomy](references/anatomy.md) covers story and timing; [archetypes](references/archetypes/index.md) route by task. Read [design](references/design.md), [motion principles](references/motion-principles.md) and [anti-patterns](references/anti-patterns.md) when making corresponding decisions.

When installed, use `remotion-launch-video`, `remotion-product-demo`, `remotion-motion-graphics`, `remotion-kinetic-typography`, `remotion-logo-animation` or `remotion-explainer-video` for a complete workflow. Each also has a standalone runnable example.

## Verify the actual output

```bash
npx tsc --noEmit
npx remotion still src/index.tsx ComponentDemo out/frame.png --frame=300
npx remotion render src/index.tsx ComponentDemo out/demo.mp4 --codec=h264 --crf=18
```

Inspect every beat and its ending, check text and marks at delivery size, and watch the encoded file. Report installation, type checking, render completion and visual review separately. Do not publish or send the result without the user's instruction.
