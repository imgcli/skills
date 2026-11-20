---
name: remotion-launch-video
description: Create a product launch or feature announcement in Remotion using current Imgcli scenes and the Imgcli CLI.
---

# Product launch video

Turn a launch brief into a short story: problem, product, real product view, and a clear destination.

## Choose current components

Check [the live component index](https://imgcli.com/llms-components.txt) or `npx @imgcli/cli list` before selecting scenes. Read the selected component's Markdown page at `https://imgcli.com/components/<name>.md` and its installed TypeScript interface.

- Use `centered-build` or `statement-cuts` for the hook; `version-roll` names a real release.
- Show the actual product with `laptop-lid`, `phone-feature` or `device-trio`. Keep its labels and claims accurate.
- Close with `lockup-draw` or `color-flood`. Use the supplied logo; a stock mark is not the customer's brand.
- Only add `number-up` or `stat-grid` when the brief provides a verifiable metric.

Verified example toolchain: Remotion 4.0.473 and TypeScript 5.9.3. Keep all @remotion/* packages on the same version; re-run compilation and rendering when using another toolchain.

## Project and installation

Use a Remotion TypeScript project with dependencies installed and a `src/` directory. If starting empty, run `npx create-video@latest` and choose the blank TypeScript template. Node.js 20.19+ is required.

The example loads Geist through `@remotion/google-fonts`. Install that package at the same exact version as the project's `remotion`; keep all `@remotion/*` versions aligned. No shadcn initialization, `components.json`, API key or import alias is needed for the current free components.

```bash
npx @imgcli/cli add centered-build version-roll laptop-lid lockup-draw
```

Run from the project root after `src/` exists. Files land in `src/components/imgcli/`, with dependencies and relative imports handled by the CLI. If there is no `src/`, the CLI installs under the project root instead; adapt the example's relative paths accordingly. Existing files with different contents are preserved: inspect the conflict instead of forcing an overwrite.

## Runnable example

Copy [examples/index.tsx](examples/index.tsx) to `src/index.tsx`. This entry includes its `Composition` registration: `LaunchVideo`, 441 frames at 30 fps, 1280 × 720 (14.7 seconds). Use the component in your existing Root instead if your project already has registrations.

Required media: `public/screenshot.svg` (a 16:10 product capture) and `public/logo.svg`.

The example is a technical starting point, not customer evidence. Replace its name, copy, media, URLs and any illustrative data before publishing. Choose the user's language and aspect ratio, then inspect that actual layout; the landscape example is not a promise of automatic portrait reflow.

## Compile, inspect and render

```bash
npx tsc --noEmit
npx remotion still src/index.tsx LaunchVideo out/beat.png --frame=220
npx remotion render src/index.tsx LaunchVideo out/LaunchVideo.mp4 --codec=h264 --crf=18
```

Inspect a frame in every beat, both sides of cuts, the first fully readable frame and the final hold. Check all required media, line wrapping, logo geometry and audio/caption alignment where present. A successful render is not visual approval. Report what was rendered, which assets were fixtures, and any missing real inputs. Publishing or uploading needs the user's instruction.

## Attribution

Existing third-party acknowledgments remain in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); retain them when redistributing.
