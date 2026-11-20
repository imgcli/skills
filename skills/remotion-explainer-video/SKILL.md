---
name: remotion-explainer-video
description: Create a narrated Remotion explainer with current Imgcli scenes, a real voiceover and timed caption overlays.
---

# Narrated explainer video

Let the approved narration determine the story and duration. Usually 30–90 seconds, with one visual claim per spoken beat.

## Choose current components

Check [the live component index](https://imgcli.com/llms-components.txt) or `npx @imgcli/cli list` before selecting scenes. Read the selected component's Markdown page at `https://imgcli.com/components/<name>.md` and its installed TypeScript interface.

- Write and approve the script, then record narration or use an available speech tool within the user's authorization. Do not require a specific paid provider.
- Put the voiceover in `public/voiceover.wav` and obtain timings from the actual narration, using a transcription tool or the speech provider's timestamps.
- Current Imgcli does not include a caption scene. Use a small timed Remotion overlay (as in the example), or an available caption library. Do not invent an installable caption component.
- The example uses sentence pages. For word highlighting, derive word timings from the actual audio and validate them; static cue times are not an alignment algorithm.
- Fit each sequence to its spoken sentence while allowing the component to finish. Keep captions clear of device controls, scene headlines and logos.

Verified example toolchain: Remotion 4.0.473 and TypeScript 5.9.3. Keep all @remotion/* packages on the same version; re-run compilation and rendering when using another toolchain.

## Project and installation

Use a Remotion TypeScript project with dependencies installed and a `src/` directory. If starting empty, run `npx create-video@latest` and choose the blank TypeScript template. Node.js 20.19+ is required.

The example loads Geist through `@remotion/google-fonts`. Install that package at the same exact version as the project's `remotion`; keep all `@remotion/*` versions aligned. No shadcn initialization, `components.json`, API key or import alias is needed for the current free components.

```bash
npx @imgcli/cli add statement-cuts checklist-run laptop-lid lockup-draw
```

Run from the project root after `src/` exists. Files land in `src/components/imgcli/`, with dependencies and relative imports handled by the CLI. If there is no `src/`, the CLI installs under the project root instead; adapt the example's relative paths accordingly. Existing files with different contents are preserved: inspect the conflict instead of forcing an overwrite.

## Runnable example

Copy [examples/index.tsx](examples/index.tsx) to `src/index.tsx`. This entry includes its `Composition` registration: `Explainer`, 900 frames at 30 fps, 1280 × 720 (30.0 seconds). Use the component in your existing Root instead if your project already has registrations.

Required media: `public/voiceover.wav` (30 seconds for the unmodified example), `public/screenshot.svg` (16:10), and `public/logo.svg`. The cue text and times in the example are illustrative; replace both with the approved narration and its real timings.

The example is a technical starting point, not customer evidence. Replace its name, copy, media, URLs and any illustrative data before publishing. Choose the user's language and aspect ratio, then inspect that actual layout; the landscape example is not a promise of automatic portrait reflow.

## Compile, inspect and render

```bash
npx tsc --noEmit
npx remotion still src/index.tsx Explainer out/beat.png --frame=450
npx remotion render src/index.tsx Explainer out/Explainer.mp4 --codec=h264 --crf=18
```

Inspect a frame in every beat, both sides of cuts, the first fully readable frame and the final hold. Check all required media, line wrapping, logo geometry and audio/caption alignment where present. A successful render is not visual approval. Report what was rendered, which assets were fixtures, and any missing real inputs. Publishing or uploading needs the user's instruction.

## Attribution

Existing third-party acknowledgments remain in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); retain them when redistributing.
