---
name: remotion-product-demo
description: Create a Remotion product walkthrough from real screenshots or recordings using current Imgcli device and workflow scenes.
---

# Product demo video

Show one real task from input to result. Treat the supplied recording or screenshots as the source of truth.

## Choose current components

Check [the live component index](https://imgcli.com/llms-components.txt) or `npx @imgcli/cli list` before selecting scenes. Read the selected component's Markdown page at `https://imgcli.com/components/<name>.md` and its installed TypeScript interface.

- `laptop-lid` accepts `screen={{src,kind:"video"}}`; it does not provide a programmable camera or cursor path. Trim the recording to its beat.
- `phone-flow` accepts screenshot steps with optional fractional `tap` coordinates and captions. Aim taps at the actual controls after any crop.
- `phone-feature` can scroll a tall screenshot; set its actual width/height `aspect`.
- `code-edit` displays a source edit and preview, not a terminal recording. Use actual recorded footage for terminal behavior.
- `chat-reply`, `agent-connect`, `run-log` and `checklist-run` are editable simulations. Match them to the real UI or label them as illustrations. Do not present generated labels as captured product behavior.

Verified example toolchain: Remotion 4.0.473 and TypeScript 5.9.3. Keep all @remotion/* packages on the same version; re-run compilation and rendering when using another toolchain.

## Project and installation

Use a Remotion TypeScript project with dependencies installed and a `src/` directory. If starting empty, run `npx create-video@latest` and choose the blank TypeScript template. Node.js 20.19+ is required.

The example loads Geist through `@remotion/google-fonts`. Install that package at the same exact version as the project's `remotion`; keep all `@remotion/*` versions aligned. No shadcn initialization, `components.json`, API key or import alias is needed for the current free components.

```bash
npx @imgcli/cli add code-edit laptop-lid phone-flow lockup-draw
```

Run from the project root after `src/` exists. Files land in `src/components/imgcli/`, with dependencies and relative imports handled by the CLI. If there is no `src/`, the CLI installs under the project root instead; adapt the example's relative paths accordingly. Existing files with different contents are preserved: inspect the conflict instead of forcing an overwrite.

## Runnable example

Copy [examples/index.tsx](examples/index.tsx) to `src/index.tsx`. This entry includes its `Composition` registration: `ProductDemo`, 546 frames at 30 fps, 1280 × 720 (18.2 seconds). Use the component in your existing Root instead if your project already has registrations.

Required media: `public/recording.mp4` (at least four seconds for the example), `public/mobile-home.svg`, `public/mobile-tasks.svg`, `public/mobile-done.svg` (390 × 844 captures), and `public/logo.svg`.

The example is a technical starting point, not customer evidence. Replace its name, copy, media, URLs and any illustrative data before publishing. Choose the user's language and aspect ratio, then inspect that actual layout; the landscape example is not a promise of automatic portrait reflow.

## Compile, inspect and render

```bash
npx tsc --noEmit
npx remotion still src/index.tsx ProductDemo out/beat.png --frame=273
npx remotion render src/index.tsx ProductDemo out/ProductDemo.mp4 --codec=h264 --crf=18
```

Inspect a frame in every beat, both sides of cuts, the first fully readable frame and the final hold. Check all required media, line wrapping, logo geometry and audio/caption alignment where present. A successful render is not visual approval. Report what was rendered, which assets were fixtures, and any missing real inputs. Publishing or uploading needs the user's instruction.

## Attribution

Existing third-party acknowledgments remain in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); retain them when redistributing.
