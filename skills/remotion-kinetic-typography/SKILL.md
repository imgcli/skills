---
name: remotion-kinetic-typography
description: Animate headlines, word changes and title sequences in Remotion using current Imgcli text scenes.
---

# Kinetic typography

Choose a scene whose motion expresses the sentence. Keep the script short enough for the chosen canvas.

## Choose current components

Check [the live component index](https://imgcli.com/llms-components.txt) or `npx @imgcli/cli list` before selecting scenes. Read the selected component's Markdown page at `https://imgcli.com/components/<name>.md` and its installed TypeScript interface.

- `centered-build`: assemble an emphasized statement; `statement-cuts`: three deliberate lines. Its closer uses 2.3× type size: keep it to one or two short words, or reduce `fontSize` and inspect all three lines.
- `strike-swap`: replace an ending; `prompt-rewrite`: revise a phrase inside an input.
- `slot-in` or `list-roll`: cycle candidate words; `focus-in` and `ink-sweep`: reveal a line.
- Props differ. Read each installed interface; `lead/before/after` is not interchangeable with `text`.
- Longer copy or more words can extend the animation. Re-budget the sequence and inspect the last word, rather than increasing `speed` to force a fit.

Verified example toolchain: Remotion 4.0.473 and TypeScript 5.9.3. Keep all @remotion/* packages on the same version; re-run compilation and rendering when using another toolchain.

## Project and installation

Use a Remotion TypeScript project with dependencies installed and a `src/` directory. If starting empty, run `npx create-video@latest` and choose the blank TypeScript template. Node.js 20.19+ is required.

The example loads Geist through `@remotion/google-fonts`. Install that package at the same exact version as the project's `remotion`; keep all `@remotion/*` versions aligned. No shadcn initialization, `components.json`, API key or import alias is needed for the current free components.

```bash
npx @imgcli/cli add strike-swap slot-in statement-cuts
```

Run from the project root after `src/` exists. Files land in `src/components/imgcli/`, with dependencies and relative imports handled by the CLI. If there is no `src/`, the CLI installs under the project root instead; adapt the example's relative paths accordingly. Existing files with different contents are preserved: inspect the conflict instead of forcing an overwrite.

## Runnable example

Copy [examples/index.tsx](examples/index.tsx) to `src/index.tsx`. This entry includes its `Composition` registration: `KineticType`, 333 frames at 30 fps, 1280 × 720 (11.1 seconds). Use the component in your existing Root instead if your project already has registrations.

Required media: No external assets. Replace the example script with the user's approved copy.

The example is a technical starting point, not customer evidence. Replace its name, copy, media, URLs and any illustrative data before publishing. Choose the user's language and aspect ratio, then inspect that actual layout; the landscape example is not a promise of automatic portrait reflow.

## Compile, inspect and render

```bash
npx tsc --noEmit
npx remotion still src/index.tsx KineticType out/beat.png --frame=166
npx remotion render src/index.tsx KineticType out/KineticType.mp4 --codec=h264 --crf=18
```

Inspect a frame in every beat, both sides of cuts, the first fully readable frame and the final hold. Check all required media, line wrapping, logo geometry and audio/caption alignment where present. A successful render is not visual approval. Report what was rendered, which assets were fixtures, and any missing real inputs. Publishing or uploading needs the user's instruction.

## Attribution

Existing third-party acknowledgments remain in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); retain them when redistributing.
