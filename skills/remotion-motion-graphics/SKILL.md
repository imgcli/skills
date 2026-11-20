---
name: remotion-motion-graphics
description: Create a short title, data graphic, brand card or opener in Remotion with current Imgcli components.
---

# Short motion graphic

Choose one visual idea and give it enough time to read. A stat or chart needs real units and a source, not an invented growth claim.

## Choose current components

Check [the live component index](https://imgcli.com/llms-components.txt) or `npx @imgcli/cli list` before selecting scenes. Read the selected component's Markdown page at `https://imgcli.com/components/<name>.md` and its installed TypeScript interface.

- Type: `ink-sweep`, `focus-in`, `centered-build`, `statement-cuts`.
- Data: `number-up`, `bar-chart`, `line-climb`, `unit-chart`, `stat-grid`. Array lengths, labels and values must agree.
- Brand: `lockup-draw`, `color-flood`, `badge-card`.
- `dot-wipe` and `block-wipe` are full-canvas visual scenes. For reusable transitions between arbitrary children, use Remotion's transition package and verify overlap timing.

Verified example toolchain: Remotion 4.0.473 and TypeScript 5.9.3. Keep all @remotion/* packages on the same version; re-run compilation and rendering when using another toolchain.

## Project and installation

Use a Remotion TypeScript project with dependencies installed and a `src/` directory. If starting empty, run `npx create-video@latest` and choose the blank TypeScript template. Node.js 20.19+ is required.

The example loads Geist through `@remotion/google-fonts`. Install that package at the same exact version as the project's `remotion`; keep all `@remotion/*` versions aligned. No shadcn initialization, `components.json`, API key or import alias is needed for the current free components.

```bash
npx @imgcli/cli add number-up bar-chart lockup-draw
```

Run from the project root after `src/` exists. Files land in `src/components/imgcli/`, with dependencies and relative imports handled by the CLI. If there is no `src/`, the CLI installs under the project root instead; adapt the example's relative paths accordingly. Existing files with different contents are preserved: inspect the conflict instead of forcing an overwrite.

## Runnable example

Copy [examples/index.tsx](examples/index.tsx) to `src/index.tsx`. This entry includes its `Composition` registration: `MotionGraphic`, 348 frames at 30 fps, 1280 × 720 (11.6 seconds). Use the component in your existing Root instead if your project already has registrations.

Required media: `public/logo.svg`. The numeric values in the example are explicitly illustrative; replace them with sourced data for a real deliverable.

The example is a technical starting point, not customer evidence. Replace its name, copy, media, URLs and any illustrative data before publishing. Choose the user's language and aspect ratio, then inspect that actual layout; the landscape example is not a promise of automatic portrait reflow.

## Compile, inspect and render

```bash
npx tsc --noEmit
npx remotion still src/index.tsx MotionGraphic out/beat.png --frame=174
npx remotion render src/index.tsx MotionGraphic out/MotionGraphic.mp4 --codec=h264 --crf=18
```

Inspect a frame in every beat, both sides of cuts, the first fully readable frame and the final hold. Check all required media, line wrapping, logo geometry and audio/caption alignment where present. A successful render is not visual approval. Report what was rendered, which assets were fixtures, and any missing real inputs. Publishing or uploading needs the user's instruction.

## Attribution

Existing third-party acknowledgments remain in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); retain them when redistributing.
